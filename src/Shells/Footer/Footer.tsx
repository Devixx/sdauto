import React, { FC } from 'react'
import { ContactIcon } from '../../assets'
import Divider from '../../Components/Divider/Divider'

const Footer: FC = () => (
    <div className='mx-auto max-w-3xl'>
        <div className='mx-auto max-w-xs py-5'>
            <div className='border rounded-md p-5 flex items-center justify-evenly bg-yellow'>
                <img src={ContactIcon} alt="" />
                <h1 className="font-medium text-gray-dark bold">+352 621 460 149</h1>
            </div>
        </div>
        <div className="flex items-center justify-center p-5">
            <p className='lg:text-center'>
                Copyright © sd-automobile-lu - SD Automobile SARLS
                53 Rue de NoertzangeL-3670 Kayl (Käl)
            </p>
        </div>
        <Divider />
    </div>)

export default Footer
