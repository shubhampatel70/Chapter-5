import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const Profile = () => {
  return (
    <motion.div intial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0}}>
        <div className='font-bold text-3xl p-3'>Profile</div>
        <div className='p-3'>
            <h1 className='font-bold text-xl text-sky-600'>Task-b</h1>
            For Task-b UseParam() type Dynamically /Username in upper path.
        </div>
        <h1 className='font-bold p-3 text-xl text-sky-600'>Task-c</h1>
        <div className='flex flex-row text-sky-800 justify-around pl-3'>
            <NavLink to='posts' >post</NavLink>
            <NavLink to='friends'>friends</NavLink>
        </div>
        <Outlet />
    </motion.div>
  )
}

export default Profile