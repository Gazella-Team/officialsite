import { TooltipProvider, Tooltip as RadixTooltip, TooltipTrigger, TooltipContent } from "./provider"

export default function Tooltip({ content, jsx, children }: { content?: string, jsx?: React.ReactNode, children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <RadixTooltip delayDuration={100}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    {
                        content && <p className="font-medium text-main max-w-[300px]">{content}</p>
                    }
                    {
                        jsx && jsx
                    }
                </TooltipContent>
            </RadixTooltip>
        </TooltipProvider>
    )
}