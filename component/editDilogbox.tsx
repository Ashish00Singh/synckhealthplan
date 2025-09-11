"use client"
import { LiaEditSolid } from "react-icons/lia";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChangeEvent, FormEvent, useState } from "react"

export default function EditDilogbox({ item, setDistrub }: any) {
  const [data, setData] = useState(item);
  const [open, setOpen] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setDistrub((prev: any[]) => {
    const exists = prev.find((item) => item.id === data.id);

    if (exists) {
      return prev.map((item) =>
        item.id === data.id ? { ...item, ...data } : item
      );
    } else {
      return [...prev, data];
    }
  });
   setOpen(false)
};
  return (
  <>
  {data === undefined? null :   <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild  >
        <button className="border-black rounded-md border p-1 dark:border-white">
          <LiaEditSolid  className="sm:w-7 w-6 sm:h-7 h-6" /></button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[70%] xl:max-w-[50%] md:max-w-[80%] max-w-[90%] ">
        <DialogHeader>
          <DialogTitle>Add profile {data.id}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        {/* Form Step form */}
        <form onSubmit={handleSubmit} className=' gap-5 md:grid-cols-2 grid grid-cols-1'>

          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              value={data.name}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={data.number}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">commissions</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={data.price}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded"
            />
          </div>
          <button className="px-4 py-2 col-span-2 bg-blue-600 text-white rounded" type="submit">Add</button>
        </form>

      </DialogContent>
    </Dialog>

  }
  </>
  )
}
