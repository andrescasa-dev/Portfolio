import type { CollectionEntry } from "astro:content"
import Skill from "./Skill"

interface Props {
  categories: CollectionEntry<"skills">["data"]["categories"]
}

function SkillCategorizedGrid({ categories }: Props) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map(({ category, skillSet }) => (
        <section className="flex flex-col" key={crypto.randomUUID()} >
          <h2 className="title capitalize delay-100">{category}</h2>
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
  )
}

export default SkillCategorizedGrid