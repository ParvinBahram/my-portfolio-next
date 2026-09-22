import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
function Socialmedia() {
  return (
   
        <div className="flex justify-center mx-auto gap-4">
        <a href="https://instagram.com/parvin.bahram.sh" target="_blank" className="flex items-center ">
        <FaInstagram className='text-rose-500 text-2xl'/>
        </a>
        <a href="https://github.com/parvinbahram" target="_blank" className="flex  items-center ">
         <FaGithub className='text-2xl' />
        </a>
        <a href="https://t.me/parvin_bahram" target="_blank" className="flex  items-center ">
        <FaTelegram className='text-blue-600 text-2xl' />
        </a>
      </div>
   
  )
}

export default Socialmedia