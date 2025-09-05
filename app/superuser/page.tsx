"use client"
import Deletebox from '@/component/deletebox'
import EditDilogbox from '@/component/editDilogbox'
import { Badge } from '@/components/ui/badge'
import { IconTrendingUp } from '@tabler/icons-react';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IconCircleDashedPlus } from '@tabler/icons-react'
import PlansDetail from '@/component/plansDetail'
import { Input } from '@/components/ui/input'


interface Distributor {
    id: string;
    compny_name: string;
    domain: string;
    number: string;
    price: number;
}


export default function Distsuperuserribut() {
    const [distrub, setDistrub] = useState<Distributor[]>([{
        "id": "1",
        "compny_name": "Distubuter 1",
        "domain": "Email.@gmail.com",
        "number": "9876543210",
        "price": 12
    },
    {
        "id": "2",
        "compny_name": "Distubuter 1",
        "domain": "Email.@gmail.com",
        "number": "9876543210",
        "price": 15
    },
    {
        "id": "3",
        "compny_name": "Distubuter 1",
        "domain": "Email.@gmail.com",
        "number": "9876543210",
        "price": 5
    },
    {
        "id": "4",
        "compny_name": "Distubuter 1",
        "domain": "Email.@gmail.com",
        "number": "9876543210",
        "price": 20
    },
    {
        "id": "5",
        "compny_name": "Distubuter 1",
        "domain": "Email.@gmail.com",
        "number": "9876543210",
        "price": 10
    },
    ]);
    const [comition, setComition] = useState(80);
    const [data, setData] = useState<Distributor>({
        id: "",
        compny_name: "",
        domain: "",
        number: "",
        price: 0,
    });
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

        if (!data.compny_name || !data.domain) {
            alert("Please fill all required fields!");
            return;
        }

        setDistrub((prev) => [...prev, data]);
        setData({
            id: "",
            compny_name: "",
            domain: "",
            number: "",
            price: 0,
        });
    };
    const handleDelete = (index: number) => {
        setDistrub((prev) => prev.filter((_, i) => i !== index));
    };
    return (
        <div className='p-5 px-3 flex flex-col gap-5 sm:px-5'>
            <div className='cardcustom px-6 py-2  rounded-lg flex justify-center'>
                <p className='text-3xl font-semibold ' >Admin</p></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5' >
                <Card className="cardcustom md:col-span-1">
                    <CardHeader>
                        <CardDescription>Total Distubuter </CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums sm:text-3xl">
                            ${distrub.reduce(
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
                            {Number(comition) - distrub.reduce(
                                (total, item) => total + Number(item.price || 0),
                                0
                            )}
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className='bg-red-400 border-black rounded-full'>
                                <IconTrendingUp />
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
                            $1,250.00
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
                <h3 className='sm:text-lg text-[18px]' >Admin</h3>

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
                                    <label className="block mb-2 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="compny_name"
                                        placeholder="Company Name"
                                        value={data.compny_name}
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

                                {/* <div>
                                    <label className="block mb-2 font-medium">Features</label>
                                    <input
                                        type="text"
                                        name="features"
                                        placeholder="Features"
                                        value={data.features}
                                        onChange={handleChange}
                                        className="w-full border border-black p-2 rounded"
                                    />
                                </div> */}
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



                    <EditDilogbox />
                </div>
            </div>

            <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
                <ScrollArea className="w-full min-w-[320px] ">
                    <table className="w-full h-full border-separate rounded-md overflow-hidden shadow-lg">
                        <thead className='border border-black border-separate'>
                            <tr className="w-full border border-black px-5 py-3 rounded-md">
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Id's</th>
                                <th className="font-light md:font-medium md:text-xl px-4 text-nowrap text-center">Name</th>
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Email</th>
                                <th className="py-5 font-light md:font-medium md:text-xl text-center">Number</th>
                                {/* <th className="py-5 font-light md:font-medium md:text-xl text-center">Features</th> */}
                                <th className=" py-5 font-light md:font-medium md:text-xl text-center">commissions </th>
                                <th className="py-5 px-10 font-light md:font-medium md:text-xl text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="h-full">

                            {/* {groupedData[pagestep]?.map((item: any, groupIndex: number) => ( */}

                            {distrub.map((item, index) =>
                                <tr key={index} className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors">
                                    <td className="p-4 text-center"> {item.id} </td>
                                    <td className=" text-center"> {item.compny_name} </td>
                                    <td className="p-4 text-center"> {item.domain} </td>
                                    <td className=" p-4 "> {item.number} </td>
                                    {/* <td className="p-4  ">
                                        {item.features?.includes("|") ? <PlansDetail item={item} /> : `${item.features}`}
                                    </td> */}
                                    <td className=" p-4 text-center"> {item.price} </td>
                                    <td>
                                        <div className="flex justify-center flex-wrap gap-3">

                                            {/* <EditDilogbox /> */}

                                            <button className="border-black rounded-md border p-1 h-fit dark:border-white cursor-pointer ">
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
            <div>

            </div>


        </div>
    )
}
