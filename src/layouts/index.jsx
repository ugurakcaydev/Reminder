
import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

    return (
        <div className=' bg-[color:var(--bg-primary)] w-full '>
            <Navbar />
            <main className=''>
                <main className='flex-col mx-auto   w-4/5'>
                    <Outlet />
                </main>
                <Footer classNamee={' absolute bottom-0 w-full bg-[color:var(--bg-primary)] '} />
            </main>

        </div>
    )
}
