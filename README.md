# @ek/language-detector

A lightweight JavaScript library to detect and style text in multiple languages using Unicode ranges. It supports preserving HTML tags and allows users to add custom languages easily.

## Installation

Install the package via npm:

```bash
npm install @ek/language-detector
```

## Usage

The library provides functions to detect languages and style text. It can process plain text or HTML elements while preserving tags like `<h1>`, `<h2>`, and `<p>` etc.

### Example: Processing HTML Elements

```html
<div id="textContainer">
  <h1> لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ</h1>
  <br />
  <h2>আজকের দিনটি very special. 안녕하세요.</h2>
  <h2>今天是个好日子</h2>
</div>
<script type="module">
  import { processElement, getLanguageConfig } from "@ek/language-detector";

  const customLanguageConfig = getLanguageConfig(["Bengali", "English", "Arabic", "Chinese", "Korean"]);
  const container = document.getElementById("textContainer");
  processElement(container, customLanguageConfig);
</script>
<style>
  .bengali-text { color: red; }
  .english-text { color: black; }
  .arabic-text { color: green; }
  .chinese-text { color: yellow; }
  .korean-text { color: blue; }
  .default-text { color: gray; }
  span { display: inline; }
</style>
```

### Example: Adding a Custom Language

You can add a custom language using `addCustomLanguage` (if that language is not available in Supported Languages):

```html
<div id="textContainer">Bonjour (French)</div>
<script type="module">
  import { processElement, getLanguageConfig, addCustomLanguage } from "@ek/language-detector";

  addCustomLanguage("French", /[\u00C0-\u017F]/, "french-text");
  const customLanguageConfig = getLanguageConfig(["English", "French"]);
  const container = document.getElementById("textContainer");
  processElement(container, customLanguageConfig);
</script>
<style>
  .english-text { color: black; }
  .french-text { color: pink; }
  .default-text { color: gray; }
  span { display: inline; }
</style>
```

## Supported Languages

The library supports the following languages out of the box:

- Bengali
- English
- Arabic
- Chinese
- Hindi
- Japanese
- Korean
- Russian
- Tamil
- Telugu
- Malayalam
- Thai
- Greek
- Hebrew
- Georgian
- Armenian
- Gujarati
- Punjabi
- Kannada
- Sinhala
- LatinExtended (e.g., French, Spanish, German)
- DevanagariExtended (e.g., Marathi, Sanskrit)

Use `addCustomLanguage` to support additional languages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
