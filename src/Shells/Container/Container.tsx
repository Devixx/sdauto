import React from 'react'

type Props = {
    children: any
}

export default function Container({ children }: Props) {
    return (
        <main>
            <div className="mx-auto max-w-7xl py-6">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    {/* <div className="h-96 rounded-lg border-2 border-solid border-gray" > */}
                    {children}
                    {/* </div> */}
                </div>
                {/* /End replace */}
            </div>
        </main>
    )
}