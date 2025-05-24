# language-styler

A lightweight JavaScript library for detecting and styling text in multiple languages using Unicode ranges. It excels at handling mixed-language text within a single HTML tag, styling each language segment with its respective CSS class, and supports language-specific number formats.

## 🔑 Key Features
"Language-Styler detects and applies CSS styles to mixed-language content within a single HTML element - no manual tagging required."
- Detects and styles mixed-language text (e.g., `<div>আজকের English 11, العربية, 中文, 한국어 ভাষা একসাথে use করব।`)
- Supports language-specific numbers (e.g., Bengali `০-৯`, Arabic `٠-٩`).
- Allows adding custom languages via Unicode ranges.
- Lightweight and compatible with Node.js, browser environments, React, Next.js, and TypeScript.
- Full support for React, Next.js, and TypeScript with type definitions.
- Seamless integration with modern frameworks for styling multilingual text.

## 📦 Installation

Install the package via npm:

```bash
npm install language-styler
```

## ⚙️ Usage

The library provides four main functions and a React component:
- `getLangConfig`: Configures supported languages.
- `processElement`: Processes HTML elements to detect and style text.
- `processText`: Processes raw text and returns styled HTML.
- `addCustomLang`: Adds support for custom languages.
- `TextStyle`: A React component for styling text in React applications.

### Example: Processing HTML Elements (Browser)

The library is bundled as a UMD module (`dist/default.umd.js`) for browser use. Include it directly in your HTML:

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

  <script src="dist/default.umd.js"></script>
  <script>
    const { processElement, getLangConfig } = languageStylerHtml;
    const config = getLangConfig(["Bengali", "English", "Arabic", "Chinese", "Korean"]);
    const container = document.getElementById("textContainer");
    processElement(container, config);
  </script>
</body>
</html>
```

**Note**: The UMD bundle is automatically generated during the build process (`npm run build`). No additional Rollup command is needed.

### Example: Using with React

`language-styler` provides a `TextStyle` component for React applications. Here's how to use it:

```tsx
import React from "react";
import { TextStyle } from "language-styler/text-style";

const App: React.FC = () => {
  return (
    <div>
      <h1>Multilingual Text Styling</h1>
      <TextStyle
        languages={["Bengali", "English", "Arabic"]}
        styleConfig={{
          Bengali: "bengali-style",
          English: "english-style",
          Arabic: "arabic-style",
        }}
        as="p"
      >
        আমি বাংলায় লিখছি, writing in English, and كتابة بالعربية.
      </TextStyle>
    </div>
  );
};

export default App;
```

**CSS for Styling**:
```css
.bengali-style {
  color: red;
  font-weight: bold;
}
.english-style {
  color: green;
  font-style: italic;
}
.arabic-style {
  color: blue;
  text-decoration: underline;
}
```

### Example: Using with Next.js

In a Next.js project, you can use the `TextStyle` component similarly:

1. Install `language-styler`:
   ```bash
   npm install language-styler
   ```

2. Create a page (e.g., `pages/index.tsx`):
   ```tsx
   import { TextStyle } from "language-styler/text-style";
   import styles from "../styles/Home.module.css";

   export default function Home() {
     return (
       <div className={styles.container}>
         <h1>Language Styling with Next.js</h1>
         <TextStyle
           languages={["Bengali", "English", "Chinese"]}
           styleConfig={{
             Bengali: styles.bengali,
             English: styles.english,
             Chinese: styles.chinese,
           }}
           as="p"
         >
           আমি বাংলায় লিখছি, writing in English, and 今天我写中文.
         </TextStyle>
       </div>
     );
   }
   ```

3. Add styles (e.g., `styles/Home.module.css`):
   ```css
   .container {
     padding: 20px;
     text-align: center;
   }
   .bengali {
     color: red;
     font-weight: bold;
   }
   .english {
     color: green;
     font-style: italic;
   }
   .chinese {
     color: purple;
     text-decoration: underline;
   }
   ```

4. Run your Next.js app:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to see the result.

### Example: Using with TypeScript

`language-styler` includes TypeScript type definitions. Here's how to use it in a TypeScript project:

```tsx
import React from "react";
import { TextStyle } from "language-styler/text-style";

const App: React.FC = () => {
  return (
    <div>
      <TextStyle
        languages={["Bengali", "English"]}
        styleConfig={{
          Bengali: "bengali-style",
          English: "english-style",
        }}
        as="p"
      >
        আমি বাংলায় লিখছি, writing in English.
      </TextStyle>
    </div>
  );
};

export default App;
```

The library provides type definitions for all functions and components, ensuring type safety when using TypeScript.

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

- `JavaScript`:

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

- `React`: 

```tsx
import React, { useEffect } from "react";
import { TextStyle, addCustomLang } from "language-styler/text-style";

const setupCustomLanguages = () => {
  addCustomLang("French", /[\u00C0-\u017F]/, "french-text");
};

const App: React.FC = () => {
  useEffect(() => {
    setupCustomLanguages();
  }, []);

  return (
    <div>
      <h1>Multilingual text styling & also custom language</h1>
      <TextStyle
        languages={["Bengali", "English", "French"]}
        styleConfig={{
          Bengali: "bengali-style",
          English: "english-style",
          French: "french-style",
        }}
        as="p"
      >
        আমি বাংলায় লিখছি, writing in English, and Bonjour à tous.
      </TextStyle>
    </div>
  );
};

export default App;
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
2. Build the project: `npm run build` to generate `dist/default.umd.js`.
3. Include the UMD bundle in your HTML as shown in the browser example.

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