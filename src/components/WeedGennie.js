import React from 'react'
import { useHistory } from 'react-router'

export default function WeedGennie() {
    const history = useHistory()
    const handleWeedGennie= ()=>{
    history.push('/chat')
    }
    return (
        <div className="flex flex-col  items-center w-full h-full bg-gray-100">
          <div className="flex-1 flex flex-col justify-center items-center p-4">
            <p className="text-lg font-bold">WeedGennie <small className="text-xs">TM</small></p>
            <p>Coming soon</p>
          </div>
            <div className="bg-gray-200 w-full h-15 p-4 overflow-x-auto">
            <button onClick={handleWeedGennie} className="border-2 border-yellow-500 px-2 py-1 rounded-full text-xs">Speak to an agent</button>
            </div>
        </div>
    )
}
