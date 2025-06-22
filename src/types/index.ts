// // Re-export all types from core
// export * from '../core/types';

// // Additional utility types
// export type LanguageName = keyof typeof import('../core/constants').SUPPORTED_LANGUAGES;

// export type ProcessorConfig = {
//     languages?: LanguageName[];
//     enableRTL?: boolean;
//     enableFonts?: boolean;
//     customClasses?: Record<string, string>;
//     customFonts?: Record<string, string>;
//     mergeWhitespace?: boolean;
//     preserveSpaces?: boolean;
// };

// export type ReactStylerConfig = ProcessorConfig & {
//     as?: React.ElementType;
//     className?: string;
//     style?: React.CSSProperties;
//     children: React.ReactNode;
// };

// // Event types
// export interface ProcessingEvent {
//     type: 'start' | 'complete' | 'error';
//     text: string;
//     timestamp: number;
//     duration?: number;
//     error?: Error;
// }

// // Performance monitoring types
// export interface PerformanceMetrics {
//     processingTime: number;
//     charactersProcessed: number;
//     segmentsCreated: number;
//     languagesDetected: string[];
//     memoryUsage?: number;
// }

// // Plugin system types
// export interface LanguagePlugin {
//     name: string;
//     regex: RegExp;
//     className: string;
//     isRTL: boolean;
//     fontFamily: string;
//     priority?: number;
// }

// export interface ProcessorPlugin {
//     name: string;
//     beforeProcess?: (text: string) => string;
//     afterProcess?: (segments: import('../core/types').TextSegment[]) => import('../core/types').TextSegment[];
//     onError?: (error: Error) => void;
// }

// // Configuration validation types
// export interface ValidationResult {
//     isValid: boolean;
//     errors: string[];
//     warnings: string[];
// }

// // Theme types
// export interface ThemeConfig {
//     name: string;
//     classes: Record<string, string>;
//     fonts: Record<string, string>;
//     rtlSupport: boolean;
//     customCSS?: string;
// }

// // Advanced configuration
// export interface AdvancedProcessorOptions extends ProcessorConfig {
//     plugins?: ProcessorPlugin[];
//     theme?: ThemeConfig;
//     performance?: {
//         enableMetrics: boolean;
//         maxProcessingTime: number;
//         memoryLimit: number;
//     };
//     debugging?: {
//         enableLogging: boolean;
//         logLevel: 'error' | 'warn' | 'info' | 'debug';
//     };
// }