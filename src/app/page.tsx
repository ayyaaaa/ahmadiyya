import Image from 'next/image'
import React, { Fragment } from 'react'

export default function Slidebar() {
  return (
<div className='bg-red-200'>
  <div className=' text-2xl font-medium mx-[160px]'>Latest News</div>
  <div className='grid grid-cols-5 gap-11 container mx-auto'>
  <div className=' flex flex-col  bg-[#F5F5F5]  items-center text-[15px] rounded-lg gap-[2px] mt-10 p-6 text-center aspect-[283/311] justify-center'>
    <div><Image src={'new1.svg'} width={65} height={65} alt='new1' className=''/></div>
      <div className='pt-2'>Primary Teacher Job</div>
      <div>MALDIVIANS ONLY</div>
      <div className='text-[10px]'>click the link for more info:</div>
      <div className='p-2 text-teal-500'>Read more</div>
  </div>
  <div className=' flex flex-col  bg-[#F5F5F5]  items-center text-[15px] rounded-lg gap-[2px] mt-10 p-6 text-center'>
    <div><Image src={'new1.svg'} width={65} height={65} alt='new1' className=''/></div>
      <div className='pt-2'>Primary Teacher Job</div>
      <div>MALDIVIANS ONLY</div>
      <div className='text-[10px]'>click the link for more info:</div>
      <div className='p-2 text-teal-500'>Read more</div>
  </div>
  <div className=' flex flex-col  bg-[#F5F5F5]  items-center text-[15px] rounded-lg gap-[2px] mt-10 p-6 text-center'>
    <div><Image src={'new1.svg'} width={65} height={65} alt='new1' className=''/></div>
      <div className='pt-2'>Primary Teacher Job</div>
      <div>MALDIVIANS ONLY</div>
      <div className='text-[10px]'>click the link for more info:</div>
      <div className='p-2 text-teal-500'>Read more</div>
  </div>
  <div className=' flex flex-col  bg-[#F5F5F5]  items-center text-[15px] rounded-lg gap-[2px] mt-10 p-6 text-center'>
    <div><Image src={'new1.svg'} width={65} height={65} alt='new1' className=''/></div>
      <div className='pt-2'>Primary Teacher Job</div>
      <div>MALDIVIANS ONLY</div>
      <div className='text-[10px]'>click the link for more info:</div>
      <div className='p-2 text-teal-500'>Read more</div>
  </div>
  <div className=' flex flex-col  bg-[#F5F5F5]  items-center text-[15px] rounded-lg gap-[2px] mt-10 p-6 text-center'>
    <div><Image src={'new1.svg'} width={65} height={65} alt='new1' className=''/></div>
      <div className='pt-2'>Primary Teacher Job</div>
      <div>MALDIVIANS ONLY</div>
      <div className='text-[10px]'>click the link for more info:</div>
      <div className='p-2 text-teal-500'>Read more</div>
  </div>
  </div>
  <div className='bg-red-300 mt-10 mx-[160px]'>
    <div id='#corebeliefs'>
      <ul className=' flex flex-row gap-20 items-center content-center ml-[220px]'>
        <li><Image src={'/vision.svg'} width={200} height={200} alt='vision'/></li>
        <li><Image src={'/mission.svg'} width={200} height={200} alt='mission'/></li>
        <li><Image src={'/values.svg'} width={200} height={200} alt='values'/></li>
      </ul>
      <div className='font-bold text-2xl mt-10 bg-red-800 text-center'>Motto</div>
      <div className='mt-5 text-xl mx-[400px] rounded-lg bg-slate-400 items-center text-center p-5'>Appreciate,  Innovate, Stimulate</div>
      <div className='font-bold text-2xl mt-10 bg-red-800 text-center'>Vision</div>
      <div className='mt-5 text-xl mx-[280px] rounded-lg bg-slate-400 items-center text-center p-5'>Be the leading school where student creativitiy and discipline drive academic excellence.</div>
      <div className='font-bold text-2xl mt-10 bg-red-800 text-center'>Mission</div>
      <div className='mt-5 text-xl mx-[280px] rounded-lg bg-slate-400 items-center text-center p-5'>Provide students with knowledge and skills to become productive and responsible citizens who are guided by Islam and values of the society in an ever changing world.</div>
      <div className='font-bold text-2xl mt-10 bg-red-800 text-center'>Values</div>
      <div className=' font-medium text-2xl mt-5 bg-red-800 text-center'>To Develop</div>
      <div className=' bg-gray-700 mx-[200px] rounded-lg'>
        <ul className=' list-disc text-center leading-loose'>
          <li>The whole child – intellectually, socially, emotionally and physically</li>
          <li>The basic skills of literacy, communication and numeracy</li>
          <li>Creative and physical skills</li>
          <li>Confidence, self – discipline and high self – esteem</li>
          <li>Knowledge, experience and imaginative understanding</li>
          <li>Motivation based on natural curiosity</li>
          <li>Character through discipline</li>
        </ul>
        
      </div>
      <div className=' font-medium text-2xl mt-5 bg-red-800 text-center'>To Provide</div>
      <div className='mx-[220px] bg-slate-400 rounded-lg'>
        <ul className='list-disc text-center leading-loose'>
          <li>An environment  that is stimulating, caring and supportive, where children feel valued and respected</li>
          <li>A well structured balanced curriculum that will enable each child to develop his/her full potential according to individual needs</li>
          <li>Equal opportunities and equal access to the curriculum irrespective of gender, cultural background or creed</li>
        </ul>
      </div>
      <div className=' font-medium text-2xl mt-5 bg-red-800 text-center'>To Promote</div>
      <div className='bg-red-900 mx-[200px] rounded-lg'>
        <ul className='text-center list-disc leading-loose'>
          <li>Academic excellence</li>
          <li>Emotional well-being</li>
          <li>Partnership between parents and teachers in order to achieve the best for each child</li>
          <li>Positive relationship with a multinational environment and with the local community</li>
        </ul>
      </div>

    </div>
    
  </div>
</div>


  )
}