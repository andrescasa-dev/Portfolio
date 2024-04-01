import { cn } from "@/lib/utils"
import Exit from "./icons/Exit"
import { Button, buttonVariants } from "./ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { CollectionEntry } from "astro:content"
import { contentConfig, openAreas } from "@/config"


interface Props {
  handleClose: () => void
  project: CollectionEntry<'projects'> | null
}

function BentoContent({ handleClose, project }: Props) {
  if (project !== null) {
    const { priority: area } = project.data
    return (
      <section className={`relative w-full h-full card flex flex-col bg-background ${openAreas[area]} `}>
        <Button size={'icon'} className="absolute top-3 right-2" variant={"ghost"} onClick={handleClose}>
          <Exit className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </Button>
        <h2 className={cn("title", contentConfig[area].title)}>Digital hippo</h2>
        <p className={cn("base mt-2", contentConfig[area].desc)}>A Ecommerce website to Buy and Sell digital assets</p>
        <Accordion className={cn("mt-3 md:mt-6", contentConfig[area].accordion)} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Main Features</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                {project.data.main_features.map(features => (
                  <li key={crypto.randomUUID()}>{features}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Challenges</AccordionTrigger>
            <AccordionContent>
              <ul>
                {project.data.challenges.map(challenge => (
                  <li key={crypto.randomUUID()}>
                    <h3 className="font-bold mt-2">{challenge.title}</h3>
                    <p className="mt-1">{challenge.solution}</p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What I learned</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6">
                {project.data.what_i_learned.map(item => (
                  <li key={crypto.randomUUID()}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-auto flex gap-2">
          <a target="_blank" className={cn(buttonVariants({ variant: "default" }), "flex-grow")} href={project.data.demo}>
            Demo
          </a>
          <a target="_blank" className={cn(buttonVariants({ variant: "outline" }), "flex-grow")} href={project.data.code}>
            Code
          </a>
        </div>
      </section>
    )
  }
}

export default BentoContent