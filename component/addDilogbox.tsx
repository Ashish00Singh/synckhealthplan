import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { IconCircleDashedPlus } from "@tabler/icons-react"
import DynamicStepForm from "./DynamicStepForm"

export default function AddDilogbox() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="border-black rounded-md border p-1 dark:border-white">
            <IconCircleDashedPlus stroke={2} className="sm:w-7 w-6 sm:h-7 h-6" /></button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[70%] xl:max-w-[50%] md:max-w-[80%] max-w-[90%] ">
          <DialogHeader>
            <DialogTitle>Add profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
{/* Form Step form */}
          <DynamicStepForm />
          
        </DialogContent>
      </form>
    </Dialog>

  )
}
