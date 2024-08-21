import type { CollectionEntry, InferEntrySchema } from "astro:content";
import { useState } from "react";
import BentoCard from "./BentoCard";
import BentoContent from "./BentoContent";


interface Props {
  myProjects: CollectionEntry<'projects'>[]
}

function ProjectsBento({ myProjects }: Props) {
  const [currentProject, setCurrentProject] = useState< CollectionEntry<'projects'> | null>(null)
  if(myProjects.some((project)=>project.data.bento_area === undefined)){
    const msg ='ProjectsBento should have projects with valid bentoArea'
    console.error(msg)
    return msg
  }

  return (
    <div id="projects" className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
