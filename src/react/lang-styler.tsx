// import React, { Children, FC, useMemo } from "react";
// import { getLangConfig } from "../core/config";
// import { processReactText, TextSegment } from "../core/react";
// import { StylerProps, StyleConfig } from "../types/styler";

// export const LangStyler: FC<StylerProps> = ({
//   children,
//   languages = [],
//   styleConfig = {},
//   enableRTL = true,
//   as: Tag = "div",
// }) => {
//   const text = Children.toArray(children)
//     .map((child) => (typeof child === "string" ? child : ""))
//     .join("");

//   const baseConfig = useMemo(() => getLangConfig(languages), [languages]);
//   const langConfig = useMemo(
//     () =>
//       baseConfig.map((lang) => {
//         const config: StyleConfig = styleConfig[lang.name] || {};
//         return {
//           ...lang,
//           className: config.className || lang.className,
//         };
//       }),
//     [baseConfig, styleConfig]
//   );
//   const segments = useMemo(
//     () => processReactText(text, langConfig),
//     [text, langConfig]
//   );

//   return (
//     <Tag>
//       {segments.map(
//         (seg: TextSegment & { fontFamily?: string }, index: number) => (
//           <span
//             key={index}
//             className={seg.className}
//             style={{ fontFamily: seg.fontFamily }}
//             {...(enableRTL && seg.isRTL ? { dir: "rtl" } : {})}
//           >
//             {seg.text}
//           </span>
//         )
//       )}
//     </Tag>
//   );
// };

{
  /** */
}

import React, { Children, FC, ReactNode, useMemo } from "react";
import { getLangConfig } from "../core/config";
import { processReactText, TextSegment } from "../core/react";
import { StylerProps } from "../types/styler";

// LangStyler Props Interface
interface LangStylerProps extends StylerProps {
  children: ReactNode;
  enableRTL?: boolean; // Optional RTL support toggle
}

// LangStyler Component
export const LangStyler: FC<LangStylerProps> = ({
  children,
  languages = [],
  styleConfig = {},
  enableRTL = true,
  as: Tag = "div",
}) => {
  // Memoized language configuration
  const baseConfig = useMemo(() => getLangConfig(languages), [languages]);
  const langConfig = useMemo(
    () =>
      baseConfig.map((lang) => ({
        ...lang,
        className: (styleConfig[lang.name]?.className ||
          lang.className) as string,
      })),
    [baseConfig, styleConfig]
  );

  // Recursive function to wrap and process text nodes
  const wrapTextNodes = (child: ReactNode): ReactNode => {
    // Case 1: Direct text node
    if (typeof child === "string") {
      const segments = useMemo(
        () => processReactText(child, langConfig),
        [child, langConfig]
      );
      return (
        <>
          {segments.map((seg: TextSegment, index: number) => (
            <span
              key={index}
              className={seg.className}
              {...(enableRTL && seg.isRTL ? { dir: "rtl" } : {})}
            >
              {seg.text}
            </span>
          ))}
        </>
      );
    }

    // Case 2: React Element (JSX elements like <div>, <p>, etc.)
    if (React.isValidElement(child)) {
      try {
        const typedChild = child as React.ReactElement<{
          children?: ReactNode;
        }>;
        const childProps = typedChild.props;
        const newProps = { ...childProps };

        // Only process children if they exist
        if (childProps.children !== undefined && childProps.children !== null) {
          newProps.children = Children.map(childProps.children, wrapTextNodes);
        }

        return React.cloneElement(typedChild, newProps);
      } catch (error) {
        console.error("Error processing React element:", error, child);
        return child; // Fallback to rendering the child as is
      }
    }

    // Case 3: Array of children
    if (Array.isArray(child)) {
      return child.map((c) => wrapTextNodes(c));
    }

    // Default case: Return as is (for null, undefined, numbers, etc.)
    return child;
  };

  // Process all children
  const processedChildren = useMemo(() => {
    try {
      return Children.map(children, wrapTextNodes);
    } catch (error) {
      console.error("Error processing children:", error);
      return children; // Fallback to rendering children as is
    }
  }, [children]);

  // Render with the specified tag
  return <Tag>{processedChildren}</Tag>;
};
