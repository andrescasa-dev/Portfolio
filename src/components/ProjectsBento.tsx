import { contentConfig, openAreas } from "@/config";
import { projects } from "@/data";
import { useState } from "react";
import BentoCard from "./BentoCard";
import BentoContent from "./BentoContent";

function ProjectsBento() {
  const [openArea, setOpenArea] = useState<"primary" | "secondary" | "tertiary" | "quaternary" | undefined>(undefined)

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map(({ title, description, technologies, priority: area }) => (
        <BentoCard
          key={crypto.randomUUID()}
          area={area}
          title={title}
          description={description}
          technologies={technologies}
          handleClick={() => setOpenArea((prevState) => prevState === area ? undefined : area)}
        />
      ))}
      <BentoContent
        className={`${openArea ? openAreas[openArea] : "hidden"}`}
        config={openArea ? contentConfig[openArea] : undefined}
        handleClose={() => setOpenArea(undefined)}
      />
    </div>
  )
}

export default ProjectsBento
