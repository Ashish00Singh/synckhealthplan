"use client"
import AddDilogbox from '@/component/addDilogbox'
import Topcard from '@/component/coprate/topcard'
import Deletebox from '@/component/deletebox'
import EditDilogbox from '@/component/editDilogbox'
import { Badge } from '@/components/ui/badge'
import { IconTrendingUp } from '@tabler/icons-react';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React, { ChangeEvent, FormEvent, useState } from 'react'
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
import { IconCircleDashedPlus } from '@tabler/icons-react'
import PlansDetail from '@/component/plansDetail'
import { Input } from '@/components/ui/input'


interface Distributor {
    id: string;
    name: string;
    domain: string;
    number: string;
    features: string;
    price: string;
}


export default function ChannelPartner() {
    const [distrub, setDistrub] = useState<Distributor[]>(
      [
  {
    "id": "1",
    "name": "Ravi Sharma",
    "domain": "Healthcare",
    "number": "9876543210",
    "features": "SYNCK-PL-105",
    "price": "5500"
  },
  {
    "id": "2",
    "name": "Anita Patel",
    "domain": "Healthcare",
    "number": "9823456781",
    "features": "SYNCK-PL-0K5",
    "price": "7200"
  },
  {
    "id": "3",
    "name": "Vikram Verma",
    "domain": "Healthcare",
    "number": "9765432109",
    "features": "SYNCK-PL-0O5",
    "price": "8900"
  },
  {
    "id": "4",
    "name": "Priya Iyer",
    "domain": "Healthcare",
    "number": "9912345678",
    "features": "SYNCK-PL-005",
    "price": "12000"
  },
  {
    "id": "5",
    "name": "Imran Khan",
    "domain": "Healthcare",
    "number": "9898765432",
    "features": "SYNCK-PL-005",
    "price": "950"}]

);
    const [comition, setComition] = useState(50);
    const [data, setData] = useState<Distributor>({
        id: "",
        name: "",
        domain: "",
        number: "",
        features: "",
        price: "",
    });
    // const comition = 100000*(50/100)
    console.log(comition)

    // handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // handle form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data.name || !data.domain) {
            alert("Please fill all required fields!");
            return;
        }

        setDistrub((prev) => [...prev, data]);
        setData({
            id: "",
            name: "",
            domain: "",
            number: "",
            features: "",
            price: "",
        });
    };
    const handleDelete = (index: number) => {
        setDistrub((prev) => prev.filter((_, i) => i !== index));
    };
   
    return (
        <div className='p-5 px-3 flex flex-col gap-5 sm:px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5' >
                <Card className="cardcustom md:col-span-1">
                    <CardHeader>
                        <CardDescription>Total On-Boarding</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
                            ₹ {distrub.reduce(
                                (total, item) => total + Number(item.price || 0),
                                0
                            )}
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className='bg-blue-400 border-black rounded-full'>
                                <IconTrendingUp />
                                sr
                            </Badge>
                        </CardAction>
                    </CardHeader>
                </Card>

                <Card className="cardcustom border-white md:col-span-1">
                    <CardHeader>
                        <CardDescription>Total Pending</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
                           ₹ {distrub.reduce(
                                (total, item) => total + Number(item.price || 0),
                                0
                            ) * (Number(comition) / 100)} 
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className='bg-red-400 border-black rounded-full'>
                              %
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div>
                                            {comition}
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Add profile</DialogTitle>
                                            <DialogDescription>
                                                The pay out persent
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4">
                                            <div className="grid gap-3">
                                                <Input onChange={(e) => setComition(Number(e.target.value))} />
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </Badge>
                        </CardAction>
                    </CardHeader>

                </Card>

                <Card className="cardcustom border-white md:col-span-2 lg:col-span-1">
                    <CardHeader>
                        <CardDescription>Closed</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
                            ₹ 1,250.00
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className='bg-green-400 border-black rounded-full border'>
                                <IconTrendingUp />
                                +12.5%
                            </Badge>
                        </CardAction>
                    </CardHeader>

                </Card>

            </div>

            <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
                <h3 className='sm:text-lg text-[18px]' >Channel Partner</h3>

                <div className='flex gap-3'>
                    <Dialog>
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
                            <form onSubmit={handleSubmit} className=' gap-5 md:grid-cols-2 grid grid-cols-1'>
                               
                                <div>
                                    <label className="block mb-2 font-medium">ID</label>
                                    <input
                                        type="text"
                                        name="id"
                                        placeholder="ID"
                                        value={data.id}
                                        onChange={handleChange}
                                        className="w-full border border-black p-2 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Company Name</label>
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
                                    <label className="block mb-2 font-medium">Domain</label>
                                    <input
                                        type="text"
                                        name="domain"
                                        placeholder="Domain"
                                        value={data.domain}
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
                                    <label className="block mb-2 font-medium">Features</label>
                                    <input
                                        type="text"
                                        name="features"
                                        placeholder="Features"
                                        value={data.features}
                                        onChange={handleChange}
                                        className="w-full border border-black p-2 rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium">Price</label>
                                    <input
                                        type="text"
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



                    <EditDilogbox />
                </div>
            </div>

            <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
                <ScrollArea className="w-full min-w-[320px] ">
                    <table className="w-full h-full border-separate rounded-md overflow-hidden shadow-lg">
                        <thead className='border border-black border-separate'>
                            <tr className="w-full border border-black px-5 py-3 rounded-md">
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Id's</th>
                                <th className="font-light md:font-medium md:text-xl px-4 text-nowrap text-center">Company name</th>
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Domain</th>
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Number</th>
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Plan Id</th>
                                <th className=" py-5 font-light md:font-medium md:text-xl text-center">Price</th>
                                <th className="py-5 px-10 font-light md:font-medium md:text-xl text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="h-full">

                            {/* {groupedData[pagestep]?.map((item: any, groupIndex: number) => ( */}

                            {distrub.map((item, index) =>
                                <tr key={index} className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors">
                                    <td className="p-4 text-center"> {index +1} </td>
                                    <td className=" text-center"> {item.name} </td>
                                    <td className="p-4 text-center"> {item.domain} </td>
                                    <td className=" p-4 text-center"> {item.number} </td>
                                    <td className="p-4 text-center ">
                                        {item.features}
                                    </td>
                                    <td className=" p-4 text-center"> {item.price} </td>
                                    <td>
                                        <div className="flex justify-center flex-wrap gap-3">

                                            {/* <EditDilogbox /> */}

                                            <button className="border-black rounded-md border p-1 h-fit dark:border-white">
                                                {/* <RiDeleteBin6Fill  size={25} className="deletbtn" /> */}
                                                <Deletebox handleDelete={() => handleDelete(index)} />

                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}



                        </tbody>
                    </table>

                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>            

        </div>
    )
}
