export interface StyleConfig {
    className?: string;
    fontFamily?: string;
}
export interface StylerProps {
    languages?: string[];
    styleConfig?: { [language: string]: StyleConfig };
    enableRTL?: boolean;
    as?: React.ElementType;
    children: React.ReactNode;
}