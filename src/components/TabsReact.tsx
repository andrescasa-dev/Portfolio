import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skill from "./Skill";

// learning-phase => category => skill
// mastered => frontend => react 

interface Props {
  skillLifeCycle: {
    learningPhase: "mastered" | "learning" | "to_Learn",
    categories: {
      category: string;
      skillSet: ({
        iconName: string;
        title: string;
        clarification: string;
      } | {
        iconName: string;
        title: string;
        clarification?: undefined;
      })[];
    }[];
  }[]
}


function TabsReact({ skillLifeCycle }: Props) {
  return (
    <Tabs defaultValue="mastered" className="w-full grid">
      <TabsList className="justify-self-center mb-8">
        <TabsTrigger value="mastered">Mastered</TabsTrigger>
        <TabsTrigger value="learning">Learning</TabsTrigger>
        <TabsTrigger value="to_Learn">To learn</TabsTrigger>
      </TabsList>
      {skillLifeCycle.map(({ learningPhase, categories }) => (
        <TabsContent value={learningPhase} key={crypto.randomUUID()}>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ category, skillSet }) => (
              <section key={crypto.randomUUID()}>
                <h2 className="title capitalize">{category}</h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(117px,_1fr))] gap-2 mt-6">
                  {skillSet.map(({ clarification, iconName, title }) => (
                    <Skill
                      key={crypto.randomUUID()}
                      iconName={iconName}
                      title={title}
                      clarification={clarification}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabsReact