import { cn } from "@/lib/utils"
import Exit from "./icons/Exit"
import { Button } from "./ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface Props {
  className: string,
  handleClose: () => void
  config?: { accordion?: string, title?: string, desc?: string }
}

function BentoContent({ className, handleClose, config }: Props) {
  return (
    <section className={`relative w-full h-full card flex flex-col bg-background ${className} `}>
      <Button size={'icon'} className="absolute top-3 right-2" variant={"ghost"} onClick={handleClose}>
        <Exit className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </Button>
      <h2 className={cn("title", config?.title)}>Digital hippo</h2>
      <p className={cn("base mt-2", config?.desc)}>A Ecommerce website to Buy and Sell digital assets</p>
      <Accordion className={cn("mt-3 md:mt-6", config?.accordion)} type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How I did it</AccordionTrigger>
          <AccordionContent>I develop this project following the coding guidelines by Josh Tried Code. In order to advance with ease, I Reviewed the code base and analyzing the design beforehand on each feature or design implementation. When I considered necessary, I implemented my own solutions to address scalability and readability</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-auto flex gap-2">
        <Button className="flex-grow" variant={"default"} >
          Demo
        </Button>
        <Button className="flex-grow" variant={"outline"} >
          Code
        </Button>
      </div>
    </section>
  )
}

export default BentoContent