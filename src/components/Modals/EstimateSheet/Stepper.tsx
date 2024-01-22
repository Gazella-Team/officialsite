import { cn } from "@/lib/utils"

type StepperProps = {
    steps: number,
    step: number,
    setStep: (step: number) => void
}

export default function Stepper({ steps, step, setStep}: StepperProps){
    return (
        <ol className="flex items-center w-full">
            { Array.from({ length: steps }, (_, i) => i + 1).map((item) => (
                <li key={item.toString()} className={cn("flex items-center text-white font-semibold",
                    item < steps && "w-full after:content-[''] after:w-full after:border-main after:border",
                    item >= step && "text-white after:border-gray-200",
                    item > step && "text-slate-700",
                    item <= step && "cursor-pointer"
                )} onClick={() => {
                    if(item <= step){
                        setStep(item)
                    }
                }}>
                    <span className={cn("select-none flex items-center justify-center w-10 h-10 bg-main rounded-full lg:h-12 lg:w-12 shrink-0",
                        item > step && "bg-transparent border-gray-300 border"
                    )}>
                        {item} 
                    </span>
                </li>
            ))}
        </ol>  
    )
}