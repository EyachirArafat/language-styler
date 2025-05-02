import { getLangConfig, processElement } from "../src/index.js";

// addCustomLanguage("Korean", /[\uAC00-\uD7AF]/, "korean-text");
const customLangConfig = getLangConfig([
  "Bengali",
  "English",
  "Arabic",
  "Chinese",
  "Korean", // already available in the default config
]);

const container = document.getElementById("textContainer");
processElement(container, customLangConfig);
