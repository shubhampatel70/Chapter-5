import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Chapter-5/A/Home'
import About from './Chapter-5/A/About'
import Contact from './Chapter-5/A/Contact'
import Profile from './Chapter-5/B/Profile'
import UserDetails from './Chapter-5/B/Components/UserDetails'
import Posts from './Chapter-5/C/Posts'
import Friends from './Chapter-5/C/Friends'
import NoMatch from './Chapter-5/D/NoMatch'
import Search from './Chapter-5/F/Search'
import { AnimatePresence } from 'framer-motion'
import GoBack from './Chapter-5/H/GoBack'

function App() {

  const location = useLocation();

  return (
    <>
    <nav className='flex justify-evenly items-center text-indigo-600 font-bold bg-gray-400 h-16'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
      <NavLink to='profile'>Profile</NavLink>
      <NavLink to='search'>Search</NavLink>
      <NavLink to='back'>Go-Back</NavLink>
    </nav>

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Profile' element={<Profile />} >
          <Route path=':UserName' element={<UserDetails />} />
          <Route path='posts' element={<Posts />} />
          <Route path='friends' element={<Friends />} />
        </Route>
        <Route path='search' element={<Search />} />
        <Route path='back' element={<GoBack />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AnimatePresence>
    
    </>
  )
}

export default App
