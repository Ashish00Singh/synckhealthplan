import React from 'react'
import Topcard from '@/component/coprate/topcard';
import AddDilogbox from '@/component/addDilogbox';
import EditDilogbox from '@/component/editDilogbox';
import { IconCircleDashedPlus } from '@tabler/icons-react';
import Tablecu from '@/component/tablecu';

export default function Coprate() {
  return (
    <div className='p-5 px-3 flex flex-col gap-5 sm:px-5'>
      <Topcard />

      <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
        <h3 className='sm:text-lg text-[18px]' >Comprate OnBoarding</h3>

        <div className='flex gap-3'>
          <AddDilogbox />
          {/* <EditDilogbox /> */}
        </div>
      </div>

      <div className='cardcustom px-6 py-2 rounded-lg flex justify-between items-center'>
        <Tablecu />
      </div>

    </div>
  )
}
