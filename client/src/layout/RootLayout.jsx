import React from 'react'
import Nav from '../component/Nav'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
       <p className='p-12'>&copy; 2025 Adefarati Esther OmoToyosi</p>
    </div>
  )
}
