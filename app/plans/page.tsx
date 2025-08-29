"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import PlansDetail from "@/component/plansDetail";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Editdilog } from "@/component/editdilog";


const API = "http://127.0.0.1:8000/apo/v1";
export default function Plans() {


  const [form, setForm] = useState<any>({
    planId: '',
    name: '',
    domains: '',
    description: '',
    featcher: '',
    price: null,
    update: '',
    active: true,
  });
  const [pagestep, setpagestep] = useState<any>(0);
  const [groupedData, setGroupedData] = useState<any>([]);
  const [editId, setEditId] = useState(null);


  const fetchData = async () => {
    const res = await axios.get(`${API}/synckHealtPlan/`);
    if (res.data && res.data.length > 0) {
      setGroupedData(groupInFive(res.data));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API}/synckHealtPlan/${editId}/`, form);
      setEditId(null);
    } else {
      await axios.post(`${API}/synckHealtPlan/`, form);
    }
    setForm({
      planId: '',
      name: '',
      domains: '',
      description: '',
      featcher: '',
      price: null,
      update: '',
      active: true,
    });
    fetchData();
  };

  const handleDelete = async (id: any) => {
    await axios.delete(`${API}/synckHealtPlan/${id}/`);
    fetchData();
  };

  const handleEdit = (item: any) => {
    setForm(item);
    setEditId(item.id);
  };

  const groupInFive = (data: any) => {
    const grouped = [];
    for (let i = 0; i < data.length; i += 5) {
      console.log(data.slice(i, i + 5))
      grouped.push(data.slice(i, i + 5));
    }
    console.log(grouped)
    return grouped;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" ">
      <div className=" mx-auto p-5">
        <h2 className="text-2xl font-semibold mb-3 capitalize ">Plan Configuration</h2>
        <div className="bg-white/90 rounded-xl p-6 mb-6 shadow-lg border border-white/30">

          <h2 className="text-2xl mb-6 text-gray-800">Enter Plans Deatils</h2>
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

            <div className="flex flex-col gap-2">
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

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/40">

              {editId ? 'Update' : 'Add Pricing '}
            </button>

            {editId ? <button
              onClick={() => {
                setForm({
                  planId: '',
                  name: '',
                  domains: '',
                  description: '',
                  featcher: '',
                  price: null,
                  update: '',
                  active: true,
                })
                setEditId(null)
              }}
              className="px-6 py-3 bg-red-400 text-white rounded-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/40">
              Cancle
            </button> : null}


          </div>
        </div>
      

        <div className=" overflow-x-auto mb-6">
          <h3 className="text-xl font-semibold mb-4">Current Plans Matrix</h3>

          <ScrollArea className="w-full min-w-[320px] ">
            <table className="w-full h-full border-separate rounded-md overflow-hidden shadow-lg">
              <thead>
                <tr className="w-full bg-gradient-to-r from-blue-500 to-purple-600  px-5 py-3 rounded-md">
                  <th className="py-5 font-light md:font-semibold md:text-xl text-center">Plan Id</th>
                  <th className="font-light md:font-semibold md:text-xl px-4 text-nowrap text-center">Plan Name</th>
                  <th className="py-5 font-light md:font-semibold md:text-xl text-center">Domain</th>
                  <th className="py-5 font-light md:font-semibold md:text-xl text-center">Description</th>
                  <th className="py-5 font-light md:font-semibold md:text-xl text-center">Features</th>
                  <th className=" py-5 font-light md:font-semibold md:text-xl text-center">Price</th>
                  <th className="py-5 px-10 font-light md:font-semibold md:text-xl text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="h-full">

                {groupedData[pagestep]?.map((item: any, groupIndex: number) => (
                  <tr key={groupIndex} className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors">
                    <td className="p-4 text-center"> {item.planId} </td>
                    <td className=" text-center"> {item.name} </td>
                    <td className="p-4 text-center"> {item.domains} </td>
                    <td className=" p-4 "> {item.description} </td>
                    <td className="p-4  ">
                      {item.featcher?.includes("|") ? <PlansDetail item={item} /> : `${item.featcher}`}
                    </td>
                    <td className=" p-4 text-center"> {item.price} </td>
                    <td>
                      <div className="flex justify-center flex-wrap gap-3">
                        
                            <Editdilog fetchDataa={fetchData} item={item} editId={item.id} />
                       
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="border border-gray-400 p-2 rounded-sm transition-all transform hover:shadow-md hover:shadow-gray-400/40"
                        >
                          <RiDeleteBin6Fill  size={25} className="deletbtn" />

                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex justify-between my-4">

            <Button
              className="px-6"
              onClick={() => setpagestep((prev: number) => prev - 1)}
              disabled={pagestep <= 0}
            >
              Prev
            </Button>

            <Button
              className="px-6"
              onClick={() => setpagestep((prev: number) => prev + 1)}
              disabled={groupedData.length <= pagestep + 1}
            >
              Next
            </Button>
          </div>
        </div>

        {/* </div> */}


      </div>

    </div>
  );
}
