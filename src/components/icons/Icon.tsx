import type { Icons } from "@/types/myTypes"
import techIcons from "./techIcons"
import { cn } from "@/lib/utils"


function Icon({ name, className }: { name: Icons, className: string }) {
  const IconContent = techIcons[name]
  return (
    <svg className={cn('overflow-hidden', className)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <IconContent />
    </svg>
  )
}

export default Icon