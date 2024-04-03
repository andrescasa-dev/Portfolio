import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

function JourneyCard() {
  const [isOpen, setIsOpen] = useState<false | true>(false)

  const Highlights = () => (
    <ul className="list">
      <li>3 semester fo Systems Engineering y quit</li>
      <li>Fundamentals of software engineer</li>
      <li>B2 IELTS</li>
    </ul>
  )

  const Content = () => (
    <p>
      I studied 3 semesters of Systems Engineering at UFPS, where I acquired the fundamentals: POO, data structures, and clean code. However, I felt that what I was studying A no purpose, the curriculum did not fit the industry needs. most of the time they were not code related subjects.
      I decided to leave the university and try a more modern approach achieve my goal. Also during this time I got the B2 IELTS certification
    </p>
  )

  return (
    <article
      className="p-5 md:p-8 bg-background border border-border rounded-sm flex flex-col xs:max-md:flex-grow h-fit"
    >
      <header>
        <h3 className="base">2020 - 2021I</h3>
        <h2 className="title">An unconventional start</h2>
      </header>
      <section className="base mt-3">
        {isOpen ? <Content /> : <Highlights />}
      </section>
      <footer className="base flex justify-end">
        {isOpen
          ? <Button variant={"ghost"} className="text-accent" onClick={() => setIsOpen((prev) => !prev)}>
            <ChevronRight className="rotate-180" aria-hidden="true" /> Back
          </Button>
          : <Button variant={"ghost"} className="text-accent" onClick={() => setIsOpen((prev) => !prev)}>
            Know more <ChevronRight aria-hidden="true" />
          </Button>
        }
      </footer>
    </article>
  )
}

export default JourneyCard