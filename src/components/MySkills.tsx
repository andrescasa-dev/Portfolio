import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CollectionEntry } from "astro:content";
import SkillCategorizedGrid from "./SkillCategorizedGrid";
import SkillsWithFilter from "./SkillsWithFilter";

interface Props {
  skillLifeCycle: CollectionEntry<"skills">[]
}

function MySkills({ skillLifeCycle: skills }: Props) {
  const wantToLearn = skills.find(({ id }) => id === "quiero_aprender")!
  const tools = skills.find(({ id }) => id === "herramientas")!
  const mySkills = skills.filter(({ id }) => id !== "quiero_aprender" && id !== "herramientas")

  return (
    <Tabs defaultValue="all_my_skills" className="w-full grid min-h-[65vh]" >
      <TabsList className="justify-self-center mb-8">
        <TabsTrigger className="capitalize" value={"all_my_skills"}>Con Experiencia</TabsTrigger>
        <TabsTrigger className="capitalize" value={"quiero_aprender"}>Quiero aprender</TabsTrigger>
        <TabsTrigger className="capitalize" value={"herramientas"}>Herramientas</TabsTrigger>
      </TabsList>
      <TabsContent value={"all_my_skills"} className="animate-appearing duration-75">
        <SkillsWithFilter skills={mySkills} />
      </TabsContent>
      <TabsContent value={"quiero_aprender"} className="animate-appearing duration-75">
        <SkillCategorizedGrid categories={wantToLearn.data.categories} />
      </TabsContent>
      <TabsContent value={"herramientas"} className="animate-appearing duration-75">
        <SkillCategorizedGrid categories={tools.data.categories} />
      </TabsContent>
    </Tabs>
  )
}

export default MySkills
