
import { areas } from "@/config";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import type { CollectionEntry } from "astro:content";
import Card from "./Card";
import Icon from "./icons/Icon";

interface Props {
  project: CollectionEntry<'projects'>
  handleClick: () => void
}

function BentoCard({ project, handleClick }: Props) {
  const { title, description, technologies, bento_area } = project.data
  if(bento_area === undefined){
      const msg = 'bento_area property is needed to render this component'
      console.error(msg)
      return msg
  }
  return (
    <Card 
      as='section'
      role="button"
      onClick={handleClick}
      className={cn(
        "after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-6 after:rounded-r-sm after:bg-gradient-to-l after:from-filter after:to-transparent",
        "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-6 before:rounded-r-sm before:bg-gradient-to-r before:from-filter before:to-transparent before:z-10 before:rounded-sm",
        areas[bento_area],
      )}
    >
      <h2 className="title font-semibold ">{title}</h2>
      <p className="base mt-2">{description}</p>
      <section aria-label="Used Technologies" className="overflow-x-scroll col-start-1 col-end-[-1] px-7">
        <ScrollArea className="flex mt-8">
          {
            technologies.map(({ category, items }) => (
              <section key={crypto.randomUUID()} className="mb-2 pr-7">
                <h3 className="font-medium capitalize">{category}</h3>
                <ul className={cn("grid gap-2 mt-2", {"grid-cols-[repeat(3,40px)]": items.length >= 3, "grid-cols-[repeat(2,40px)]": items.length === 2, "grid-cols-[repeat(1,40px)]": items.length === 1, })}>
                  {items.map(({ name, icon }) => (
                    <li key={crypto.randomUUID()}>
                      <Icon
                        name={icon}
                        className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                        aria-label={name}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))
          }
        
        </ScrollArea>
      </section>
    </Card>
  )
}

export default BentoCard