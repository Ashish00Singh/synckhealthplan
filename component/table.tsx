import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import Deletebox from "./deletebox";
import { ScrollBar } from "@/components/ui/scroll-area";

type Props = {
  data: any[] | Record<string, any>;
  handleDelete:any;
};

export default function Table({ data, handleDelete }: Props) {
  // Normalize to always be an array
  const rows = Array.isArray(data) ? data : Object.values(data);

  // Extract column names dynamically from the first item
  const columns =
    rows.length > 0 ? Object.keys(rows[0]) : [];
    console.log(rows )

  return (
    <div className="cardcustom px-6 py-2 rounded-lg flex justify-between items-center">
      <ScrollArea className="w-full min-w-[320px]">
        <table className="w-full h-full border-separate rounded-md overflow-hidden shadow-lg">
          <thead className="border border-black border-separate">
            <tr className="w-full border border-black px-5 py-3 rounded-md">
              <th className="py-5 font-light md:font-medium md:text-xl text-center">
                #
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-5 font-light md:font-medium md:text-xl text-center"
                >
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </th>
              ))}
              <th className="py-5 px-10 font-light md:font-medium md:text-xl text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="h-full">
            {rows.map((item: any, index: number) => (
              <tr
                key={index}
                className="border-b border-[#ffffff81] hover:bg-gray-300 bgtable transition-colors"
              >
                {/* Row index */}
                <td className="p-4 text-center">{index + 1}</td>

                {/* Dynamic fields */}
                {columns.map((col) => (
                  <td key={col} className="p-4 text-center">
                    {typeof item[col] === "object"
                      ? JSON.stringify(item[col]) // handle nested objects
                      : item[col]}
                  </td>
                ))}

                {/* Actions */}
                <td>
                  <div className="flex justify-center flex-wrap gap-3">
                    <button className="border-black rounded-md border p-1 h-fit dark:border-white cursor-pointer">
                      <Deletebox handleDelete={handleDelete(index)} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
