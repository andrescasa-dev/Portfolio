import type { Icons } from "@/types/myTypes"
import IconMap from "./IconMap"
import { cn } from "@/lib/utils"


function Icon({ name, className }: { name: Icons, className: string }) {
  const IconContent = IconMap[name]
  return (
    <div className={cn('flex justify-center items-center', className)} style={{ width: '100%', height: '100%' }}>
       <svg className="overflow-hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <IconContent />
      </svg>
    </div>
  )
}

export default Icon