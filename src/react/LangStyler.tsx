import React, { Children, memo, ReactNode, useMemo } from "react";
import { TextProcessor } from "../core/processor";
import { ProcessorOptions } from "../core/types";

interface StylerProps extends ProcessorOptions {
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

const LangStyler = memo<StylerProps>(
  ({
    children,
    languages,
    enableRTL = true,
    enableFonts = true,
    customClasses = {},
    customFonts = {},
    mergeWhitespace = true,
    preserveSpaces = true,
    as: Component = "div",
    className,
    style,
    ...props
  }) => {
    const processor = useMemo(
      () =>
        new TextProcessor({
          languages,
          enableRTL,
          enableFonts,
          customClasses,
          customFonts,
          mergeWhitespace,
          preserveSpaces,
        }),
      [
        languages,
        enableRTL,
        enableFonts,
        customClasses,
        customFonts,
        mergeWhitespace,
        preserveSpaces,
      ]
    );

    const processedChildren = useMemo(() => {
      return processReactChildren(children, processor);
    }, [children, processor]);

    return (
      <Component className={className} style={style} {...props}>
        {processedChildren}
      </Component>
    );
  }
);

function processReactChildren(
  children: ReactNode,
  processor: TextProcessor
): ReactNode {
  return Children.map(children, (child) => {
    // Handle string children
    if (typeof child === "string") {
      return processStringChild(child, processor);
    }

    // Handle number children
    if (typeof child === "number") {
      return processStringChild(String(child), processor);
    }

    // Handle React elements
    if (React.isValidElement(child)) {
      return processReactElement(child, processor);
    }

    // Handle arrays
    if (Array.isArray(child)) {
      return child.map((item, index) => (
        <React.Fragment key={index}>
          {processReactChildren(item, processor)}
        </React.Fragment>
      ));
    }

    // Return other types as-is
    return child;
  });
}

function processStringChild(text: string, processor: TextProcessor): ReactNode {
  try {
    const { segments } = processor.processText(text);

    if (segments.length <= 1) {
      return text;
    }

    return (
      <>
        {segments.map((segment, index) => {
          if (segment.language === "whitespace") {
            return segment.text;
          }

          const style: React.CSSProperties = {};
          if (segment.fontFamily !== "inherit") {
            style.fontFamily = segment.fontFamily;
          }

          return (
            <span
              key={index}
              className={segment.className}
              style={Object.keys(style).length > 0 ? style : undefined}
              dir={segment.isRTL ? "rtl" : undefined}
            >
              {segment.text}
            </span>
          );
        })}
      </>
    );
  } catch (error) {
    console.error("Error processing string child:", error);
    return text;
  }
}

function processReactElement(
  element: React.ReactElement,
  processor: TextProcessor
): React.ReactElement {
  try {
    const { props } = element;

    if (!props.children) {
      return element;
    }

    const processedChildren = processReactChildren(props.children, processor);

    return React.cloneElement(element, {
      ...props,
      children: processedChildren,
    });
  } catch (error) {
    console.error("Error processing React element:", error);
    return element;
  }
}

LangStyler.displayName = "LangStyler";

export { LangStyler };
export default LangStyler;
