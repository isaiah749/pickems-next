import React from 'react'
import Dropdown from './Dropdown'

function Header() {
    return (
        <div className='bg-gray-800 p-5 flex items-center justify-between'>
            {/* Left */}
            <div>
                <h2 className='font-bold text-3xl text-white'>Pick-em's</h2>
            </div>

            {/* Right */}
            <button className='bg-green-600 rounded-md w-32 text-xl text-center font-bold p-2 hover:text-white'>Submit</button>
            
        </div>
    )
}

export default Header
