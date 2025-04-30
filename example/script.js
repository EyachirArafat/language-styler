import { processText, defaultLanguageConfig } from "../src/index.js";

const customLanguageConfig = [
  ...defaultLanguageConfig,
  {
    name: "Chinese",
    regex: /[\u4E00-\u9FFF]/,
    className: "chinese-text",
  },
];

const container = document.getElementById("textContainer");
container.innerHTML = processText(container.innerText, customLanguageConfig);
