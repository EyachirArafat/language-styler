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

// NEW: Create processor with custom language support
export function createProcessor(options: ProcessorOptions = {}) {
    return new TextProcessor(options);
}

// NEW: Helper function to add language globally
export function addGlobalLanguage(
    name: string,
    regex: RegExp,
    className: string,
    isRTL: boolean = false,
    fontFamily: string = 'inherit'
) {
    // This would need a global processor instance
    // For now, users should create their own processor instance
    throw new Error('Use createProcessor() and call addLanguage() on the instance');
}

export { DOMProcessor, TextProcessor } from '../core';
export * from '../core/types';
