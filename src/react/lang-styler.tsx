import React, { Children, FC, useMemo } from "react";
import { getLangConfig } from "../core/config";
import { processReactText, TextSegment } from "../core/react";

interface Props {
  children: React.ReactNode;
  languages?: string[];
  styleConfig?: { [language: string]: string };
  enableRTL?: boolean;
  as?: React.ElementType;
}

export const LangStyler: FC<Props> = ({
  children,
  languages = [],
  styleConfig = {},
  enableRTL = true,
  as: Tag = "div",
}) => {
  const text = Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join("");

  const baseConfig = useMemo(() => getLangConfig(languages), [languages]);
  const langConfig = useMemo(
    () =>
      baseConfig.map((lang) => ({
        ...lang,
        className: styleConfig[lang.name] || lang.className,
      })),
    [baseConfig, styleConfig]
  );
  const segments = useMemo(
    () => processReactText(text, langConfig),
    [text, langConfig]
  );

  return (
    <Tag>
      {segments.map((seg: TextSegment, index: number) => (
        <span
          key={index}
          className={seg.className}
          {...(enableRTL && seg.isRTL ? { dir: "rtl" } : {})}
        >
          {seg.text}
        </span>
      ))}
    </Tag>
  );
};
