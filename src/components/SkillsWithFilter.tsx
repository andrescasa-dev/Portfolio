import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu"
import type { CollectionEntry } from "astro:content"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import SkillCategorizedGrid from "./SkillCategorizedGrid"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

interface Props {
  skills: CollectionEntry<"skills">[]
}


function SkillsWithFilter({ skills }: Props) {
  const [categories, setCategories] = useState<CollectionEntry<"skills">["data"]["categories"]>([])
  const [filteredBy, setFilteredBy] = useState<string>('todas')

  useEffect(() => {
    setCategories(getSkillsData(skills, filteredBy).categories)
  }, [filteredBy])

  return (
    <div className="grid gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(buttonVariants({ variant: 'outline' }), "justify-self-end capitalize")} asChild>
          <Button variant="secondary">Filtrar Por: {filteredBy}<ChevronDown className="w-4 h-4 ml-2" /> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={filteredBy} onValueChange={setFilteredBy}>
            {[{ id: 'todas', data: { order: 0 } }, ...skills].sort((a, b) => a.data.order - b.data.order).map((skill) => (
              <DropdownMenuRadioItem value={skill.id} key={crypto.randomUUID()} >
                <Button className="w-full capitalize flex items-center" variant={'ghost'}>{skill.id}</Button>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <SkillCategorizedGrid categories={categories} />
    </div>
  )
}

export default SkillsWithFilter

const getSkillsData = (skills: CollectionEntry<'skills'>[], filterTag: string): CollectionEntry<"skills">["data"] => {
  const found = skills.find((entry) => entry.id === filterTag)
  return found ? found.data : getAllSkill(skills)
}

const getAllSkill = (skillLifeCycle: CollectionEntry<'skills'>[]): CollectionEntry<"skills">["data"] => {
  let categoriesAcc: CollectionEntry<'skills'>['data']['categories'] = []

  skillLifeCycle.forEach(({ id, data: { categories } }) => {
    if (id !== 'quiero_aprender') {
      categories.forEach(({ category: categoryTarget, skillSet: skillSetToAdd }) => {
        const storedI = categoriesAcc.findIndex(({ category }) => category === categoryTarget)
        if (storedI !== -1) {
          categoriesAcc[storedI] = { category: categoryTarget, skillSet: [...categoriesAcc[storedI].skillSet, ...skillSetToAdd] }
        }
        else {
          categoriesAcc.push({ category: categoryTarget, skillSet: skillSetToAdd })
        }
      })
    }
  })

  const allSkills: CollectionEntry<'skills'>['data'] = {
    learningPhase: "todas",
    order: 0,
    categories: categoriesAcc
  }

  return allSkills
}
