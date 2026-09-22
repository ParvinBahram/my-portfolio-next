import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

async function SampleProjects() {
    const res = await fetch("http://localhost:5000/projects");
    const data = await res.json();
    return (
        <div className="rounded max-w-6xl  mx-auto mt-8 p-4 " dir='rtl'>
            <h3 className=" mb-6 pb-2 border-b border-b-secondary w-max" >نمونه پروژه های انجام شده</h3>
        <ul className='flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between md:gap-6'>
      { data
      .filter((item)=> item.badge ==="sample" )
      .map((item)=>(
        <li className='animation flex h-full w-full rounded ' key={item.id} >
          <Link className=" flex flex-col w-full h-full justify-between shadow-md shadow-secondary/30 p-2 rounded-lg " href={`/projects/${item.title}`} >
          <Image className='rounded mx-auto h-50 object-contain' width={300}  height={200} src={item.image} alt={item.title}/>
          <p className=" text-center my-2">{item.title}</p>
          </Link>
</li>
))}
    </ul>
    <button className='mt-8 rounded bg-secondary p-1 flex justify-center w-2/3 mx-auto cursor-pointer'>
        <Link href="/projects" >همه نمونه کارها</Link>
    </button>
    </div>
  )
}

export default SampleProjects