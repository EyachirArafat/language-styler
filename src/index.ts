// export {
//   addCustomLang, getLangConfig, processElement, processText,
//   processTextForReact, processGlobal
// } from "./core";
// export { GlobalStyleWrapper } from "./global-style";
// export { TextStyle as LanguageStyledText } from "./text-style";

export { addLang, getLangConfig } from './core/config';
export { processAll, processNode, processText } from './core/processor';
export { processReactText } from './core/react';
export { GlobalStyler } from './react/global-styler';
export { LangStyler } from './react/lang-styler';

