import React, { FC, ReactNode } from "react";
import { StyleConfig } from "../types";
import { LangStyler } from "./lang-styler";

interface GlobalStylerProps {
  languages?: string[];
  styleConfig?: { [language: string]: StyleConfig };
  children: ReactNode;
}

export const GlobalStyler: FC<GlobalStylerProps> = ({
  languages = [],
  styleConfig = {},
  children,
}) => {
  const wrapTextNodes = (child: ReactNode): ReactNode => {
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
