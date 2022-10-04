import React, { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import { Logo, NavBar } from '../index'
import { MobileNavBar, MobileNavBarButton } from '../NavBar/MobileNavBar'

const Header: FC = () => {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <Logo />
                                        <NavBar />
                                    </div>
                                    <MobileNavBarButton open={open} />
                                </div>
                            </div>

                            <MobileNavBar open={open} />
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

export default Header
