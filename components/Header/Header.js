"use client"
import Image from 'next/image'
import HeaderItem from '../HeaderItem/HeaderItem'
import { IoHomeOutline } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineVerified } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Userbutton from '../Userbutton/Userbutton';




    

const Header =  () => {




  const router = useRouter()


  function handleSubmit(e) {
    e.preventDefault()
    setInputMovie("")
    router.push(`/searchedmovie/${inputMovie}}`)
  }
  function handlechange(e) {
    setInputMovie(e.target.value)
  }
  const [inputMovie, setInputMovie]=useState('')
 





  return (
    <header 
    className='Header w-full flex items-center justify-center gap-2 
    flex-col lg:flex-row lg:justify-between lg:items-center   py-4 '>

            <div className="right-header flex items-center justify-center ">
                    <HeaderItem  path="/" title="Home" Icon={IoHomeOutline}/>
                    <HeaderItem  path="/fetchTrending" title="Trending" Icon={RxLightningBolt}/>
                    <HeaderItem title="Verified" Icon={MdOutlineVerified}/>
                    <HeaderItem title="Collection" Icon={BsBoxes}/>
                    <HeaderItem title="Account" Icon={CiUser}/>
            </div>

            <div className='mr-auto'>
              <form onSubmit={handleSubmit}>
                <div className='flex '>
                <h2>Search Movies: </h2>
                <input value={inputMovie} onChange={handlechange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
              </form>
            </div>
           
           


            {/* <Image  
            className='object-contain text-black '
            src="https://links.papareact.com/ua6" alt='Picture of Hulu Logo' width={160} height={160}/> */}
            <h1>Website By Ahmed Hassan</h1>

      
              <Userbutton />
        

    

            
           
    </header>
  )
}

export default Header