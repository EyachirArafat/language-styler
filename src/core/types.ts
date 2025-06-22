export interface LanguageConfig {
    name: string;
    regex: RegExp;
    className: string;
    isRTL: boolean;
    fontFamily: string;
}

export interface TextSegment {
    text: string;
    language: string;
    className: string;
    isRTL: boolean;
    fontFamily: string;
}

export interface ProcessorOptions {
    languages?: string[];
    enableRTL?: boolean;
    enableFonts?: boolean;
    customClasses?: Record<string, string>;
    customFonts?: Record<string, string>;
    mergeWhitespace?: boolean;
    preserveSpaces?: boolean;
}

export interface ProcessResult {
    segments: TextSegment[];
    html: string;
    stats: {
        totalCharacters: number;
        totalSegments: number;
        languagesDetected: string[];
        processingTime: number;
    };
}