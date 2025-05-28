import React, { useMemo } from "react";
import { getLangConfig } from "./core";
import { TextStyle } from "./text-style";

interface GlobalStyleWrapperProps {
  languages?: string[];
  styleConfig?: { [language: string]: string };
  children: React.ReactNode;
}

/**
 * A Higher-Order Component that wraps children with TextStyle for global language styling.
 */
export const GlobalStyleWrapper: React.FC<GlobalStyleWrapperProps> = ({
  languages = [],
  styleConfig = {},
  children,
}) => {
  const langConfig = useMemo(() => getLangConfig(languages), [languages]);

  const wrapTextNodes = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === "string") {
      return (
        <TextStyle languages={languages} styleConfig={styleConfig}>
          {child}
        </TextStyle>
      );
    }

    if (React.isValidElement(child)) {
      const children = React.Children.map(
        (child as React.ReactElement<any>).props.children,
        wrapTextNodes
      );
      return React.cloneElement(child, {}, children);
    }

    if (Array.isArray(child)) {
      return child.map((c) => wrapTextNodes(c));
    }

    return child;
  };

  return <>{React.Children.map(children, wrapTextNodes)}</>;
};
