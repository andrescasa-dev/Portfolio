import { openAreas } from "@/config";
import { projects } from "@/data";
import { useState } from "react";
import BentoCard from "./BentoCard";
import { Button } from "./ui/button";

function ProjectsBento() {
  const [openArea, setOpenArea] = useState<"primary" | "secondary" | "tertiary" | "quaternary" | undefined>(undefined)

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map(({ title, description, technologies, priority }) => (
        <BentoCard
          key={crypto.randomUUID()}
          area={priority}
          title={title}
          description={description}
          technologies={technologies}
          setOpenArea={setOpenArea}
        />
      ))}
      <section className={`w-full h-full bg-gray-400 ${openArea ? openAreas[openArea] : "hidden"}`}>
        <h2>content</h2>
        <Button variant={"ghost"} onClick={() => setOpenArea(undefined)}> x </Button>
      </section>
    </div>
  )
}

export default ProjectsBento
