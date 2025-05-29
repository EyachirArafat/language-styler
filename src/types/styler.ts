export interface StylerProps {
    languages?: string[];
    styleConfig?: { [language: string]: string };
    enableRTL?: boolean;
    as?: React.ElementType;
    children: React.ReactNode;
}