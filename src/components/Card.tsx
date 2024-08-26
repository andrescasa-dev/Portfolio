import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

interface CardProps {
  className?: string, 
  children: ReactNode, 
  as: 'div' | 'section' | 'article'
} 

function Card ({className, children, as: Tag, ...delegate}: CardProps & ComponentPropsWithoutRef<'section'>) {
  return (
    <Tag
      {...delegate}
      className={
        cn(
          'relative bg-gradient-to-b from-filter to-transparent py-7 md:py-10 border border-border rounded-sm md:pr-0 grid auto-rows-min grid-cols-[1.75rem_1fr_1.75rem] [&>*:not(.col-start-1)]:col-start-2',
          className
      )}
    >
      {children}
    </Tag>
    
  )
}

export default Card