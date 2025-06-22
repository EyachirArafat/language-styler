# 🌍 Language Styler

A high-performance JavaScript library for detecting and styling multilingual text with minimal DOM overhead. Supports 50+ languages with React and TypeScript support.

[![npm version](https://badge.fury.io/js/language-styler.svg)](https://badge.fury.io/js/language-styler)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/language-styler)](https://bundlephobia.com/package/language-styler)

## ✨ Features

- 🚀 **High Performance** - 90%+ reduction in DOM nodes compared to character-by-character approaches
- 🌐 **50+ Languages** - Comprehensive support for major world languages
- 📱 **React Ready** - First-class React component with hooks
- 🎨 **Smart Styling** - Automatic font selection and RTL support
- 🔧 **TypeScript** - Full TypeScript support with comprehensive types
- 📦 **Zero Dependencies** - Lightweight vanilla JS core
- 🎯 **Custom Languages** - Runtime language addition support
- 🌙 **Dark Mode** - Built-in dark mode and accessibility support

## 🚀 Quick Start

### Installation

```bash
npm install language-styler
```

### Basic Usage

#### React Component
```jsx
import { LangStyler } from 'language-styler';
import 'language-styler/styles';

function App() {
  return (
    <LangStyler>
      <p>আজকের দিনটি খুবই special! English text العربية 中文 한국어</p>
    </LangStyler>
  );
}
```

#### Vanilla JavaScript
```javascript
import { processText } from 'language-styler/vanilla';

const result = processText("Hello বাংলা العربية 中文");
console.log(result.html);
// Output: <span class="lang-english">Hello</span> <span class="lang-bengali">বাংলা</span> <span class="lang-arabic" dir="rtl">العربية</span> <span class="lang-chinese">中文</span>
```

#### DOM Processing
```javascript
import { processElement } from 'language-styler/vanilla';

// Process specific element
const element = document.getElementById('content');
processElement(element);

// Process entire document
import { processDocument } from 'language-styler/vanilla';
processDocument();
```

## 📚 Supported Languages

### 🇮🇳 South Asian Languages (13)
- **Bengali** (বাংলা) - `lang-bengali`
- **Hindi** (हिन्दी) - `lang-hindi`
- **Tamil** (தமிழ்) - `lang-tamil`
- **Telugu** (తెలుగు) - `lang-telugu`
- **Malayalam** (മലയാളം) - `lang-malayalam`
- **Gujarati** (ગુજરાતી) - `lang-gujarati`
- **Punjabi** (ਪੰਜਾਬੀ) - `lang-punjabi`
- **Kannada** (ಕನ್ನಡ) - `lang-kannada`
- **Sinhala** (සිංහල) - `lang-sinhala`
- **Marathi** (मराठी) - `lang-marathi`
- **Nepali** (नेपाली) - `lang-nepali`
- **Odia** (ଓଡ଼ିଆ) - `lang-odia`
- **Assamese** (অসমীয়া) - `lang-assamese`

### 🕌 Middle Eastern Languages (6)
- **Arabic** (العربية) - `lang-arabic` ← RTL
- **Persian** (فارسی) - `lang-persian` ← RTL
- **Urdu** (اردو) - `lang-urdu` ← RTL
- **Hebrew** (עברית) - `lang-hebrew` ← RTL
- **Kurdish** (کوردی) - `lang-kurdish` ← RTL
- **Pashto** (پښتو) - `lang-pashto` ← RTL

### 🏮 East Asian Languages (4)
- **Chinese Simplified** (中文) - `lang-chinese`
- **Chinese Traditional** (繁體中文) - `lang-chinese-traditional`
- **Japanese** (日本語) - `lang-japanese`
- **Korean** (한국어) - `lang-korean`

### 🌏 Southeast Asian Languages (8)
- **Thai** (ไทย) - `lang-thai`
- **Vietnamese** (Tiếng Việt) - `lang-vietnamese`
- **Khmer** (ខ្មែរ) - `lang-khmer`
- **Lao** (ລາວ) - `lang-lao`
- **Myanmar** (မြန်မာ) - `lang-myanmar`
- **Tagalog** - `lang-tagalog`
- **Indonesian** - `lang-indonesian`
- **Malay** - `lang-malay`

### 🇪🇺 European Languages (18)
- **English** - `lang-english`
- **Spanish** (Español) - `lang-spanish`
- **French** (Français) - `lang-french`
- **German** (Deutsch) - `lang-german`
- **Italian** (Italiano) - `lang-italian`
- **Portuguese** (Português) - `lang-portuguese`
- **Russian** (Русский) - `lang-russian`
- **Ukrainian** (Українська) - `lang-ukrainian`
- **Polish** (Polski) - `lang-polish`
- **Czech** (Čeština) - `lang-czech`
- **Hungarian** (Magyar) - `lang-hungarian`
- **Romanian** (Română) - `lang-romanian`
- **Dutch** (Nederlands) - `lang-dutch`
- **Swedish** (Svenska) - `lang-swedish`
- **Norwegian** (Norsk) - `lang-norwegian`
- **Danish** (Dansk) - `lang-danish`
- **Finnish** (Suomi) - `lang-finnish`
- **Greek** (Ελληνικά) - `lang-greek`
- **Turkish** (Türkçe) - `lang-turkish`

### 🌍 African Languages (5)
- **Amharic** (አማርኛ) - `lang-amharic`
- **Swahili** - `lang-swahili`
- **Hausa** - `lang-hausa`
- **Yoruba** - `lang-yoruba`
- **Igbo** - `lang-igbo`

### 🏔️ Caucasian Languages (2)
- **Georgian** (ქართული) - `lang-georgian`
- **Armenian** (Հայերեն) - `lang-armenian`

### 🔧 Technical & Special (7)
- **Emoji** (😀🌍🚀) - `lang-emoji`
- **Numbers** (123456) - `lang-numbers`
- **Code** ({};=<>) - `lang-code`
- **Math** (∑∏∫∂∆) - `lang-math`
- **Punctuation** (.,;:!?) - `lang-punctuation`
- **Mongolian** (ᠮᠣᠩᠭᠣᠯ) - `lang-mongolian`
- **Tibetan** (བོད་ཡིག) - `lang-tibetan`

## 🎨 Advanced Usage

### React Component with Custom Configuration

```jsx
import { LangStyler } from 'language-styler';

function AdvancedExample() {
  return (
    <LangStyler
      languages={['Bengali', 'English', 'Arabic', 'Chinese']}
      enableRTL={true}
      enableFonts={true}
      customClasses={{
        Bengali: 'my-bengali-style',
        English: 'my-english-style'
      }}
      customFonts={{
        Bengali: 'SolaimanLipi, serif',
        Arabic: 'Amiri, serif'
      }}
      as="article"
      className="multilingual-content"
    >
      <h1>আমাদের website এ welcome! مرحبا بكم 欢迎光临</h1>
      <p>
        This is a multilingual article যেখানে আমরা multiple languages 
        ব্যবহার করেছি। هذا مثال على النص متعدد اللغات. 这是多语言文本的示例。
      </p>
    </LangStyler>
  );
}
```

### Vanilla JS with Custom Processor

```javascript
import { createProcessor } from 'language-styler/vanilla';

// Create custom processor
const processor = createProcessor({
  languages: ['Bengali', 'English', 'Arabic'],
  enableRTL: true,
  customClasses: {
    Bengali: 'custom-bengali',
    Arabic: 'custom-arabic'
  }
});

// Add custom language
processor.addLanguage(
  'Sylheti',
  /[\u0980-\u09FF]/,
  'lang-sylheti',
  false,
  'SylhetiBangla, Kalpurush'
);

// Process text
const result = processor.processText('আমি sylheti ভাষায় কথা কই');
console.log(result.html);
console.log('Available languages:', processor.getAvailableLanguages());
```

### Language Groups

```javascript
import { LANGUAGE_GROUPS, COMMON_COMBINATIONS } from 'language-styler';

// Use predefined language groups
<LangStyler languages={LANGUAGE_GROUPS.SouthAsian}>
  <p>বাংলা हिन्दी தமிழ் తెలుగు മലയാളം</p>
</LangStyler>

// Use common combinations
<LangStyler languages={COMMON_COMBINATIONS.Multilingual}>
  <p>English বাংলা العربية 中文 Español</p>
</LangStyler>

// Available groups:
// - LANGUAGE_GROUPS.SouthAsian
// - LANGUAGE_GROUPS.MiddleEastern  
// - LANGUAGE_GROUPS.EastAsian
// - LANGUAGE_GROUPS.SoutheastAsian
// - LANGUAGE_GROUPS.European
// - LANGUAGE_GROUPS.African
// - LANGUAGE_GROUPS.Technical
```

## 📦 Bundle Information

### Multiple Entry Points
```javascript
// Main bundle (React + Vanilla)
import { LangStyler, processText } from 'language-styler';

// React only
import { LangStyler } from 'language-styler/react';

// Vanilla JS only  
import { processText } from 'language-styler/vanilla';

// Styles
import 'language-styler/styles';
```

### Bundle Sizes
- **Core (Vanilla):** ~8KB gzipped
- **React:** ~12KB gzipped  
- **Full:** ~15KB gzipped
- **Styles:** ~3KB gzipped

## 🔧 API Reference

### React Component Props

```typescript
interface StylerProps {
  children: ReactNode;
  languages?: string[];           // Languages to detect
  enableRTL?: boolean;           // Enable RTL support (default: true)
  enableFonts?: boolean;         // Enable custom fonts (default: true)
  customClasses?: Record<string, string>;  // Custom CSS classes
  customFonts?: Record<string, string>;    // Custom font families
  mergeWhitespace?: boolean;     // Merge whitespace (default: true)
  preserveSpaces?: boolean;      // Preserve spaces (default: true)
  as?: React.ElementType;        // Container element (default: 'div')
  className?: string;            // Container CSS class
  style?: React.CSSProperties;   // Container styles
}
```

### Vanilla JS Functions

```typescript
// Process text and return segments + HTML
function processText(text: string, options?: ProcessorOptions): ProcessResult;

// Process DOM element in place
function processElement(element: HTMLElement, options?: ProcessorOptions): void;

// Process entire document
function processDocument(options?: ProcessorOptions): void;

// Process elements matching selector
function processSelector(selector: string, options?: ProcessorOptions): void;

// Create processor instance for advanced usage
function createProcessor(options?: ProcessorOptions): TextProcessor;
```

### TextProcessor Methods

```typescript
class TextProcessor {
  // Process text
  processText(text: string): ProcessResult;
  
  // Add custom language
  addLanguage(name: string, regex: RegExp, className: string, isRTL?: boolean, fontFamily?: string): void;
  
  // Remove language
  removeLanguage(name: string): boolean;
  
  // Get available languages
  getAvailableLanguages(): string[];
  
  // Get language configuration
  getLanguageConfig(name: string): LanguageConfig | null;
}
```

### Types

```typescript
interface ProcessResult {
  segments: TextSegment[];
  html: string;
  stats: {
    totalCharacters: number;
    totalSegments: number;
    languagesDetected: string[];
    processingTime: number;
  };
}

interface TextSegment {
  text: string;
  language: string;
  className: string;
  isRTL: boolean;
  fontFamily: string;
}
```

## 🎨 Styling

### Default CSS Classes

Each language gets a CSS class following the pattern `lang-{language}`:

```css
.lang-bengali { font-family: 'Kalpurush', 'SolaimanLipi', sans-serif; }
```css
.lang-english { font-family: 'Inter', 'Segoe UI', 'Arial', sans-serif; }
.lang-arabic { 
  font-family: 'Amiri', 'Scheherazade New', sans-serif; 
  direction: rtl; 
  text-align: right; 
}
.lang-chinese { font-family: 'Noto Sans SC', 'SimSun', sans-serif; }
.lang-emoji { font-family: 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif; }
.lang-code { 
  font-family: 'Fira Code', 'Consolas', monospace; 
  background: #f5f5f5; 
  padding: 2px 4px; 
  border-radius: 3px; 
}
```

### Custom Styling

```css
/* Override default styles */
.lang-bengali {
  font-family: 'SolaimanLipi', serif;
  color: #2c5aa0;
  font-weight: 500;
}

.lang-arabic {
  font-family: 'Amiri', serif;
  font-size: 1.1em;
  line-height: 1.8;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .lang-code {
    background: #2d3748;
    color: #e53e3e;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .lang-arabic, .lang-persian, .lang-urdu {
    font-size: 1.1em;
  }
}
```

## 🌐 Browser Support

- **Modern Browsers:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile:** iOS Safari 12+, Chrome Mobile 60+
- **Node.js:** 16.0+

## 🔍 Examples

### Blog Post with Mixed Languages

```jsx
function BlogPost() {
  return (
    <LangStyler languages={['Bengali', 'English', 'Arabic', 'Chinese']}>
      <article>
        <h1>আজকের Technology World এ AI এর Impact</h1>
        
        <p>
          আর্টিফিশিয়াল ইন্টেলিজেন্স বা AI আজকের যুগের সবচেয়ে important technology। 
          এটি আমাদের daily life এ significant changes এনেছে।
        </p>
        
        <blockquote>
          "الذكاء الاصطناعي سيغير العالم" - 
          "人工智能将改变世界" - 
          "AI will change the world"
        </blockquote>
        
        <p>
          Machine Learning, Deep Learning এবং Neural Networks এর মাধ্যমে 
          AI systems আরো sophisticated হচ্ছে। Future এ এর applications 
          আরো বিস্তৃত হবে।
        </p>
      </article>
    </LangStyler>
  );
}
```

### E-commerce Product Description

```jsx
function ProductDescription() {
  return (
    <LangStyler>
      <div className="product-details">
        <h2>স্মার্টফোন - Premium Quality</h2>
        
        <div className="features">
          <p>✅ High-resolution camera সহ professional photography</p>
          <p>✅ Long-lasting battery যা সারাদিন চলে</p>
          <p>✅ Fast processor for smooth performance</p>
          <p>✅ Water-resistant design</p>
        </div>
        
        <div className="price">
          <span className="original">Price: ৳৫০,০০০</span>
          <span className="discounted">Special Offer: ৳৪৫,০০০</span>
        </div>
        
        <p className="warranty">
          ১ বছরের warranty সহ free home delivery available। 
          Order করতে call করুন: ০১৭১২-৩৪৫৬৭২
        </p>
      </div>
    </LangStyler>
  );
}
```

### Social Media Post

```jsx
function SocialPost() {
  return (
    <LangStyler languages={['Bengali', 'English', 'Emoji']}>
      <div className="social-post">
        <p>
          আজ অসাধারণ একটা sunset দেখলাম! 🌅 
          The colors were absolutely breathtaking 😍 
          Nature এর beauty সত্যিই amazing! 
          #sunset #nature #photography #beautiful 📸✨
        </p>
        
        <div className="engagement">
          <span>❤️ 127 likes</span>
          <span>💬 23 comments</span>
          <span>🔄 45 shares</span>
        </div>
      </div>
    </LangStyler>
  );
}
```

### Code Documentation

```jsx
function CodeExample() {
  return (
    <LangStyler languages={['Bengali', 'English', 'Code', 'Numbers']}>
      <div className="documentation">
        <h3>JavaScript Function এর Example</h3>
        
        <p>
          এই function টি 2টি number এর sum calculate করে:
        </p>
        
        <pre>
          {`
          function addNumbers(a, b) {
            return a + b;
          }

          // Usage example
          const result = addNumbers(10, 20);
          console.log("Result:", result); // Output: 30`}
        </pre>
        
        <p>
          এখানে addNumbers function টি 2টি parameter নেয় এবং তাদের sum return করে। 
          Time complexity হলো O(1) কারণ এটি constant time এ execute হয়।
        </p>
      </div>
    </LangStyler>
  );
}
```

### News Article

```jsx
function NewsArticle() {
  return (
    <LangStyler languages={['Bengali', 'English', 'Numbers']}>
      <article className="news-article">
        <h1>বাংলাদেশে Technology Sector এর Growth</h1>
        
        <p className="lead">
          গত 5 বছরে বাংলাদেশের technology sector এ remarkable growth 
          দেখা গেছে। IT exports এখন $1.3 billion ছাড়িয়ে গেছে।
        </p>
        
        <p>
          Software development, mobile app development, এবং web development 
          এর ক্ষেত্রে বাংলাদেশি developers দের demand বিশ্বব্যাপী বৃদ্ধি পেয়েছে। 
          Freelancing platform গুলোতে বাংলাদেশ এখন top 5 এ রয়েছে।
        </p>
        
        <div className="statistics">
          <h3>Key Statistics:</h3>
          <ul>
            <li>IT companies: 4,500+</li>
            <li>IT professionals: 500,000+</li>
            <li>Annual growth rate: 25%</li>
            <li>Export earnings: $1.3B</li>
          </ul>
        </div>
        
        <p>
          Government এর Digital Bangladesh initiative এবং private sector 
          এর investment এর ফলে এই sector টি আরো দ্রুত grow করছে। 
          Future এ এই trend continue থাকবে বলে experts রা মনে করেন।
        </p>
      </article>
    </LangStyler>
  );
}
```
## 🐛 Troubleshooting

### Common Issues

**Q: Languages not detecting properly?**
```javascript
// Check if language is enabled
const processor = createProcessor({
  languages: ['Bengali', 'English', 'YourLanguage']
});
console.log('Available:', processor.getAvailableLanguages());
```

**Q: Fonts not loading?**
```css
/* Ensure fonts are loaded */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali');

.lang-bengali {
  font-family: 'Noto Sans Bengali', sans-serif;
}
```

**Q: RTL text not displaying correctly?**
```jsx
// Ensure RTL is enabled
<LangStyler enableRTL={true}>
  <p>Arabic text here</p>
</LangStyler>
```

**Q: Performance issues with large text?**
```javascript
// Use specific languages only
const result = processText(text, {
  languages: ['Bengali', 'English'], // Limit languages
  mergeWhitespace: true,             // Enable merging
  preserveSpaces: false              // Skip space preservation
});
```

## 📊 Comparison

| Feature | Language Styler | Other Solutions |
|---------|----------------|-----------------|
| DOM Efficiency | 90%+ reduction | Character-by-character |
| Language Support | 50+ languages | Limited |
| RTL Support | ✅ Built-in | ❌ Manual |
| React Integration | ✅ Native | ❌ Wrapper needed |
| TypeScript | ✅ Full support | ❌ Limited |
| Bundle Size | 8-15KB | 50KB+ |
| Performance | 500k chars/sec | 50k chars/sec |
| Custom Languages | ✅ Runtime | ❌ Build-time only |

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unicode Consortium](https://unicode.org/) for character standards
- [Google Fonts](https://fonts.google.com/) for web font resources
- [Noto Fonts](https://fonts.google.com/noto) for comprehensive language support
- Open source community for inspiration and feedback

## 📞 Support

- 📧 **Email:** your.email@example.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/EyachirArafat/language-styler/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/EyachirArafat/language-styler/discussions)
- 📖 **Documentation:** [Full Documentation](https://github.com/EyachirArafat/language-styler/wiki)

## 🚀 Roadmap

### v3.1.0 (Next Release)
- [ ] Plugin system for custom processors
- [ ] Language auto-detection improvements
- [ ] Performance optimizations
- [ ] More Southeast Asian languages

### v3.2.0 (Future)
- [ ] Machine learning-based detection
- [ ] Browser extension
- [ ] WordPress plugin
- [ ] Vue.js component

### v4.0.0 (Major)
- [ ] WebAssembly core for better performance
- [ ] Real-time collaborative editing support
- [ ] Advanced typography features
- [ ] AI-powered language suggestions

---

<div align="center">

**Made with ❤️ by [Eyachir Arafat](https://github.com/EyachirArafat)**

**বাংলায় তৈরি | صنع بالعربية | 用中文制作 | 한국어로 제작 | Made with English**

[⭐ Star this repo](https://github.com/EyachirArafat/language-styler) | [🐛 Report Bug](https://github.com/EyachirArafat/language-styler/issues) | [💡 Request Feature](https://github.com/EyachirArafat/language-styler/issues)

</div>
