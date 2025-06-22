export const SUPPORTED_LANGUAGES = {
    Bengali: {
        regex: /[\u0980-\u09FF\u09E6-\u09EF]/,
        className: "lang-bengali",
        isRTL: false,
        fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif"
    },
    English: {
        regex: /[A-Za-z0-9]/,
        className: "lang-english",
        isRTL: false,
        fontFamily: "'Inter', 'Arial', sans-serif"
    },
    Arabic: {
        regex: /[\u0600-\u06FF\u0660-\u0669]/,
        className: "lang-arabic",
        isRTL: true,
        fontFamily: "'Amiri', 'Arial Unicode MS', sans-serif"
    },
    Chinese: {
        regex: /[\u4E00-\u9FFF]/,
        className: "lang-chinese",
        isRTL: false,
        fontFamily: "'Noto Sans SC', 'SimSun', sans-serif"
    },
    Hindi: {
        regex: /[\u0900-\u097F\u0966-\u096F]/,
        className: "lang-hindi",
        isRTL: false,
        fontFamily: "'Noto Sans Devanagari', sans-serif"
    },
    Japanese: {
        regex: /[\u3040-\u309F\u30A0-\u30FF]/,
        className: "lang-japanese",
        isRTL: false,
        fontFamily: "'Noto Sans JP', 'Yu Gothic', sans-serif"
    },
    Korean: {
        regex: /[\uAC00-\uD7AF]/,
        className: "lang-korean",
        isRTL: false,
        fontFamily: "'Noto Sans KR', 'Malgun Gothic', sans-serif"
    },
    Russian: {
        regex: /[\u0400-\u04FF]/,
        className: "lang-russian",
        isRTL: false,
        fontFamily: "'Roboto', 'Arial', sans-serif"
    },
    Urdu: {
        regex: /[\u0600-\u06FF\u0660-\u0669]/,
        className: "lang-urdu",
        isRTL: true,
        fontFamily: "'Noto Nastaliq Urdu', sans-serif"
    }
} as const;

export const RTL_LANGUAGES = ["Arabic", "Hebrew", "Urdu"] as const;

export const DEFAULT_LANGUAGE = {
    name: "default",
    className: "lang-default",
    isRTL: false,
    fontFamily: "inherit",
    regex: /./
} as const;

// Language priority for overlapping ranges
export const LANGUAGE_PRIORITY = [
    "Arabic", "Bengali", "Urdu", "Hindi", "Chinese", "Japanese",
    "Korean", "Russian", "English"
] as const;