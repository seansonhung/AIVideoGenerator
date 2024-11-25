"use client"
import React from 'react'
import { CircleUser, PanelsTopLeft, FileVideo, SquarePlus, FolderClock, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const menuOptions = [
    {
      id:1,
      name: 'Dashboard',
      path: '/dashboard',
      icon: PanelsTopLeft
    },
    {
      id:2,
      name: 'Create New',
      path: '/dashboard/create-new',
      icon: FileVideo
    },
    {
      id:3,
      name: 'Account',
      path: '/account',
      icon: CircleUser
    },
    {
      id:4,
      name: 'Upgrade',
      path: '/upgrade',
      icon: SquarePlus
    },
    {
      id:5,
      name: 'History',
      path: '/history',
      icon: FolderClock
    }
  ]

  const currentPath = usePathname();

  return (
    <div className='w-64 h-screen shadow-md p-5'>
      <div className = 'gap-3'>
        {menuOptions.map((item, index) => (
          <Link href={item.path} key={index}>
            <div className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${currentPath === item.path&&'bg-primary text-white'}`}>
              <item.icon />
              <h2> {item.name}
                </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

