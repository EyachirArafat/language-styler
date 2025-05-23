// src/detector.js
const supportedLang = {
  Bengali: { regex: /[\u0980-\u09FF\u09E6-\u09EF]/, className: "bengali-text" },
  English: { regex: /[A-Za-z0-9]/, className: "english-text" },
  Arabic: { regex: /[\u0600-\u06FF\u0660-\u0669]/, className: "arabic-text" },
  Chinese: { regex: /[\u4E00-\u9FFF]/, className: "chinese-text" },
  Hindi: { regex: /[\u0900-\u097F\u0966-\u096F]/, className: "hindi-text" },
  Japanese: {
    regex: /[\u3040-\u309F\u30A0-\u30FF]/,
    className: "japanese-text",
  },
  Korean: { regex: /[\uAC00-\uD7AF]/, className: "korean-text" },
  Russian: { regex: /[\u0400-\u04FF]/, className: "russian-text" },
  Tamil: { regex: /[\u0B80-\u0BFF\u0BE6-\u0BEF]/, className: "tamil-text" },
  Telugu: { regex: /[\u0C00-\u0C7F\u0C66-\u0C6F]/, className: "telugu-text" },
  Malayalam: {
    regex: /[\u0D00-\u0D7F\u0D66-\u0D6F]/,
    className: "malayalam-text",
  },
  Thai: { regex: /[\u0E00-\u0E7F\u0E50-\u0E59]/, className: "thai-text" },
  Greek: { regex: /[\u0370-\u03FF]/, className: "greek-text" },
  Hebrew: { regex: /[\u0590-\u05FF]/, className: "hebrew-text" },
  Georgian: { regex: /[\u10A0-\u10FF]/, className: "georgian-text" },
  Armenian: { regex: /[\u0530-\u058F]/, className: "armenian-text" },
  Gujarati: {
    regex: /[\u0A80-\u0AFF\u0AE6-\u0AEF]/,
    className: "gujarati-text",
  },
  Punjabi: { regex: /[\u0A00-\u0A7F\u0A66-\u0A6F]/, className: "punjabi-text" },
  Kannada: { regex: /[\u0C80-\u0CFF\u0CE6-\u0CEF]/, className: "kannada-text" },
  Sinhala: { regex: /[\u0D80-\u0DFF\u0DE6-\u0DEF]/, className: "sinhala-text" },
  LatinExtended: { regex: /[\u00C0-\u024F]/, className: "latin-extended-text" },
};

/**
 * Adds a custom language to supportedLang.
 * @param {string} name - Language name (e.g., "Bengali").
 * @param {RegExp} regex - Unicode regex for the language.
 * @param {string} className - CSS class name for styling.
 */
const addCustomLang = (name, regex, className) => {
  if (supportedLang[name]) {
    throw new Error(`Language ${name} already exists`);
  }
  supportedLang[name] = { regex, className };
};

/**
 * Returns language configuration for specified language names.
 * @param {string[]} languages - Array of language names (e.g., ["Bengali", "Chinese"]).
 * @returns {Object[]} Array of language configurations.
 */
const getLangConfig = (languages = Object.keys(supportedLang)) => {
  return languages.map((name) => {
    if (!supportedLang[name]) {
      throw new Error(`Unsupported language: ${name}`);
    }
    return {
      name,
      regex: supportedLang[name].regex,
      className: supportedLang[name].className,
    };
  });
};

/**
 * Detects the language of a single character based on the provided config.
 * @param {string} char - The character to analyze.
 * @param {Array} langConfig - Array of language configurations.
 * @returns {Object} - Language configuration object or default.
 */
const detectLang = (char, langConfig) => {
  for (const lang of langConfig) {
    if (lang.regex.test(char)) {
      return lang;
    }
  }
  return { name: "default", className: "default-text" };
};

/**
 * Processes text and wraps language-specific segments in spans with appropriate CSS classes.
 * @param {string} text - The input text to process.
 * @param {Array} [langConfig] - Language configuration.
 * @returns {string} Processed HTML string with styled spans.
 */
const processText = (text, langConfig = getLangConfig()) => {
  if (!text || typeof text !== "string") {
    throw new Error("Valid text input is required");
  }

  const words = text.split(/(\s+)/);
  let newContent = "";

  words.forEach((word) => {
    if (/\s+/.test(word) || word === "\n") {
      newContent += word;
      return;
    }

    let currentSegment = "";
    let currentLang = null;

    for (let char of word) {
      const lang = detectLang(char, langConfig);
      if (currentLang && lang.name !== currentLang.name) {
        newContent += `<span class="${currentLang.className}">${currentSegment}</span>`;
        currentSegment = char;
        currentLang = lang;
      } else {
        currentSegment += char;
        currentLang = lang;
      }
    }

    if (currentSegment) {
      newContent += `<span class="${currentLang.className}">${currentSegment}</span>`;
    }
  });

  return newContent;
};

/**
 * Processes an HTML element, preserving HTML tags and styling text nodes.
 * @param {HTMLElement} element - The DOM element to process.
 * @param {Array} [langConfig] - Language configuration.
 */
const processElement = (element, langConfig = getLangConfig()) => {
  const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      const span = document.createElement("span");
      span.innerHTML = processText(node.textContent, langConfig);
      node.replaceWith(span);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of Array.from(node.childNodes)) {
        processNode(child);
      }
    }
  };

  for (let child of Array.from(element.childNodes)) {
    processNode(child);
  }
};

export { addCustomLang, getLangConfig, processElement, processText };
