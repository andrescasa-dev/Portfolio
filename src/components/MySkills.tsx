import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skill from "./Skill";
import type { CollectionEntry } from "astro:content";

interface Props {
  skillLifeCycle: CollectionEntry<"skills">[]
}


function MySkills({ skillLifeCycle }: Props) {
  return (
    <Tabs defaultValue="mastered" className="w-full grid">
      <TabsList className="justify-self-center mb-8">
        {
          skillLifeCycle.sort((a, b) => a.data.order - b.data.order).map(({ data: { learningPhase } }) => (
            <TabsTrigger key={crypto.randomUUID()} className="capitalize" value={learningPhase}>{learningPhase}</TabsTrigger>
          ))
        }
      </TabsList>
      {skillLifeCycle.map(({ data: { learningPhase, categories } }) => (
        <TabsContent value={learningPhase} key={crypto.randomUUID()}>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ category, skillSet }) => (
              <section className="flex flex-col" key={crypto.randomUUID()} >
                <h2 className="title capitalize">{category}</h2>
                <div className="bg-muted rounded-lg flex-grow  mt-6">
                  <div className="grid grid-cols-[repeat(auto-fill,_minmax(117px,_1fr))] gap-2 ">
                    {skillSet.map(({ clarification, iconName, name }) => (
                      <Skill
                        key={crypto.randomUUID()}
                        iconName={iconName}
                        title={name}
                        clarification={clarification}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default MySkills