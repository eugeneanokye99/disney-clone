/* eslint-disable react/jsx-key */
import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiTv, HiPlayCircle } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from '../components/HeaderItem'
import avatar from '../assets/images/avatar.png'

function Header() {
    const [toggle,setToggle]= useState(false)
    const menu = [
        {
            id: "1",
            name: "HOME",
            icon: HiHome,
        },
        {
            id: "2",
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            id: "3",
            name: "WATCHLIST",
            icon: HiPlus,
        },
        {
            id: "4",
            name: "ORIGINALS",
            icon: HiStar,
        },
        {
            id: "5",
            name: "MOVIES",
            icon: HiTv,
        },
        {
            id: "6",
            name: "SERIES",
            icon: HiPlayCircle,
        },
    ]

    return (
        <div className='flex items-center justify-between p-5'>

            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="" />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                       {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div>: null}
                    </div>
                </div>

            </div>

            <img src={avatar} className='w-[40px] rounded-full' />

        </div>
    )
}

export default Header