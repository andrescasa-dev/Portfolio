import type { ReactNode } from "react";
import { Dialog, DialogFooter } from "./ui/dialog";
import { DialogTrigger } from "./ui/dialog";
import { DialogContent } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  thumbnail: ReactNode,
  fullImage: ReactNode,
  title: string,
  link?: {
    cta: string,
    href: string,
  }
}

function BannerDialog({ thumbnail, fullImage, title, link }: Props) {

  return (
    <Dialog>
      <DialogTrigger>
        {thumbnail}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="subtitle capitalize">{title}</DialogHeader>
        <div>
          {fullImage}
        </div>
        <DialogFooter className="flex justify-start">
          {
            link && (
              <a className={cn(buttonVariants({ variant: 'outline' }), "capitalize")} target="_blank" href={link.href}>
                {link.cta} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            )
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BannerDialog