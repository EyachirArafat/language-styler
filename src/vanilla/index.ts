import { DOMProcessor } from '../core/dom';
import { TextProcessor } from '../core/processor';
import { ProcessorOptions } from '../core/types';

export function processText(text: string, options: ProcessorOptions = {}) {
    const processor = new TextProcessor(options);
    return processor.processText(text);
}

export function processElement(element: HTMLElement, options: ProcessorOptions = {}) {
    const domProcessor = new DOMProcessor(options);
    domProcessor.processElement(element);
}

export function processDocument(options: ProcessorOptions = {}) {
    const domProcessor = new DOMProcessor(options);
    domProcessor.processDocument();
}

export function processSelector(selector: string, options: ProcessorOptions = {}) {
    const domProcessor = new DOMProcessor(options);
    domProcessor.processSelector(selector);
}

export { DOMProcessor, TextProcessor } from '../core';
export * from '../core/types';

