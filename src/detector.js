const defaultLanguageConfig = [
  {
    name: "Bengali",
    regex: /[\u0980-\u09FF]/,
    className: "bengali-text",
  },
  {
    name: "English",
    regex: /[A-Za-z]/,
    className: "english-text",
  },
  {
    name: "Arabic",
    regex: /[\u0600-\u06FF]/,
    className: "arabic-text",
  },
];

// list of some supported languages
const supportedLanguages = {
  Bengali: { regex: /[\u0980-\u09FF]/, className: "bengali-text" },
  English: { regex: /[A-Za-z]/, className: "english-text" },
  Arabic: { regex: /[\u0600-\u06FF]/, className: "arabic-text" },
  Chinese: { regex: /[\u4E00-\u9FFF]/, className: "chinese-text" },
  Hindi: { regex: /[\u0900-\u097F]/, className: "hindi-text" },
  Japanese: {
    regex: /[\u3040-\u309F\u30A0-\u30FF]/,
    className: "japanese-text",
  },
  Korean: { regex: /[\uAC00-\uD7AF]/, className: "korean-text" },
  Russian: { regex: /[\u0400-\u04FF]/, className: "russian-text" },
  Tamil: { regex: /[\u0B80-\u0BFF]/, className: "tamil-text" },
  Telugu: { regex: /[\u0C00-\u0C7F]/, className: "telugu-text" },
  Malayalam: { regex: /[\u0D00-\u0D7F]/, className: "malayalam-text" },
  Thai: { regex: /[\u0E00-\u0E7F]/, className: "thai-text" },
  Greek: { regex: /[\u0370-\u03FF]/, className: "greek-text" },
  Hebrew: { regex: /[\u0590-\u05FF]/, className: "hebrew-text" },
  Georgian: { regex: /[\u10A0-\u10FF]/, className: "georgian-text" },
  Armenian: { regex: /[\u0530-\u058F]/, className: "armenian-text" },
  Gujarati: { regex: /[\u0A80-\u0AFF]/, className: "gujarati-text" },
  Punjabi: { regex: /[\u0A00-\u0A7F]/, className: "punjabi-text" },
  Kannada: { regex: /[\u0C80-\u0CFF]/, className: "kannada-text" },
  Sinhala: { regex: /[\u0D80-\u0DFF]/, className: "sinhala-text" },
  LatinExtended: { regex: /[\u00C0-\u024F]/, className: "latin-extended-text" },
  DevanagariExtended: {
    regex: /[\u0900-\u097F]/,
    className: "devanagari-extended-text",
  },
};

/**
 * Adds a custom language to supportedLanguages.
 * @param {string} name - Language name (e.g., "Bengali").
 * @param {RegExp} regex - Unicode regex for the language.
 * @param {string} className - CSS class name for styling.
 */
function addCustomLanguage(name, regex, className) {
  if (supportedLanguages[name]) {
    throw new Error(`Language ${name} already exists`);
  }
  supportedLanguages[name] = { regex, className };
}

/**
 * Returns language configuration for specified language names.
 * @param {string[]} languageNames - Array of language names (e.g., ["Bengali", "Chinese"]).
 * @returns {Object[]} Array of language configurations.
 */
function getLanguageConfig(languageNames) {
  return languageNames.map((name) => {
    if (!supportedLanguages[name]) {
      throw new Error(`Unsupported language: ${name}`);
    }
    return {
      name,
      regex: supportedLanguages[name].regex,
      className: supportedLanguages[name].className,
    };
  });
}

/**
 * Detects the language of a single character based on the provided config.
 * @param {string} char - The character to analyze.
 * @param {Array} languageConfig - Array of language configurations.
 * @returns {Object} - Language configuration object or default.
 */
function detectLanguage(char, languageConfig) {
  for (const lang of languageConfig) {
    if (lang.regex.test(char)) {
      return lang;
    }
  }
  return { name: "default", className: "default-text" };
}

/**
 * Processes text and wraps each character in a span with the appropriate CSS class.
 * @param {string} text - The input text to process.
 * @param {Array} [languageConfig=defaultLanguageConfig] - Language configuration.
 * @returns {string} Processed HTML string with styled spans.
 */
function processText(text, languageConfig = defaultLanguageConfig) {
  if (!text || typeof text !== "string") {
    throw new Error("Valid text input is required");
  }

  const words = text.split(/(\s+)/);
  let newContent = "";

  words.forEach((word) => {
    if (word.trim() === "" || word === "\n") {
      newContent += word;
      return;
    }

    let processedWord = "";
    for (let char of word) {
      const lang = detectLanguage(char, languageConfig);
      processedWord += `<span class="${lang.className}">${char}</span>`;
    }
    newContent += processedWord;
  });

  return newContent;
}

/**
 * Processes an HTML element, preserving HTML tags and styling text nodes.
 * @param {HTMLElement} element - The DOM element to process.
 * @param {Array} [languageConfig=defaultLanguageConfig] - Language configuration.
 */
function processElement(element, languageConfig = defaultLanguageConfig) {
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.innerHTML = processText(node.textContent, languageConfig);
      node.replaceWith(span);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of Array.from(node.childNodes)) {
        processNode(child);
      }
    }
  }

  for (let child of Array.from(element.childNodes)) {
    processNode(child);
  }
}

export {
  addCustomLanguage,
  defaultLanguageConfig,
  getLanguageConfig,
  processElement,
  processText,
};
