import React from 'react'

type Props = {}

export default function Divider({ }: Props) {
    return (
        <>
            <div className="h-2 rounded-xl border-b-2 my-3 border-solid border-blue" />
            {/* <div className="h-2 rounded-lg border-t-2 my-0 border-solid border-gray" /> */}
        </>
    )
}