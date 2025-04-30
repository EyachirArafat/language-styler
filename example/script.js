import { getLanguageConfig, processElement } from "../src/index.js";

// addCustomLanguage("Korean", /[\uAC00-\uD7AF]/, "korean-text");
const customLanguageConfig = getLanguageConfig([
  "Bengali",
  "English",
  "Arabic",
  "Chinese",
  "Korean", // already available in the default config
]);

const container = document.getElementById("textContainer");
processElement(container, customLanguageConfig);
