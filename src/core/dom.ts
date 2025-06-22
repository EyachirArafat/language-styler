import { TextProcessor } from './processor';
import { ProcessorOptions } from './types';

export class DOMProcessor {
    private textProcessor: TextProcessor;

    constructor(options: ProcessorOptions = {}) {
        this.textProcessor = new TextProcessor(options);
    }

    public processElement(element: HTMLElement): void {
        if (!element) {
            throw new Error('Valid HTML element is required');
        }

        this.processNode(element);
    }

    private processNode(node: Node): void {
        if (node.nodeType === Node.TEXT_NODE) {
            this.processTextNode(node as Text);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;

            // Skip script, style, and other non-content elements
            if (this.shouldSkipElement(element)) {
                return;
            }

            // Process child nodes
            const children = Array.from(node.childNodes);
            children.forEach(child => this.processNode(child));
        }
    }

    private processTextNode(textNode: Text): void {
        const text = textNode.textContent;
        if (!text || !text.trim()) {
            return;
        }

        try {
            const result = this.textProcessor.processText(text);

            if (result.segments.length > 1) {
                const container = document.createElement('span');
                container.innerHTML = result.html;

                const parent = textNode.parentNode;
                if (parent) {
                    while (container.firstChild) {
                        parent.insertBefore(container.firstChild, textNode);
                    }
                    parent.removeChild(textNode);
                }
            }
        } catch (error) {
            console.error('Error processing text node:', error);
        }
    }

    private shouldSkipElement(element: Element): boolean {
        const skipTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'OBJECT', 'EMBED'];
        return skipTags.includes(element.tagName.toUpperCase());
    }

    public processDocument(): void {
        const body = document.body || document.documentElement;
        this.processElement(body);
    }

    public processSelector(selector: string): void {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element instanceof HTMLElement) {
                this.processElement(element);
            }
        });
    }
}