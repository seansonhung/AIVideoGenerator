import React from 'react'
import Header from './_components/header'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}

