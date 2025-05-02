# language-styler

A lightweight JavaScript library for detecting and styling text in multiple languages using Unicode ranges. It excels at handling mixed-language text within a single HTML tag, styling each language segment with its respective CSS class, and supports language-specific number formats.

## 🔑 Key Features
- Detects and styles mixed-language text (e.g., `<div>আজকের English 11, العربية, 中文, 한국어 ভাষা একসাথে use করব। )
- Supports language-specific numbers (e.g., Bengali `০-৯`, Arabic `٠-٩`).
- Allows adding custom languages via Unicode ranges.
- Lightweight and compatible with Node.js and browser environments.

## 📦 Installation

Install the package via npm:

```bash
npm install language-styler
```

## ⚙️ Usage

The library provides four main functions:
- `getLangConfig`: Configures supported languages.
- `processElement`: Processes HTML elements to detect and style text.
- `processText`: Processes raw text and returns styled HTML.
- `addCustomLang`: Adds support for custom languages.

### Example: Processing HTML Elements (Browser)

Bundle the library with Rollup or Vite for browser use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    .bengali-text { color: red; border: 1px solid purple; }
    .english-text { color: green; border: 1px solid purple; }
    .arabic-text { color: blue; border: 1px solid purple; }
    .chinese-text { color: purple; border: 1px solid purple; }
    .korean-text { color: orange; border: 1px solid purple; }
    .default-text { color: gray; border: 1px solid purple; }
    span { display: inline; }
  </style>
  <title>Language Detector Demo</title>
</head>
<body>
  <div id="textContainer">
    আজকের দিনটি খুবই special! আমি আমার প্রথম blog লিখছি — এতে আমি বাংলা,
      English 11, العربية, 中文, 한국어 ভাষা একসাথে use করব। هذه تجربة جديدة
      وممتعة! 今天我开始写博客了。정말 설레고 기쁩니다. বাংলা আমাদের culture-এর
      অংশ, আর English হলো global ভাষা। 다른 ভাষা যেমন العربية, 中文 এবং 한국어
      ভাষাও unique এবং সুন্দর। এই blog হবে ভাষার diversity celebration-এর
      জায়গা।
  </div>

  <script src="dist/language-styler.js"></script>
  <script>
    const { processElement, getLangConfig } = LanguageDetector;
    const config = getLangConfig(["Bengali", "English", "Arabic", "Chinese", "Korean"]);
    const container = document.getElementById("textContainer");
    processElement(container, config);
  </script>
</body>
</html>
```

**Bundling for Browser**:
```bash
npx rollup node_modules/language-styler/src/index.js --file dist/language-styler.js --format umd --name LanguageDetector
```

### Example: Node.js Usage

Process text in a Node.js environment:

```javascript
import { processText, getLangConfig } from "language-styler";

const config = getLangConfig(["Bengali", "English"]);
const text = "আজকের ekhane is special";
const result = processText(text, config);
console.log(result);
// Output: <span class="bengali-text">আজকের</span> <span class="english-text">ekhane</span> <span class="english-text">is special</span>
```

### Example: Adding a Custom Language

Add a new language with `addCustomLang`:

```javascript
import { processElement, getLangConfig, addCustomLang } from "language-styler";

addCustomLang("French", /[\u00C0-\u017F]/, "french-text");
const config = getLangConfig(["English", "French"]);
processElement(document.getElementById("textContainer"), config);
```

```css
.french-text {
  color: pink;
  border: 1px solid purple;
}
```

## 🌐 Supported Languages

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

Add custom languages using `addCustomLang`.

## 🌍 Browser Support

1. Install: `npm install language-styler`.
2. Bundle with Rollup or Vite (see bundling command above).
3. Include the bundled file in your HTML.

For local testing, use a server:
```bash
npx http-server
```
Open `http://localhost:8080`.

## 📜 License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/EyachirArafat/language-styler).

## 📧 Contact

For support or inquiries, contact [Eyachir Arafat](mailto:me.eyachirarafat@gmail.com).  
🌐 Visit my portfolio: [EyachirArafat](https://eyachirarafat.vercel.app)