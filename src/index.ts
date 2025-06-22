// Core exports
export { DOMProcessor, LanguageDetector, TextProcessor } from './core';
export * from './core/constants';
export * from './core/types';

// React exports
export { LangStyler } from './react';

// Vanilla JS exports
export { processDocument, processElement, processSelector, processText } from './vanilla';

// Default export for React
export { default } from './react/LangStyler';
