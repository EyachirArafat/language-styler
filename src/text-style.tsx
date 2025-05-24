import React, { useMemo } from "react";
import { getLangConfig, processTextForReact } from "./core";

interface Segment {
  name: string;
  className: string;
}

interface Props {
  children: React.ReactNode;
  languages?: string[];
  styleConfig?: { [language: string]: string };
  as?: React.ElementType;
}

/**
 * A React component that styles text based on detected languages using Unicode ranges.
 * @param {Props} props - Component props.
 * @returns {JSX.Element} Styled text wrapped in spans.
 */
export const TextStyle: React.FC<Props> = ({
  children,
  languages = [],
  styleConfig = {},
  as: Tag = "div",
}) => {
  const text = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join("");

  const baseConfig = useMemo(
    () => getLangConfig(languages) as Segment[],
    [languages]
  );
  const langConfig = useMemo(
    () =>
      baseConfig.map((lang) => ({
        ...lang,
        className: styleConfig[lang.name] || lang.className,
      })),
    [baseConfig, styleConfig]
  );
  const segments = useMemo(
    () => processTextForReact(text, langConfig),
    [text, langConfig]
  );

  return (
    <Tag>
      {segments.map((seg, index) => (
        <span key={index} className={seg.className}>
          {seg.text}
        </span>
      ))}
    </Tag>
  );
};
