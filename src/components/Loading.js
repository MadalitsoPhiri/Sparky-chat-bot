import React from 'react'

export default function Loading({msg}) {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center  gap-5">
         
  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>

            <p>{msg}</p>
        </div>
    )
}
