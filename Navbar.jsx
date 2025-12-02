import React from 'react'
import {ChevronDown, Wallet,User} from 'lucide-react'


const Navebar = () => {
  return (
    <div className='w-full h-20 bg-blue-700 shadow-sm flex justify-between items-center px-10'>
        <div className='logo'>
            <h1 className=''>Air-Drop</h1>
        </div>
        <div className='list-item'>
            <ul className='flex gap-4 items-center'>
                <li className='flex items-center'>Game<ChevronDown/></li>
                <li>Currency</li>
                <li>Exchange</li>
                <li className='flex items-center'>Recieve<ChevronDown/></li>
                <li>Send</li>
            </ul>
        </div>
        <div className='flex items-center'>
            <p>$90.00</p>
            <Wallet/>
            <button className='flex gap-4'><User/>Sign</button>
        </div>
    </div>
 
 
  )
}

export default Navebar
