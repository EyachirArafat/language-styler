# language-detector

A lightweight JavaScript library for detecting and styling text in multiple languages using Unicode ranges. It excels at handling mixed-language text within a single HTML tag, styling each language segment with its respective CSS class, and supports language-specific number formats.

## 🔑 Key Features
- Detects and styles mixed-language text (e.g., `<div>আজকের ekhane ١٢٣</div>`).
- Supports language-specific numbers (e.g., Bengali `০-৯`, Arabic `٠-٩`).
- Allows adding custom languages via Unicode ranges.
- Lightweight and compatible with Node.js and browser environments.

## 📦 Installation

Install the package via npm:

```bash
npm install language-detector
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
    আজকের ekhane ١٢٣ very special. 안녕하세요. 今天是个好日子
  </div>

  <script src="dist/language-detector.js"></script>
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
npx rollup node_modules/language-detector/src/index.js --file dist/language-detector.js --format umd --name LanguageDetector
```

### Example: Node.js Usage

Process text in a Node.js environment:

```javascript
import { processText, getLangConfig } from "language-detector";

const config = getLangConfig(["Bengali", "English"]);
const text = "আজকের ekhane is special";
const result = processText(text, config);
console.log(result);
// Output: <span class="bengali-text">আজকের</span> <span class="english-text">ekhane</span> <span class="english-text">is special</span>
```

### Example: Adding a Custom Language

Add a new language with `addCustomLang`:

```javascript
import { processElement, getLangConfig, addCustomLang } from "language-detector";

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

1. Install: `npm install language-detector`.
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

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/EyachirArafat/language-detector).

## 📧 Contact

For support or inquiries, contact [Eyachir Arafat](mailto:me.eyachirarafat@gmail.com).  
🌐 Visit my portfolio: [EyachirArafat](https://eyachirarafat.vercel.app)