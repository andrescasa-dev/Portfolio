import type { CollectionEntry } from "astro:content";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "./ui/button";

interface Props {
  journeyPeriod: CollectionEntry<"journeyPeriods">,
  children: ReactNode
}

function JourneyCard({ journeyPeriod, children: content }: Props) {
  const [isOpen, setIsOpen] = useState<false | true>(false)

  const { period: periodLabel, title, highlights } = journeyPeriod.data


  return (
    <article
      className="p-5 md:p-8 bg-background border border-border rounded-sm flex flex-col xs:max-md:flex-grow h-fit"
      tabIndex={0}
    >
      <header>
        <h3 className="clarification">{periodLabel}</h3>
        <div className="flex justify-between items-center">
          <h2 className="title mt-2 capitalize">{title}</h2>
          <Button variant="ghost" className="text-accent base ml-2 w-[7em] " onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? 'Menos' : 'Más'} <ChevronDown className={`w-4 h-4 ml-2 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Button>
        </div>
      </header>
      <section className="base mt-3 content leading-relaxed">
        {isOpen
          ? content
          : <ul id="highlights" className="list">
            {highlights.map((item) => (
              <li key={crypto.randomUUID()}>{item}</li>
            ))}
          </ul>}
      </section>
    </article>
  )
}

export default JourneyCard