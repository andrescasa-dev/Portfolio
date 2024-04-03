
import { areas } from "@/config";
import { cn } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";
import Icon from "./icons/Icon";

interface Props {
  project: CollectionEntry<'projects'>
  handleClick: () => void
}

function BentoCard({ project, handleClick }: Props) {
  const { title, description, technologies, priority: area } = project.data
  return (
    <article
      role="button"
      className={cn(
        "card bg-gradient",
        areas[area],
      )}
      onClick={handleClick}
    >
      <h2 className="title font-semibold ">{title}</h2>
      <p className="base mt-2">{description}</p>
      <section className="flex gap-5 mt-8">
        {
          technologies.map(({ category, items }) => (
            <div key={crypto.randomUUID()}>
              <h3 className="font-medium capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2 gap-y-3 mt-2">
                {items.map(({ name, icon }) => (
                  <Icon
                    key={crypto.randomUUID()}
                    name={icon}
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    aria-label={name}
                  />
                ))}

              </div>
            </div>
          ))
        }
      </section>
    </article>
  )
}

export default BentoCard