import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (

    <footer className=' flex flex-col lg:flex-row items-center justify-between bg-[#F8F6F6] px-[100px] py-10 gap-16 pb-[100px]'>

      <div className=''>
      <div className=' text-3xl font-[500] mb-4'>
      About
      </div>
        <ul className=' list-disc'>
          <li>About Us</li>
          <li>Events</li>
          <li>News and Annoucements</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Term and Conditions</li>
        </ul>

      </div>
    
    <div>
    <div className=' flex flex-row justify-between items-center gap-2'>
        <div><Image src={'/CAMBRIDGE.png'} width={150} height={100} alt='CAMBRIDGE' className=' rounded-md'/> </div>
        <div><Image src={'/SSC.png'} width={50} height={100} alt='SSC' className=' rounded-md'/></div> 
    </div>
    <div className='  w-[200px] text-[10px] pt-5 text-left'><p>Use of this website is subject to, and implies
     acceptance of its terms of use. Regarding the
      information we collect about the visitors please read
       our privacy policy. Ahmadhiyya International School is
     a school located in Maldives. </p></div>

    </div>
    <div className=' '>
      <div className=' font-[500] text-3xl mb-4 '>
      Contact Us
      </div>
      <ul className=''>
        <li className='mb-2'>Ahmadhiyya International School <br /> Buruzu Magu <br /> K. Male 20178 <br />Republic of Maldives</li>
        <li className='mb-2'>+960 3332047, 3323688</li>
        <li>+960 3323730</li>
      </ul>
    </div>
  </footer>
  )
}
