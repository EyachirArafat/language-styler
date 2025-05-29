import { getLangConfig, LanguageConfig } from './config';

export interface TextSegment {
    text: string;
    className: string;
    isRTL: boolean;
}

export function processReactText(text: string, langConfig = getLangConfig()): TextSegment[] {
    if (typeof text !== "string") throw new Error("Text must be a string");

    const segments: TextSegment[] = [];
    let currentSegment = "";
    let currentLang: LanguageConfig | null = null;

    for (let char of text) {
        const lang = detectLang(char, langConfig);
        if (currentLang && lang.name !== currentLang.name) {
            segments.push({ text: currentSegment, className: currentLang.className, isRTL: currentLang.isRTL });
            currentSegment = char;
            currentLang = lang;
        } else {
            currentSegment += char;
            currentLang = lang;
        }
    }

    if (currentSegment) {
        segments.push({ text: currentSegment, className: currentLang?.className || '', isRTL: currentLang?.isRTL || false });
    }

    return segments;
}

function detectLang(char: string, config: LanguageConfig[]): LanguageConfig {
    for (const lang of config) if (lang.regex.test(char)) return lang;
    return { name: "default", className: "default", isRTL: false, regex: /./ };
}