import React from 'react'

const DashoboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>DashoboardLayout</h1>
            <div>{children}</div>
        </div>
    )
}

export default DashoboardLayout