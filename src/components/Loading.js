import React from 'react'

export default function Loading() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center  gap-5">
         
  <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>

            <p>Loading...</p>
        </div>
    )
}
