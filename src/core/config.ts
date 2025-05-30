import { RTL_LANGUAGES, SUPPORTED_LANGUAGES } from './constants';

export interface LanguageConfig {
    name: string;
    regex: RegExp;
    className: string;
    isRTL: boolean;
    fontFamily?: string;
}


export function getLangConfig(languages: string[] = Object.keys(SUPPORTED_LANGUAGES)): LanguageConfig[] {
    return languages.map(name => {
        if (!SUPPORTED_LANGUAGES[name]) throw new Error(`Language ${name} is not found`);
        return {
            name,
            regex: SUPPORTED_LANGUAGES[name].regex,
            className: SUPPORTED_LANGUAGES[name].className,
            isRTL: RTL_LANGUAGES.includes(name),
            fontFamily: undefined
        };
    });
}

export function addLang(name: string, regex: RegExp, className: string, isRTL: boolean = false): void {
    if (SUPPORTED_LANGUAGES[name]) throw new Error(`Language ${name} already exists`);
    SUPPORTED_LANGUAGES[name] = { regex, className, isRTL };
    if (isRTL) RTL_LANGUAGES.push(name);
}