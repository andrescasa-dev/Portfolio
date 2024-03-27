
import { areas, openAreas } from "@/config";
import { cn } from "@/lib/utils";
import TechIcon from "./icons/TechIcon";

interface Props {
  title: string;
  description: string;
  technologies: { category: string; items: { name: string; icon: string }[] }[];
  area: "primary" | "secondary" | "tertiary" | "quaternary";
  setOpenArea: React.Dispatch<React.SetStateAction<"primary" | "secondary" | "tertiary" | "quaternary" | undefined>>
}

function BentoCard({ title, description, technologies, area, setOpenArea }: Props) {
  return (
    <article
      role="button"
      className={cn(
        "border border-border bg-gradient p-5 md:px-6 md:py:py-7 lg:px-9 lg:py-11 rounded-sm",
        areas[area],
      )}
      onClick={() => setOpenArea((prevState) => prevState === area ? undefined : area)}
    >

      <h2 className="title font-semibold capitalize">{title}</h2>
      <p className="text-base mt-2 capitalize">{description}</p>
      <section className="flex gap-5 mt-8">
        {
          technologies.map(({ category, items }) => (
            <div key={crypto.randomUUID()}>
              <h3 className="font-medium capitalize">{category}</h3>
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