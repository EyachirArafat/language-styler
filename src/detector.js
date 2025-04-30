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

export { defaultLanguageConfig, processText };
