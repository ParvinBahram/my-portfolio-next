"use client"
import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills=[
  {
    title: "HTML-CSS",
    icon: FaCss3,
    color:"text-blue-500"
  },
  {
    title: "Tailwindcss",
    icon:SiTailwindcss,
    color: 'text-teal-500'
  },
  {
    title: "JavaScript",
    icon:FaJs,
    color:'text-yellow-400'
  },
  {
    title: "React.js",
    icon: FaReact,
    color: 'text-blue-500'
  },
  {
    title: "wordpress",
    icon: FaWordpress,
    color: "text-gray-800"
  },

  {
    title: "Next.js",
    icon:SiNextdotjs ,
   
  },
];

function Skill() {
  return (
    <div className=' rounded max-w-6xl mt-8 mx-auto p-4' dir='rtl'>
      <h2 className="text-center mb-4 w-max border-b border-b-secondary pb-2 ">توانایی های من</h2>
      <ul className="grid grid-col-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6   p-4 list-none ">
      {skills.map((skill, index)=>{
        const Icon= skill.icon
        return(
        <div key={index}  className="rounded-full w-full border-none bg-white text-black/80 shadow p-2 flex  justify-center items-center gap-5 animation">
          <Icon size={28} className={`w-8 ${skill.color}`}/>
         <li className="">
          {skill.title}
        </li>
          </div>
        )  
      })}
      </ul>
    </div>
  )
}

export default Skill