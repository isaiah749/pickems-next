import React from 'react'
import { Menu } from '@headlessui/react'



function Dropdown() {
    return (
        <div>
            <Menu>
                <Menu.Button className='text-xl text-white font-bold pb-3'>Select Name</Menu.Button>
                <Menu.Items className='bg-white rounded-md space-y-5 w-40 text-left p-2'>
                    <Menu.Item className='border border-t-0 border-l-0 border-r-0 border-b-4 border-black text-xl'>
                        <div className='pb-2'>Tanner</div>
                    </Menu.Item>
                    <Menu.Item className='border border-t-0 border-l-0 border-r-0 border-b-4 border-black text-xl'>
                        <div className='pb-2'>Gavin</div>
                    </Menu.Item>
                    <Menu.Item className='border border-t-0 border-l-0 border-r-0 border-b-4 border-black text-xl'>
                        <div className='pb-2'>Ej</div>
                    </Menu.Item>
                    <Menu.Item className='border border-t-0 border-l-0 border-r-0 border-b-4 border-black text-xl'>
                        <div className='pb-2'>Mason</div>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Dropdown
