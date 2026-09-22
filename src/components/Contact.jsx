import React from 'react'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'

function Contact() {
  return (

        <div className="flex flex-col mx-auto gap-2 " dir='rtl'>
        <a href="https://instagram.com/parvin.bahram.sh" target="_blank" className="flex items-center py-4">
        <FaInstagram className='text-rose-500 mx-4'/>
        <span className='hover:text-secondary/70 animation'>parvin.bahram.sh </span>
        </a>
        <a href="https://github.com/parvinbahram" target="_blank" className="flex  items-center py-4">
         <FaGithub className='mx-4' />
         <span className='hover:text-secondary/70 animation'>parvinbahram</span>
        </a>
        <a href="https://t.me/parvin_bahram" target="_blank" className="flex  items-center py-4 ">
        <FaTelegram className='text-blue-600 mx-4' />
        <span className="hover:text-secondary/70 animation">parvin_bahram </span>
        </a>
        <a href="tel:09332306006" target="_blank" className="flex  items-center py-4">
        <IoCall className=' mx-4' />
        <span className="hover:text-secondary/70 animation"> 09331234567 </span>
        </a>
        <a href="mailto:test@gmailcom" target="_blank" className="flex  items-center py-4">
        <MdMail className=' mx-4' />
        <span className="hover:text-secondary/70 animation">test@gmailcom</span>
        </a>
      </div>  )
}

export default Contact