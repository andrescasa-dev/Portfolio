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
import { ArrowRight } from "lucide-react"
import Card from "./Card"


interface Props {
  handleClose: () => void
  project:  CollectionEntry<'projects'> | null
}

function BentoContent({ handleClose, project }: Props) {
  if(project === null) return
  if(project.data.bento_area === undefined){
    const msg ='ProjectsBento should have projects with valid bento_area'
    console.error(msg)
    return msg
  }

  const { bento_area, title, description, read_more } = project.data
  
  return (
    <Card 
      as='section'
      className={`bg-background gap-y-2 ${openAreas[bento_area]} z-40`}
    >
      <Button size={'icon'} className="absolute top-3 right-2" variant={"ghost"} onClick={handleClose}>
        <Exit className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </Button>
      <h2 className={cn("title", contentConfig[bento_area].title)}>{title}</h2>
      <p className={cn("base", contentConfig[bento_area].desc)}>{description}</p>
      <section aria-label="Project details">
        <Accordion className={cn("mt-3 md:mt-6", contentConfig[bento_area].accordion)} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="subtitle">Características</AccordionTrigger>
            <AccordionContent className="base">
              <ul className="list">
                {project.data.main_features.map(features => (
                  <li key={crypto.randomUUID()}>{features}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="subtitle">Retos</AccordionTrigger>
            <AccordionContent className="base">
              <ul className="flex flex-col gap-2.5">
                {project.data.challenges.map(challenge => (
                  <li key={crypto.randomUUID()}>
                    <h3 className="font-bold text-base md:text-lg lg:text-lg mb-1">{challenge.title}</h3>
                    <p className="">{challenge.solution}</p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="subtitle">Aprendizajes</AccordionTrigger>
            <AccordionContent className="base">
              <ul className="list">
                {project.data.what_i_learned.map(item => (
                  <li key={crypto.randomUUID()}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {read_more && (
          <a 
            href={project.data.read_more?.href}
            className={cn(buttonVariants({variant:"link"}), "ml-auto mt-4 px-0")}> 
            {project.data.read_more?.label}
            <ArrowRight className="ml-1 w-4 h-4"/>
          </a>
        ) }
      </section>
      <div className="mt-auto flex gap-2">
        <a target="_blank" className={cn(buttonVariants({ variant: "default" }), "flex-grow")} href={project.data.demo}>
          Visitar
        </a>
        <a target="_blank" className={cn(buttonVariants({ variant: "outline" }), "flex-grow")} href={project.data.code}>
          Código
        </a>
      </div>
    </Card>
  )
}

export default BentoContent