import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React from 'react'
import EditDilogbox from './editDilogbox'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Deletebox from './deletebox'

export default function Tablecu() {
  return (
    <ScrollArea className="w-full min-w-[320px] ">
            <table className="w-full h-full border-separate rounded-md overflow-hidden shadow-lg">
              <thead className='border border-black border-separate'>
                <tr className="w-full border border-black px-5 py-3 rounded-md">
                  <th className="py-5 font-light md:font-medium md:text-xl text-center">Id</th>
                  <th className="font-light md:font-medium md:text-xl px-4 text-nowrap text-center">Company name</th>
                  <th className="py-5 font-light md:font-medium md:text-xl text-center">Domain</th>
                  <th className="py-5 font-light md:font-medium md:text-xl text-center">Number</th>
                  <th className="py-5 font-light md:font-medium md:text-xl text-center">Features</th>
                  <th className=" py-5 font-light md:font-medium md:text-xl text-center">Price</th>
                  <th className="py-5 px-10 font-light md:font-medium md:text-xl text-center">Actions</th> 
                </tr>
              </thead>
              <tbody className="h-full">

                {/* {groupedData[pagestep]?.map((item: any, groupIndex: number) => ( */}
                  <tr  className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors">
                    <td className="p-4 text-center"> item </td>
                    <td className=" text-center"> item </td>
                    <td className="p-4 text-center"> item </td>
                    <td className=" p-4 "> item </td>
                    <td className="p-4  ">
                      {/* {item.featcher?.includes("|") ? <PlansDetail item={item} /> : `${item.featcher}`} */}
                    </td>
                    <td className=" p-4 text-center"> item </td>
                    <td>
                      <div className="flex justify-center flex-wrap gap-3">
                        
                           <EditDilogbox />
                       
                         <button className="border-black rounded-md border p-1 h-fit dark:border-white">
                          {/* <RiDeleteBin6Fill  size={25} className="deletbtn" /> */}
                          <Deletebox/>

                        </button>
                      </div>
                    </td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
  )
}
