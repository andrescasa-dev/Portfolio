
import { areas, openAreas } from "@/config";
import { cn } from "@/lib/utils";
import TechIcon from "./icons/TechIcon";

interface Props {
  title: string;
  description: string;
  technologies: { category: string; items: { name: string; icon: string }[] }[];
  area: "primary" | "secondary" | "tertiary" | "quaternary";
  handleClick: () => void
}

function BentoCard({ title, description, technologies, area, handleClick }: Props) {
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
      <p className="base mt-2 ">{description}</p>
      <section className="flex gap-5 mt-8">
        {
          technologies.map(({ category, items }) => (
            <div key={crypto.randomUUID()}>
              <h3 className="font-medium ">{category}</h3>
              <div className="flex flex-wrap gap-2 gap-y-3 mt-2">
                {items.map(({ name, icon }) => (
                  <TechIcon
                    key={crypto.randomUUID()}
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
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