import { ArrowContent } from "./style";

interface ArrowComponentProps {
    className?: string;
    onClick?: () => void;
}

export function ArrowComponent({className, onClick} : ArrowComponentProps) {
    return (
        <ArrowContent
            className={className}
            onClick={onClick}
        />
    );
}