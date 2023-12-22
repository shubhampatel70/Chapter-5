import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div className='font-bold text-3xl p-3' intial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0}} >Contact</motion.div>
  )
}

export default Contact