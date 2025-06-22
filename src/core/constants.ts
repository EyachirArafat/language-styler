export const SUPPORTED_LANGUAGES = {
    // South Asian Languages
    Bengali: {
        regex: /[\u0980-\u09FF\u09E6-\u09EF]/,
        className: "lang-bengali",
        isRTL: false,
        fontFamily: "'Kalpurush', 'SolaimanLipi', 'Mukti', sans-serif"
    },
    Hindi: {
        regex: /[\u0900-\u097F\u0966-\u096F]/,
        className: "lang-hindi",
        isRTL: false,
        fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif"
    },
    Tamil: {
        regex: /[\u0B80-\u0BFF\u0BE6-\u0BEF]/,
        className: "lang-tamil",
        isRTL: false,
        fontFamily: "'Noto Sans Tamil', 'Latha', sans-serif"
    },
    Telugu: {
        regex: /[\u0C00-\u0C7F\u0C66-\u0C6F]/,
        className: "lang-telugu",
        isRTL: false,
        fontFamily: "'Noto Sans Telugu', 'Gautami', sans-serif"
    },
    Malayalam: {
        regex: /[\u0D00-\u0D7F\u0D66-\u0D6F]/,
        className: "lang-malayalam",
        isRTL: false,
        fontFamily: "'Noto Sans Malayalam', 'Kartika', sans-serif"
    },
    Gujarati: {
        regex: /[\u0A80-\u0AFF\u0AE6-\u0AEF]/,
        className: "lang-gujarati",
        isRTL: false,
        fontFamily: "'Noto Sans Gujarati', 'Shruti', sans-serif"
    },
    Punjabi: {
        regex: /[\u0A00-\u0A7F\u0A66-\u0A6F]/,
        className: "lang-punjabi",
        isRTL: false,
        fontFamily: "'Noto Sans Gurmukhi', 'Raavi', sans-serif"
    },
    Kannada: {
        regex: /[\u0C80-\u0CFF\u0CE6-\u0CEF]/,
        className: "lang-kannada",
        isRTL: false,
        fontFamily: "'Noto Sans Kannada', 'Tunga', sans-serif"
    },
    Sinhala: {
        regex: /[\u0D80-\u0DFF\u0DE6-\u0DEF]/,
        className: "lang-sinhala",
        isRTL: false,
        fontFamily: "'Noto Sans Sinhala', 'Iskoola Pota', sans-serif"
    },
    Marathi: {
        regex: /[\u0900-\u097F\u0966-\u096F]/,
        className: "lang-marathi",
        isRTL: false,
        fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif"
    },
    Nepali: {
        regex: /[\u0900-\u097F\u0966-\u096F]/,
        className: "lang-nepali",
        isRTL: false,
        fontFamily: "'Noto Sans Devanagari', 'Kalimati', sans-serif"
    },
    Odia: {
        regex: /[\u0B00-\u0B7F\u0B66-\u0B6F]/,
        className: "lang-odia",
        isRTL: false,
        fontFamily: "'Noto Sans Oriya', 'Kalinga', sans-serif"
    },
    Assamese: {
        regex: /[\u0980-\u09FF\u09E6-\u09EF]/,
        className: "lang-assamese",
        isRTL: false,
        fontFamily: "'Noto Sans Bengali', 'Vrinda', sans-serif"
    },

    // Middle Eastern & Arabic Script Languages
    Arabic: {
        regex: /[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9\u0750-\u077F]/,
        className: "lang-arabic",
        isRTL: true,
        fontFamily: "'Amiri', 'Scheherazade New', 'Arial Unicode MS', sans-serif"
    },
    Persian: {
        regex: /[\u0600-\u06FF\u06F0-\u06F9]/,
        className: "lang-persian",
        isRTL: true,
        fontFamily: "'Vazir', 'Tahoma', sans-serif"
    },
    Urdu: {
        regex: /[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9]/,
        className: "lang-urdu",
        isRTL: true,
        fontFamily: "'Noto Nastaliq Urdu', 'Alvi Nastaleeq', sans-serif"
    },
    Hebrew: {
        regex: /[\u0590-\u05FF]/,
        className: "lang-hebrew",
        isRTL: true,
        fontFamily: "'Noto Sans Hebrew', 'David', sans-serif"
    },
    Kurdish: {
        regex: /[\u0600-\u06FF]/,
        className: "lang-kurdish",
        isRTL: true,
        fontFamily: "'Noto Sans Arabic', sans-serif"
    },
    Pashto: {
        regex: /[\u0600-\u06FF\u06F0-\u06F9]/,
        className: "lang-pashto",
        isRTL: true,
        fontFamily: "'Noto Sans Arabic', sans-serif"
    },

    // East Asian Languages
    Chinese: {
        regex: /[\u4E00-\u9FFF\u3400-\u4DBF]/,
        className: "lang-chinese",
        isRTL: false,
        fontFamily: "'Noto Sans SC', 'PingFang SC', 'SimSun', sans-serif"
    },
    ChineseTraditional: {
        regex: /[\u4E00-\u9FFF\u3400-\u4DBF]/,
        className: "lang-chinese-traditional",
        isRTL: false,
        fontFamily: "'Noto Sans TC', 'PingFang TC', 'MingLiU', sans-serif"
    },
    Japanese: {
        regex: /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/,
        className: "lang-japanese",
        isRTL: false,
        fontFamily: "'Noto Sans JP', 'Yu Gothic', 'Meiryo', sans-serif"
    },
    Korean: {
        regex: /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/,
        className: "lang-korean",
        isRTL: false,
        fontFamily: "'Noto Sans KR', 'Malgun Gothic', 'Dotum', sans-serif"
    },

    // Southeast Asian Languages
    Thai: {
        regex: /[\u0E00-\u0E7F\u0E50-\u0E59]/,
        className: "lang-thai",
        isRTL: false,
        fontFamily: "'Noto Sans Thai', 'Tahoma', sans-serif"
    },
    Vietnamese: {
        regex: /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/,
        className: "lang-vietnamese",
        isRTL: false,
        fontFamily: "'Noto Sans Vietnamese', 'Times New Roman', serif"
    },
    Khmer: {
        regex: /[\u1780-\u17FF]/,
        className: "lang-khmer",
        isRTL: false,
        fontFamily: "'Noto Sans Khmer', 'Khmer UI', sans-serif"
    },
    Lao: {
        regex: /[\u0E80-\u0EFF]/,
        className: "lang-lao",
        isRTL: false,
        fontFamily: "'Noto Sans Lao', 'DokChampa', sans-serif"
    },
    Myanmar: {
        regex: /[\u1000-\u109F]/,
        className: "lang-myanmar",
        isRTL: false,
        fontFamily: "'Noto Sans Myanmar', 'Myanmar Text', sans-serif"
    },
    Tagalog: {
        regex: /[àáâäèéêëìíîïòóôöùúûü]/,
        className: "lang-tagalog",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Indonesian: {
        regex: /[A-Za-z]/,
        className: "lang-indonesian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Malay: {
        regex: /[A-Za-z]/,
        className: "lang-malay",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },

    // European Languages
    English: {
        regex: /[A-Za-z0-9]/,
        className: "lang-english",
        isRTL: false,
        fontFamily: "'Inter', 'Segoe UI', 'Arial', sans-serif"
    },
    Spanish: {
        regex: /[A-Za-zñáéíóúü¿¡]/,
        className: "lang-spanish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    French: {
        regex: /[A-Za-zàâäéèêëïîôöùûüÿç]/,
        className: "lang-french",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    German: {
        regex: /[A-Za-zäöüß]/,
        className: "lang-german",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Italian: {
        regex: /[A-Za-zàèéìíîòóù]/,
        className: "lang-italian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Portuguese: {
        regex: /[A-Za-zàáâãçéêíóôõú]/,
        className: "lang-portuguese",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Russian: {
        regex: /[\u0400-\u04FF]/,
        className: "lang-russian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Segoe UI', 'Arial', sans-serif"
    },
    Ukrainian: {
        regex: /[\u0400-\u04FF]/,
        className: "lang-ukrainian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Segoe UI', sans-serif"
    },
    Polish: {
        regex: /[A-Za-ząćęłńóśźż]/,
        className: "lang-polish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Czech: {
        regex: /[A-Za-záčďéěíňóřšťúůýž]/,
        className: "lang-czech",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Hungarian: {
        regex: /[A-Za-záéíóöőúüű]/,
        className: "lang-hungarian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Romanian: {
        regex: /[A-Za-zăâîșț]/,
        className: "lang-romanian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Dutch: {
        regex: /[A-Za-z]/,
        className: "lang-dutch",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Swedish: {
        regex: /[A-Za-zåäö]/,
        className: "lang-swedish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Norwegian: {
        regex: /[A-Za-zæøå]/,
        className: "lang-norwegian",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Danish: {
        regex: /[A-Za-zæøå]/,
        className: "lang-danish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Finnish: {
        regex: /[A-Za-zäöå]/,
        className: "lang-finnish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Greek: {
        regex: /[\u0370-\u03FF]/,
        className: "lang-greek",
        isRTL: false,
        fontFamily: "'Noto Sans Greek', 'Times New Roman', serif"
    },
    Turkish: {
        regex: /[A-Za-zçğıöşü]/,
        className: "lang-turkish",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },

    // African Languages
    Amharic: {
        regex: /[\u1200-\u137F]/,
        className: "lang-amharic",
        isRTL: false,
        fontFamily: "'Noto Sans Ethiopic', 'Nyala', sans-serif"
    },
    Swahili: {
        regex: /[A-Za-z]/,
        className: "lang-swahili",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Hausa: {
        regex: /[A-Za-z]/,
        className: "lang-hausa",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Yoruba: {
        regex: /[A-Za-zàáèéìíòóùúẹọṣ]/,
        className: "lang-yoruba",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },
    Igbo: {
        regex: /[A-Za-zàáèéìíòóùúịọụ]/,
        className: "lang-igbo",
        isRTL: false,
        fontFamily: "'Noto Sans', 'Arial', sans-serif"
    },

    // Caucasian Languages
    Georgian: {
        regex: /[\u10A0-\u10FF]/,
        className: "lang-georgian",
        isRTL: false,
        fontFamily: "'Noto Sans Georgian', 'Sylfaen', sans-serif"
    },
    Armenian: {
        regex: /[\u0530-\u058F]/,
        className: "lang-armenian",
        isRTL: false,
        fontFamily: "'Noto Sans Armenian', 'Sylfaen', sans-serif"
    },

    // Other Languages
    Mongolian: {
        regex: /[\u1800-\u18AF]/,
        className: "lang-mongolian",
        isRTL: false,
        fontFamily: "'Noto Sans Mongolian', 'Mongolian Baiti', sans-serif"
    },
    Tibetan: {
        regex: /[\u0F00-\u0FFF]/,
        className: "lang-tibetan",
        isRTL: false,
        fontFamily: "'Noto Sans Tibetan', 'Microsoft Himalaya', sans-serif"
    },
    Emoji: {
        regex: /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u,
        className: "lang-emoji",
        isRTL: false,
        fontFamily: "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif"
    },
    Numbers: {
        regex: /[0-9]/,
        className: "lang-numbers",
        isRTL: false,
        fontFamily: "'Roboto Mono', 'Consolas', monospace"
    },
    Punctuation: {
        regex: /[.,;:!?'"()[\]{}<>@#$%^&*+=|\\\/~`-]/,
        className: "lang-punctuation",
        isRTL: false,
        fontFamily: "inherit"
    },

    // Programming & Technical
    Code: {
        regex: /[{}();=<>]/,
        className: "lang-code",
        isRTL: false,
        fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace"
    },
    Math: {
        regex: /[∑∏∫∂∆∇±×÷≠≤≥∞π√∝∈∉∪∩⊂⊃⊆⊇∧∨¬∀∃]/,
        className: "lang-math",
        isRTL: false,
        fontFamily: "'Latin Modern Math', 'STIX Two Math', serif"
    },

    // Extended Latin
    LatinExtended: {
        regex: /[\u00C0-\u024F\u1E00-\u1EFF]/,
        className: "lang-latin-extended",
        isRTL: false,
        fontFamily: "'Inter', 'Noto Sans', sans-serif"
    }
} as const;

export const RTL_LANGUAGES = [
    "Arabic", "Persian", "Urdu", "Hebrew", "Kurdish", "Pashto"
] as const;

export const DEFAULT_LANGUAGE = {
    name: "default",
    className: "lang-default",
    isRTL: false,
    fontFamily: "inherit",
    regex: /./
} as const;

// Language priority for overlapping ranges (higher priority first)
export const LANGUAGE_PRIORITY = [
    // Specific scripts first
    "Emoji", "Math", "Code", "Numbers", "Punctuation",

    // RTL languages (to avoid conflicts)
    "Urdu", "Persian", "Arabic", "Hebrew", "Kurdish", "Pashto",

    // South Asian (specific to general)
    "Bengali", "Assamese", "Hindi", "Marathi", "Nepali",
    "Tamil", "Telugu", "Malayalam", "Gujarati", "Punjabi",
    "Kannada", "Sinhala", "Odia",

    // East Asian
    "Japanese", "Korean", "Chinese", "ChineseTraditional",

    // Southeast Asian
    "Thai", "Vietnamese", "Khmer", "Lao", "Myanmar",

    // European (specific to general)
    "Greek", "Russian", "Ukrainian", "Georgian", "Armenian",
    "Spanish", "French", "German", "Italian", "Portuguese",
    "Polish", "Czech", "Hungarian", "Romanian", "Turkish",
    "Swedish", "Norwegian", "Danish", "Finnish", "Dutch",

    // African
    "Amharic", "Yoruba", "Igbo", "Swahili", "Hausa",

    // Others
    "Mongolian", "Tibetan", "Tagalog", "Indonesian", "Malay",

    // Most general last
    "LatinExtended", "English"
] as const;

// Language groups for easier management
export const LANGUAGE_GROUPS = {
    SouthAsian: [
        "Bengali", "Hindi", "Tamil", "Telugu", "Malayalam",
        "Gujarati", "Punjabi", "Kannada", "Sinhala", "Marathi",
        "Nepali", "Odia", "Assamese"
    ],
    MiddleEastern: [
        "Arabic", "Persian", "Urdu", "Hebrew", "Kurdish", "Pashto"
    ],
    EastAsian: [
        "Chinese", "ChineseTraditional", "Japanese", "Korean"
    ],
    SoutheastAsian: [
        "Thai", "Vietnamese", "Khmer", "Lao", "Myanmar",
        "Tagalog", "Indonesian", "Malay"
    ],
    European: [
        "English", "Spanish", "French", "German", "Italian",
        "Portuguese", "Russian", "Ukrainian", "Polish", "Czech",
        "Hungarian", "Romanian", "Dutch", "Swedish", "Norwegian",
        "Danish", "Finnish", "Greek", "Turkish"
    ],
    African: [
        "Amharic", "Swahili", "Hausa", "Yoruba", "Igbo"
    ],
    Caucasian: [
        "Georgian", "Armenian"
    ],
    Technical: [
        "Code", "Math", "Numbers", "Punctuation", "Emoji"
    ]
} as const;

// Common language combinations
export const COMMON_COMBINATIONS = {
    Multilingual: ["English", "Bengali", "Arabic", "Chinese", "Spanish"],
    SouthAsian: ["Bengali", "Hindi", "English", "Urdu"],
    MiddleEast: ["Arabic", "Persian", "English", "Hebrew"],
    EastAsian: ["Chinese", "Japanese", "Korean", "English"],
    European: ["English", "Spanish", "French", "German", "Italian"],
    Programming: ["English", "Code", "Math", "Numbers", "Punctuation"],
    Social: ["English", "Emoji", "Numbers", "Punctuation"]
} as const;
