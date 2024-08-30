import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

function BubbleGoUP({appearDistance, href}:{appearDistance: number, href: string}) {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const handleScroll = ()=> {
      if(window.scrollY > appearDistance){
        setIsHidden(false)
      }
      else{
        setIsHidden(true)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return ()=> document.removeEventListener('scroll', handleScroll)
  },[isHidden])

  return (
    <>
    {
      !isHidden && (
        <a href={href} className="rounded-full w-12 h-12 fixed left-1/2 -translate-x-1/2 bottom-2 sm:hidden bg-background border border-border flex items-center justify-center">
          <ArrowUp/>
        </a>
      )
    }
    </>
    
  )
}

export default BubbleGoUP