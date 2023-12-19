import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

const DashoboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>DashoboardLayout</h1>
            <div><NewTodoForm/></div>
            <div>{children}</div>
        </div>
    )
}

export default DashoboardLayout