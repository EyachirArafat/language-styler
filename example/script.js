import { getLangConfig, processElement } from "../src/index.js";

const customLangConfig = getLangConfig([
  "Bengali",
  "English",
  "Arabic",
  "Chinese",
  "Korean",
]);

const container = document.getElementById("textContainer");
processElement(container, customLangConfig);
