import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import BentoCard from "./BentoCard";
import BentoContent from "./BentoContent";

interface Props {
  myProjects: CollectionEntry<'projects'>[]
}

function ProjectsBento({ myProjects }: Props) {
  const [currentProject, setCurrentProject] = useState<CollectionEntry<'projects'> | null>(null)

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {myProjects.map((project) => (
        <BentoCard
          key={crypto.randomUUID()}
          project={project}
          handleClick={() => {
            setCurrentProject((prevProject) => prevProject?.id === project.id ? null : project)
          }}
        />)
      )}
      <BentoContent
        project={currentProject}
        handleClose={() => setCurrentProject(null)}
      />
    </div>
  )
}

export default ProjectsBento
