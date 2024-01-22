import Tooltip from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type SelectableBadge = {
    selected: boolean;
    tooltip?: string;
    text: string;
    onSelect?: () => void;
}

export default function SelectableBadge({ selected, tooltip, text, onSelect }: SelectableBadge) {
    return (
        <Tooltip content={tooltip}>
            <div className={cn("flex items-center justify-center px-4 py-2 text-sm font-semibold text-center text-main rounded-full cursor-pointer",
                selected ? "bg-main text-white" : "border border-gray-300 hover:bg-main hover:text-white transition-all"
            )}
                onClick={onSelect}
            >
                {text}
            </div>
        </Tooltip>
    )
}