import { getLangConfig, LanguageConfig } from './config';

function detectLang(char: string, config: LanguageConfig[]): LanguageConfig {
    for (const lang of config) if (lang.regex.test(char)) return lang;
    return { name: "default", className: "default", isRTL: false, regex: /./ };
}

export function processText(text: string, langConfig = getLangConfig()): string {
    if (!text || typeof text !== "string") throw new Error("Valid text input is required");

    const words = text.split(/(\s+)/);
    let newContent = "";

    words.forEach(word => {
        if (/\s+/.test(word) || word === "\n") {
            newContent += word;
            return;
        }

        let currentSegment = "";
        let currentLang: LanguageConfig | null = null;

        for (let char of word) {
            const lang = detectLang(char, langConfig);
            if (currentLang && lang.name !== currentLang.name) {
                newContent += `<span class="${currentLang.className}"${currentLang.isRTL ? ' dir="rtl"' : ''}>${currentSegment}</span>`;
                currentSegment = char;
                currentLang = lang;
            } else {
                currentSegment += char;
                currentLang = lang;
            }
        }

        if (currentSegment) {
            newContent += `<span class="${currentLang?.className}"${currentLang?.isRTL ? ' dir="rtl"' : ''}>${currentSegment}</span>`;
        }
    });

    return newContent;
}

export function processNode(element: HTMLElement, langConfig = getLangConfig()): void {
    const process = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            const span = document.createElement("span");
            span.innerHTML = processText(node.textContent, langConfig);
            (node as ChildNode).replaceWith(span);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (let child of Array.from(node.childNodes)) process(child);
        }
    };

    for (let child of Array.from(element.childNodes)) process(child);
}

export function processAll(langConfig = getLangConfig()): void {
    const process = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            const span = document.createElement("span");
            span.innerHTML = processText(node.textContent, langConfig);
            (node as ChildNode).replaceWith(span);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (["SCRIPT", "STYLE"].includes(element.tagName)) return;
            for (let child of Array.from(node.childNodes)) process(child);
        }
    };

    process(document.body || document.documentElement);
}
