import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { IconTrash } from '@tabler/icons-react'
import React from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'

export default function Deletebox() {
  return (
    <div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
       {/* <RiDeleteBin6Fill  size={25} className="deletbtn" /> */}
      <IconTrash stroke={2}   className="deletbtn sm:w-7 w-6 sm:h-7 h-6"  />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}
