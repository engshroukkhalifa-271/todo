import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col w-200 mx-auto '>
      <Navbar />
      <div className='grow'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
