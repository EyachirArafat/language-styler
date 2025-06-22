import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';
import { LanguageConfig, ProcessorOptions, ProcessResult, TextSegment } from './types';

export class TextProcessor {
    private options: Required<ProcessorOptions>;
    private languageConfigs: LanguageConfig[];

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
        return this.options.languages.map(name => {
            const config = SUPPORTED_LANGUAGES[name as keyof typeof SUPPORTED_LANGUAGES];
            if (!config) {
                throw new Error(`Language ${name} is not supported`);
            }
            return {
                name,
                ...config
            };
        });
    }

    private detectCharacter(char: string): LanguageConfig {
        // Check each enabled language
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

        // Process character by character with aggressive merging
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

            // First character
            if (currentLang === null) {
                currentText = char;
                currentLang = detectedLang;
                continue;
            }

            // Same language - keep building
            if (detectedLang.name === currentLang.name) {
                currentText += char;
                continue;
            }

            // Language changed - save current segment
            if (currentText) {
                segments.push(this.createSegment(currentText, currentLang));
            }

            // Start new segment
            currentText = char;
            currentLang = detectedLang;
        }

        // Add final segment
        if (currentText && currentLang) {
            segments.push(this.createSegment(currentText, currentLang));
        }

        // Post-process: merge segments separated only by spaces
        return this.postProcessMerging(segments);
    }

    private postProcessMerging(segments: TextSegment[]): TextSegment[] {
        if (segments.length <= 2) return segments;

        const merged: TextSegment[] = [];
        let i = 0;

        while (i < segments.length) {
            const current = segments[i];

            // Look for pattern: [Language] [Space] [Same Language]
            if (i + 2 < segments.length) {
                const space = segments[i + 1];
                const next = segments[i + 2];

                // If current and next+2 are same language, and middle is space
                if (this.isSameLanguage(current, next) && this.isSpace(space)) {
                    // Merge all three
                    const mergedSegment = this.createSegment(
                        current.text + space.text + next.text,
                        this.getLanguageConfig(current.language)
                    );

                    // Continue merging if more same-language segments follow
                    let j = i + 3;
                    let mergedText = mergedSegment.text;

                    while (j < segments.length) {
                        if (j + 1 < segments.length &&
                            this.isSpace(segments[j]) &&
                            this.isSameLanguage(current, segments[j + 1])) {
                            // Merge space + same language
                            mergedText += segments[j].text + segments[j + 1].text;
                            j += 2;
                        } else if (this.isSameLanguage(current, segments[j])) {
                            // Direct same language (no space)
                            mergedText += segments[j].text;
                            j++;
                        } else {
                            break;
                        }
                    }

                    merged.push(this.createSegment(mergedText, this.getLanguageConfig(current.language)));
                    i = j;
                    continue;
                }
            }

            // No merging possible, add current segment
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

    private getLanguageConfig(languageName: string): LanguageConfig {
        const config = SUPPORTED_LANGUAGES[languageName as keyof typeof SUPPORTED_LANGUAGES];
        return config ? { name: languageName, ...config } : DEFAULT_LANGUAGE;
    }

    private createSegment(text: string, langConfig: LanguageConfig): TextSegment {
        const className = this.options.customClasses[langConfig.name] || langConfig.className;
        const fontFamily = this.options.customFonts[langConfig.name] ||
            (this.options.enableFonts ? langConfig.fontFamily : 'inherit');

        return {
            text,
            language: langConfig.name,
            className,
            isRTL: this.options.enableRTL && langConfig.isRTL,
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