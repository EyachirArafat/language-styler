import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';
import { LanguageConfig, ProcessorOptions, ProcessResult, TextSegment } from './types';

export class TextProcessor {
    private options: Required<ProcessorOptions>;
    private languageConfigs: LanguageConfig[];
    private customLanguages: Map<string, LanguageConfig> = new Map();

    constructor(options: ProcessorOptions = {}) {
        this.options = {
            languages: options.languages || Object.keys(SUPPORTED_LANGUAGES),
            enableRTL: options.enableRTL ?? true,
            enableFonts: options.enableFonts ?? true,
            customClasses: options.customClasses || {},
            customFonts: options.customFonts || {},
            mergeWhitespace: options.mergeWhitespace ?? true,
            preserveSpaces: options.preserveSpaces ?? true
        };

        this.languageConfigs = this.initializeConfigs();
    }

    private initializeConfigs(): LanguageConfig[] {
        const configs: LanguageConfig[] = [];

        // Add built-in languages
        for (const name of this.options.languages) {
            const config = SUPPORTED_LANGUAGES[name as keyof typeof SUPPORTED_LANGUAGES];
            if (config) {
                configs.push({
                    name,
                    ...config
                });
            }
        }

        // Add custom languages
        for (const [name, config] of this.customLanguages) {
            configs.push(config);
        }

        return configs;
    }

    // NEW: Add custom language
    public addLanguage(
        name: string,
        regex: RegExp,
        className: string,
        isRTL: boolean = false,
        fontFamily: string = 'inherit'
    ): void {
        if (SUPPORTED_LANGUAGES[name as keyof typeof SUPPORTED_LANGUAGES]) {
            throw new Error(`Language ${name} already exists as built-in language`);
        }

        if (this.customLanguages.has(name)) {
            throw new Error(`Custom language ${name} already exists`);
        }

        const languageConfig: LanguageConfig = {
            name,
            regex,
            className,
            isRTL,
            fontFamily
        };

        this.customLanguages.set(name, languageConfig);

        // Update language configs
        this.languageConfigs = this.initializeConfigs();

        // Add to enabled languages if not already there
        if (!this.options.languages.includes(name)) {
            this.options.languages.push(name);
        }
    }

    // NEW: Remove custom language
    public removeLanguage(name: string): boolean {
        const removed = this.customLanguages.delete(name);
        if (removed) {
            this.languageConfigs = this.initializeConfigs();
            this.options.languages = this.options.languages.filter(lang => lang !== name);
        }
        return removed;
    }

    // NEW: Get all available languages
    public getAvailableLanguages(): string[] {
        const builtIn = Object.keys(SUPPORTED_LANGUAGES);
        const custom = Array.from(this.customLanguages.keys());
        return [...builtIn, ...custom];
    }

    // NEW: Get language config
    public getLanguageConfig(name: string): LanguageConfig | null {
        // Check built-in first
        const builtIn = SUPPORTED_LANGUAGES[name as keyof typeof SUPPORTED_LANGUAGES];
        if (builtIn) {
            return { name, ...builtIn };
        }

        // Check custom
        return this.customLanguages.get(name) || null;
    }

    private detectCharacter(char: string): LanguageConfig {
        // Check each enabled language (custom languages checked first)
        for (const config of this.languageConfigs) {
            if (config.regex.test(char)) {
                return config;
            }
        }

        // Default fallback
        return DEFAULT_LANGUAGE;
    }

    public processText(text: string): ProcessResult {
        const startTime = performance.now();

        if (!text || typeof text !== 'string') {
            throw new Error('Valid text input is required');
        }

        const segments = this.processCharacterByCharacter(text);
        const html = this.segmentsToHTML(segments);

        const endTime = performance.now();
        const languagesDetected = [...new Set(segments.map(s => s.language))].filter(l => l !== 'default');

        return {
            segments,
            html,
            stats: {
                totalCharacters: text.length,
                totalSegments: segments.length,
                languagesDetected,
                processingTime: endTime - startTime
            }
        };
    }

    private processCharacterByCharacter(text: string): TextSegment[] {
        if (!text) return [];

        const segments: TextSegment[] = [];
        let currentText = '';
        let currentLang: LanguageConfig | null = null;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const detectedLang = this.detectCharacter(char);

            if (currentLang === null) {
                currentText = char;
                currentLang = detectedLang;
                continue;
            }

            if (detectedLang.name === currentLang.name) {
                currentText += char;
                continue;
            }

            if (currentText) {
                segments.push(this.createSegment(currentText, currentLang));
            }

            currentText = char;
            currentLang = detectedLang;
        }

        if (currentText && currentLang) {
            segments.push(this.createSegment(currentText, currentLang));
        }

        return this.postProcessMerging(segments);
    }

    private postProcessMerging(segments: TextSegment[]): TextSegment[] {
        if (segments.length <= 2) return segments;

        const merged: TextSegment[] = [];
        let i = 0;

        while (i < segments.length) {
            const current = segments[i];

            if (i + 2 < segments.length) {
                const space = segments[i + 1];
                const next = segments[i + 2];

                if (this.isSameLanguage(current, next) && this.isSpace(space)) {
                    const mergedSegment = this.createSegment(
                        current.text + space.text + next.text,
                        current
                    );

                    let j = i + 3;
                    let mergedText = mergedSegment.text;

                    while (j < segments.length) {
                        if (j + 1 < segments.length &&
                            this.isSpace(segments[j]) &&
                            this.isSameLanguage(current, segments[j + 1])) {
                            mergedText += segments[j].text + segments[j + 1].text;
                            j += 2;
                        } else if (this.isSameLanguage(current, segments[j])) {
                            mergedText += segments[j].text;
                            j++;
                        } else {
                            break;
                        }
                    }

                    merged.push(this.createSegment(mergedText, current));
                    i = j;
                    continue;
                }
            }

            merged.push(current);
            i++;
        }

        return merged;
    }

    private isSameLanguage(seg1: TextSegment, seg2: TextSegment): boolean {
        return seg1.language === seg2.language &&
            seg1.className === seg2.className;
    }

    private isSpace(segment: TextSegment): boolean {
        return /^\s+$/.test(segment.text);
    }

    private createSegment(text: string, langConfig: LanguageConfig | TextSegment): TextSegment {
        const language = 'language' in langConfig ? langConfig.language : langConfig.name;
        const className = this.options.customClasses[language] ||
            (langConfig as any).className;
        const fontFamily = this.options.customFonts[language] ||
            (this.options.enableFonts ?
                (langConfig as any).fontFamily : 'inherit');
        const isRTL = this.options.enableRTL &&
            (langConfig as any).isRTL;

        return {
            text,
            language,
            className,
            isRTL,
            fontFamily
        };
    }

    private segmentsToHTML(segments: TextSegment[]): string {
        return segments.map(segment => {
            const attributes: string[] = [`class="${segment.className}"`];

            if (segment.isRTL) {
                attributes.push('dir="rtl"');
            }

            if (this.options.enableFonts && segment.fontFamily !== 'inherit') {
                attributes.push(`style="font-family: ${segment.fontFamily}"`);
            }

            return `<span ${attributes.join(' ')}>${this.escapeHTML(segment.text)}</span>`;
        }).join('');
    }

    private escapeHTML(text: string): string {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}