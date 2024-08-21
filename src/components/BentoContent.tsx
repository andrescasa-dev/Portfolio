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
    <section className={`relative w-full h-full card flex flex-col bg-background ${openAreas[bento_area]} `}>
      <Button size={'icon'} className="absolute top-3 right-2" variant={"ghost"} onClick={handleClose}>
        <Exit className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </Button>
      <h2 className={cn("title", contentConfig[bento_area].title)}>{title}</h2>
      <p className={cn("base mt-2", contentConfig[bento_area].desc)}>{description}</p>
      <Accordion className={cn("mt-3 md:mt-6", contentConfig[bento_area].accordion)} type="single" collapsible>
        
        <AccordionItem value="item-1">
          <AccordionTrigger className="subtitle">Funcionalidades Principales</AccordionTrigger>
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
            <ul>
              {project.data.challenges.map(challenge => (
                <li key={crypto.randomUUID()}>
                  <h3 className="font-bold text-base md:text-lg lg:text-lg mt-2">{challenge.title}</h3>
                  <p className="mt-1.5"><b>Solución: </b>{challenge.solution}</p>
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
          href={project.data.read_more}
          className={cn(buttonVariants({variant:"link"}), "ml-auto mt-4")}> 
          Leer más
          <ArrowRight className="ml-1 w-4 h-4"/>
        </a>
      ) }
      
      <div className="mt-auto flex gap-2">
        <a target="_blank" className={cn(buttonVariants({ variant: "default" }), "flex-grow")} href={project.data.demo}>
          Probar
        </a>
        <a target="_blank" className={cn(buttonVariants({ variant: "outline" }), "flex-grow")} href={project.data.code}>
          Código
        </a>
      </div>
    </section>
  )
}

export default BentoContent