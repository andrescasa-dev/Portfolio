import type { CollectionEntry } from "astro:content";
import { ChevronRight } from "lucide-react";
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
    >
      <header>
        <h3 className="clarification">{periodLabel}</h3>
        <h2 className="title mt-2">{title}</h2>
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
      <footer className="base flex justify-end">
        {isOpen
          ? <Button variant={"ghost"} className="text-accent" onClick={() => setIsOpen((prev) => !prev)}>
            <ChevronRight className="rotate-180" aria-hidden="true" /> Back
          </Button>
          : <Button variant={"ghost"} className="text-accent" onClick={() => setIsOpen((prev) => !prev)}>
            Know More <ChevronRight aria-hidden="true" />
          </Button>
        }
      </footer>
    </article>
  )
}

export default JourneyCard