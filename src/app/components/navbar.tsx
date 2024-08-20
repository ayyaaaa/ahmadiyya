import React, { Fragment } from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <Fragment>
      <header className='h-[20px] w-full bg-teal-400 sticky top-0'>
      </header>
      <nav className=' bg-white flex flex-col lg:flex-row   justify-between items-center py-6 px-[160px] lg:sticky top-[20px]'>
        <div className=''>LOGO</div>
        <div className=' '>
          <ul className=' flex md:flex-row  flex-col items-center gap-5 bg-white'>
            <li>
              <a className='text-teal-400 hover:font-bold' href="#">Home</a>
            </li>
            <li>
              <a className='text-teal-400 hover:font-bold' href="#">About</a>
            </li>
            <li>
              <a className='text-teal-400 hover:font-bold' href="#">Enrollment</a>
            </li>
            <li>
              <a className='text-teal-400 hover:font-bold' href="#">Courses</a>
            </li>
            <li>
              <a className='text-teal-400 hover:font-bold' href="#">Downloads</a>
            </li>
          </ul>

        </div>
        <div className='flex gap-2'>
          <button className='text-white bg-teal-400 rounded-xl px-5 py-2 hover:bg-teal-600'><Image src={'/search-icon.svg'} width={20} height={100} alt='CAMBRIDGE' className=' rounded-md '/></button>
          <button className=' text-white bg-teal-400 rounded-xl px-5 py-2 hover:bg-teal-600'>Sign In</button>  
        </div>
      </nav>
    </Fragment>
    
  )
}

export default Navbar