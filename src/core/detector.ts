import { DEFAULT_LANGUAGE, LANGUAGE_PRIORITY, SUPPORTED_LANGUAGES } from './constants';
import { LanguageConfig } from './types';

export class LanguageDetector {
    private languageConfigs: Map<string, LanguageConfig>;
    private enabledLanguages: string[];

    constructor(languages: string[] = Object.keys(SUPPORTED_LANGUAGES)) {
        this.enabledLanguages = languages;
        this.languageConfigs = new Map();
        this.initializeConfigs();
    }

    private initializeConfigs(): void {
        // Sort by priority to handle overlapping ranges
        const sortedLanguages = this.enabledLanguages.sort((a, b) => {
            const priorityA = LANGUAGE_PRIORITY.indexOf(a as any);
            const priorityB = LANGUAGE_PRIORITY.indexOf(b as any);
            return priorityA - priorityB;
        });

        for (const langName of sortedLanguages) {
            const config = SUPPORTED_LANGUAGES[langName as keyof typeof SUPPORTED_LANGUAGES];
            if (config) {
                this.languageConfigs.set(langName, {
                    name: langName,
                    ...config
                });
            }
        }
    }

    public detectCharacter(char: string): LanguageConfig {
        // Skip whitespace and common punctuation
        if (/\s/.test(char)) {
            return { ...DEFAULT_LANGUAGE, name: "whitespace" };
        }

        // Check each enabled language
        for (const [langName, config] of this.languageConfigs) {
            if (config.regex.test(char)) {
                return config;
            }
        }

        // Default fallback
        return DEFAULT_LANGUAGE;
    }

    public detectText(text: string): Map<string, number> {
        const languageCount = new Map<string, number>();

        for (const char of text) {
            const detected = this.detectCharacter(char);
            if (detected.name !== "whitespace") {
                languageCount.set(detected.name, (languageCount.get(detected.name) || 0) + 1);
            }
        }

        return languageCount;
    }

    public getEnabledLanguages(): string[] {
        return [...this.enabledLanguages];
    }

    public getLanguageConfig(name: string): LanguageConfig | undefined {
        return this.languageConfigs.get(name);
    }
}