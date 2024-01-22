import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-slate-100">
      <SliderPrimitive.Range className="absolute h-full bg-main" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors border-2 rounded-full bg-main ring-offset-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
