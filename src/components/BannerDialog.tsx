import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { buttonVariants } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";

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