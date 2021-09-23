import React from 'react'
import { motion } from 'framer-motion'

export default function InfoCard({children}) {
    return (
        <motion.div className="border-[#9f8bb8] border-t-2 rounded-md shadow-lg bg-white w-full  mb-4" initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween",duration:0.4}}>
            <div className="border border-t-none rounded-sm h-full">
              {children}
            </div>
          </motion.div>
    )
}
