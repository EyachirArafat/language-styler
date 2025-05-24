import { getLangConfig, processElement } from "../dist/default.umd.js";
const customLangConfig = getLangConfig([
  "Bengali",
  "English",
  "Arabic",
  "Chinese",
  "Korean",
]);

const container = document.getElementById("textContainer");
processElement(container, customLangConfig);
