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
import axios from "axios";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";

const API = "http://127.0.0.1:8000/apo/v1";
export function Editdilog({ item, editId, fetchDataa }: any) {
  const [form, setForm] = useState<any>(item);
  console.log(form)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.put(`${API}/synckHealtPlan/${editId}/`, form);

    fetchDataa();
  };
  return (
    <Dialog>

      <DialogTrigger asChild>
        <button className="border border-gray-400 p-2 rounded-sm transition-all transform hover:shadow-md hover:shadow-gray-400/40">
           <LiaEditSolid size={25} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Plans</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re
            done.
          </DialogDescription> */}
        </DialogHeader>


        <div className="bg-white/90">

          {/* <h2 className="text-2xl mb-6 text-gray-800">Enter Plans Deatils</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Plan Id (₹)</label>
              <input
                className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                placeholder="Enter premium amount"
                value={form.planId} onChange={e => setForm({ ...form, planId: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Name (₹)</label>
              <input
                className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                placeholder="Enter premium amount"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Domains (₹)</label>
              <input
                className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                placeholder="Enter premium amount"
                value={form.domains} onChange={e => setForm({ ...form, domains: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Description</label>
              <textarea
                className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                placeholder="Enter premium amount"
                value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <div className="flex flex-col col-span-2 gap-2">
              <label className="text-sm font-semibold text-gray-700">Featcher (₹)</label>
              <textarea className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                value={form.featcher} onChange={e => setForm({ ...form, featcher: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Price (₹)</label>
              <input
                type="number"
                className="p-3 border-2 border-gray-400 rounded-lg text-sm transition-all bg-white/90 focus:border-blue-500 focus:outline-none focus:shadow-lg focus:scale-105"
                value={form.price ?? ""}
                onChange={e =>
                  setForm({
                    ...form,
                    price: e.target.value === "" ? null : Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-semibold text-gray-700">Active</label>
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) =>
                  setForm({
                    ...form,
                    active: e.target.checked, // ✅ `checked` gives boolean
                  })
                }
              />
            </div>
          </div>

        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}
