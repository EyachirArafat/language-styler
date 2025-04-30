# @eyachir/language-detector

A lightweight JavaScript library for detecting and styling text in multiple languages using Unicode ranges. It supports preserving HTML tags and allows users to add custom languages with ease.

---

## 🔑 Key Features
- Detects languages like Bengali, English, Arabic, Chinese, Korean, and more.
- Styles text with custom CSS classes based on detected languages.
- Preserves HTML tags (`<h1>`, `<p>`, etc.) during processing.
- Supports custom language addition via Unicode ranges.
- Lightweight and easy to integrate in Node.js and browser environments.

## 📦 Installation

Install the package via npm:

```bash
npm install @eyachir/language-detector
```

## ⚙️ Usage

The library provides two main functions:
- `getLanguageConfig`: Configures supported languages.
- `processElement`: Processes HTML elements to detect and style text.

### Example: Processing HTML Elements (Browser)

To use in a browser, bundle the library with Rollup or Vite to create a UMD file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    .bengali-text { color: red; }
    .english-text { color: black; }
    .arabic-text { color: green; }
    .chinese-text { color: yellow; }
    .korean-text { color: blue; }
    .default-text { color: gray; }
    span { display: inline; }
  </style>
  <title>Language Detector Demo</title>
</head>
<body>
  <div id="textContainer">
    <h1>لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ</h1>
    <h2>আজকের দিনটি very special. 안녕하세요.</h2>
    <h2>今天是个好日子</h2>
  </div>

  <script src="dist/language-detector.js"></script>
  <script>
    const { processElement, getLanguageConfig } = LanguageDetector;
    const config = getLanguageConfig(["Bengali", "English", "Arabic", "Chinese", "Korean"]);
    const container = document.getElementById("textContainer");
    processElement(container, config);
  </script>
</body>
</html>
```

**Bundling for Browser**:
Use Rollup to create a browser-compatible file:

```bash
npx rollup node_modules/@eyachir/language-detector/src/index.js --file dist/language-detector.js --format umd --name LanguageDetector
```

### Example: Adding a Custom Language

Add support for a new language using `addCustomLanguage`:

```javascript
import { processElement, getLanguageConfig, addCustomLanguage } from "@eyachir/language-detector";

addCustomLanguage("French", /[\u00C0-\u017F]/, "french-text");
const config = getLanguageConfig(["English", "French"]);
processElement(document.getElementById("textContainer"), config);
```

```css
.french-text { color: pink; }
```

### Example: Node.js Usage

```javascript
import { processText, getLanguageConfig } from "@eyachir/language-detector";

const config = getLanguageConfig(["Bengali", "English"]);
const text = "আজকের দিনটি is special";
const result = processText(text, config);
console.log(result);
// Output: <span class="bengali-text">আজকের দিনটি</span> <span class="english-text">is special</span>
```

## 🌐 Supported Languages

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

Add custom languages using `addCustomLanguage`.

## 🌍 Browser Support

To use in browsers:
1. Install the package: `npm install @eyachir/language-detector`.
2. Bundle with Rollup or Vite (see bundling command above).
3. Include the bundled file in your HTML.

For local testing, use a server to avoid CORS issues:

```bash
npx http-server
```

Open `http://localhost:8080/index.html` in your browser.

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/EyachirArafat/language-detector).

## 📧 Contact

For support or inquiries, contact [Eyachir Arafat](mailto:me.eyachirarafat@gmail.com).  
🌐 Visit my portfolio: [EyachirArafat](https://eyachirarafat.vercel.app)


---
