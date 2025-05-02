# language-detector

### A lightweight JavaScript library for detecting and styling text in multiple languages using Unicode ranges. It supports real-time language detection for user input and styles mixed-language text within a single HTML tag.

---

## 🔑 Key Features
- Detects languages like Bengali, English, Arabic, Chinese, Korean, and more.
- Styles mixed-language text within a single HTML tag (e.g., `<div>আজকের today ١٢٣</div>`).
- Supports custom language addition via Unicode ranges.
- Lightweight and easy to integrate in Node.js, browser, and React environments.
- Handles numbers in language-specific formats (e.g., Bengali `০-৯`, Arabic `٠-٩`).

## 📦 Installation

Install the package via npm:

```bash
npm install language-detector
```

## ⚙️ Usage

The library provides three main functions:
- `getLanguageConfig`: Configures supported languages.
- `processElement`: Processes HTML elements to detect and style text.
- `processText`: Processes raw text and returns styled HTML.

### Example: Processing HTML Elements (Browser)

To use in a browser, bundle the library with Rollup or Vite to create a UMD file.

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
Use Rollup to create a browser-compatible file:

```bash
npx rollup node_modules/language-detector/src/index.js --file dist/language-detector.js --format umd --name LanguageDetector
```

### Example: Using in React
Use the library in a React application to process user input in real-time.

```jsx
// src/App.jsx
import { useState, useRef, useEffect } from "react";
import { processElement, getLangConfig } from "language-detector";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const outputRef = useRef(null);

  useEffect(() => {
    const config = getLangConfig(["Bengali", "English", "Arabic", "Chinese", "Korean"]);
    if (outputRef.current) {
      outputRef.current.innerHTML = "";
      outputRef.current.textContent = inputText;
      processElement(outputRef.current, config);
    }
  }, [inputText]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Language Detector</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type mixed language text or numbers..."
        rows="5"
        cols="50"
      />
      <h2>Output:</h2>
      <div ref={outputRef} id="outputContainer" />
    </div>
  );
}

export default App;
```

### Example: Adding a Custom Language

Add support for a new language using `addCustomLang`:

```javascript
import { processElement, getLangConfig, addCustomLang } from "language-detector";

addCustomLang("French", /[\u00C0-\u017F]/, "french-text");
const config = getLangConfig(["English", "French"]);
processElement(document.getElementById("textContainer"), config);
```

```css
.french-text { color: pink; border: 1px solid purple; }
```

### Example: Node.js Usage

```javascript
import { processText, getLangConfig } from "language-detector";

const config = getLangConfig(["Bengali", "English"]);
const text = "আজকের, today is special";
const result = processText(text, config);
console.log(result);
// Output: <span class="bengali-text">আজকের</span> <span class="english-text">today</span> <span class="english-text">is special</span>
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

Add custom languages using `addCustomLang`.

## 🌍 Browser Support

To use in browsers:

1. Install the package: `npm install language-detector`.
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
