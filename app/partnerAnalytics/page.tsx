"use client"
import disdata from '../disdata.json'
import { Badge } from '@/components/ui/badge'
import { IconTrendingUp } from '@tabler/icons-react';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { ChartBarDefault } from '@/component/graph/ChartBarDefault';



export default function PartnerAnalytics() {
  const [distrub, setDistrub] = useState(disdata)

  const husd = (qw: any) => (console.log("first"));

  const handleDelete = (index: number) => {
    setDistrub((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <>Partner Analytics

      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5' >
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
              ₹ fdsa
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className='bg-red-400 border-black rounded-full'>
                %
                <Dialog>
                  <DialogTrigger asChild>
                    <div>
                      ds
                    </div>
                  </DialogTrigger>

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
      <div className='w-[500px] bg-'>
        <ChartBarDefault />
      </div>




      {/* <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
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


                            {distrub.map((item, index) =>
                                <tr key={index} className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors">
                                    <td className="p-4 text-center"> {index +1} </td>
                                    <td className=" text-center"> {item.compny_name} </td>
                                    <td className="p-4 text-center"> {item.domain} </td>
                                    <td className=" p-4 text-center"> {item.number} </td>
                                    <td className="p-4 text-center ">
                                        {item.features}
                                    </td>
                                    <td className=" p-4 text-center"> {item.price} </td>
                                    <td>
                                        <div className="flex justify-center flex-wrap gap-3">

                                          

                                            <button className="border-black rounded-md border p-1 h-fit dark:border-white">
                                               
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
            </div>     */}

    </>



  )
}
