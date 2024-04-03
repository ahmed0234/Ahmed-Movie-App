import requests from "../../utils/requests"
import Link from "next/link"
import './Nav.css'
const Nav = () => {
  return (
    <nav className="relative">
        <div className='Nav flex px-4 sm:px-20 text-xl whitespace-nowrap space-x-6 
        sm:space-x-16 sm:text-2xl overflow-x-scroll '>
            {Object.entries(requests).map(([key, {title, url}])=>
            <>
                <Link href={`/fetch${title}`}><h2 key={title} className="last:pr-18 cursor-pointer transition-all duration-100 
                transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                </Link>
            </>
            )}
            
            <div  className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </div>
    </nav>
  )
}

export default Nav