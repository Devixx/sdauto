import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import { classNames } from '../../Utils/styles';
import { navigation } from './NavBarService';

type MobileNavBarProps = {
    open: boolean
}

type MobileNavBarButtonProps = {
    open: boolean
}

export function MobileNavBarButton({ open }: MobileNavBarButtonProps) {
    return (
        <div className="-mr-2 flex md:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                <span className="sr-only">Open main menu</span>
                {
                    open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )
                }
            </Disclosure.Button>
        </div>
    )
}

export function MobileNavBar({ open }: MobileNavBarProps) {
    return (
        <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </div >
    )
}