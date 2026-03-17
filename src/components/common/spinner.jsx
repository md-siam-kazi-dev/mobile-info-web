import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      {...props} 
    />
  )
}

export function SpinnerCustom() {
  return (
    <div className="flex mx-auto w-full justify-center mt-20 items-center gap-4">
      <Spinner />
    </div>
  )
}