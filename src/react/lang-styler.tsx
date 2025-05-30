import React, { Children, FC, useMemo } from "react";
import { getLangConfig } from "../core/config";
import { processReactText, TextSegment } from "../core/react";
import { StylerProps, StyleConfig } from "../types/styler";

export const LangStyler: FC<StylerProps> = ({
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
      baseConfig.map((lang) => {
        const config: StyleConfig = styleConfig[lang.name] || {};
        return {
          ...lang,
          className: config.className || lang.className,
          fontFamily: config.fontFamily || "inherit",
        };
      }),
    [baseConfig, styleConfig]
  );
  const segments = useMemo(
    () => processReactText(text, langConfig),
    [text, langConfig]
  );

  return (
    <Tag>
      {segments.map(
        (seg: TextSegment & { fontFamily?: string }, index: number) => (
          <span
            key={index}
            className={seg.className}
            style={{ fontFamily: seg.fontFamily }}
            {...(enableRTL && seg.isRTL ? { dir: "rtl" } : {})}
          >
            {seg.text}
          </span>
        )
      )}
    </Tag>
  );
};
