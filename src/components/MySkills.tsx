import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CollectionEntry } from "astro:content";
import SkillCategorizedGrid from "./SkillCategorizedGrid";
import SkillsWithFilter from "./SkillsWithFilter";

interface Props {
  skillLifeCycle: CollectionEntry<"skills">[]
}

function MySkills({ skillLifeCycle: skills }: Props) {
  const wantToLearn = skills.find(({ id }) => id === "want_to_learn")!
  const mySkills = skills.filter(({ id }) => id !== "want_to_learn")
  return (
    <Tabs defaultValue="all_my_skills" className="w-full grid">
      <TabsList className="justify-self-center mb-8">
        <TabsTrigger className="capitalize" value={"all_my_skills"}>All My Skills</TabsTrigger>
        <TabsTrigger className="capitalize" value={"want_to_learn"}>want to learn</TabsTrigger>
      </TabsList>
      <TabsContent value={"all_my_skills"}>
        <SkillsWithFilter skills={mySkills} />
      </TabsContent>
      <TabsContent value={"want_to_learn"}>
        <SkillCategorizedGrid categories={wantToLearn?.data.categories} />
      </TabsContent>

    </Tabs>
  )
}

export default MySkills