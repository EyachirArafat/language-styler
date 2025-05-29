import React, { useMemo } from "react";
import { getLangConfig } from "../core/config";
import { LangStyler } from "./lang-styler";

interface GlobalStylerProps {
  languages?: string[];
  styleConfig?: { [language: string]: string };
  children: React.ReactNode;
}

export const GlobalStyler: React.FC<GlobalStylerProps> = ({
  languages = [],
  styleConfig = {},
  children,
}) => {
  const langConfig = useMemo(() => getLangConfig(languages), [languages]);

  const wrapTextNodes = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === "string") {
      return (
        <LangStyler languages={languages} styleConfig={styleConfig}>
          {child}
        </LangStyler>
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
