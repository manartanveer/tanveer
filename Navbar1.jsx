import React from 'react'
import {Wallet , User} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='W-full h-20 bg-yellow-700 flex items-center gap-4 '>
        <div className='logo'>
            <h1>Tickets</h1>
        </div>
        <div className='list-item'>
            <ul className='flex items-center gap-4'>
                <li>Game</li>
                <li>Exchange</li>
                <li>Money</li>
                <li>recieve</li>
                <li>send</li>
            </ul>
        </div>
        <div className='flex items-center gap-4 '>
            <p className='flex '><Wallet/>$90.00</p>
            <button className='bg-red-500 text-white' ><User/>SignUp</button>
        </div>
      
    </div>
  )
}

export default Navbar
