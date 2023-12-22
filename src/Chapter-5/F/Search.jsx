import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const food = searchParams.get('food');
  const flavour = searchParams.get('flavour');

  return (
    <motion.div intial = {{opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{opacity: 0}}>
      <div className='font-bold text-3xl p-3'>Search</div>
      <h1 className='p-3'>Search Query Param</h1>
      <div className='p-3'>
        <p>Type "?food='food u like'&flavour='flavour u like'" after /search</p>
        <div>
          {food && <p>My favorite food is : {food}</p>}
          {flavour && <p>My favorite flavour is : {flavour}</p>}
        </div>
      </div>
      <button className=' text-blue-400' onClick={() => setSearchParams({ food : 'Panjabi', flavour : 'Mango'})}>Click me if u don't wanna write manually</button>
    </motion.div>

  )
}

export default Search