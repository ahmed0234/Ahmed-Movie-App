


import { useRouter } from 'next/navigation'

const HeaderItem = ({Icon,  title, path}) => {
 
  const router= useRouter()

  return (
    <div  onClick={()=>router.push(path)} className='icons flex-center  flex-col group cursor-pointer 
    hover:text-white w-[3rem] xs:w-[4.5rem] sm:w-[6.6rem] md:w-[8rem] lg:w-[5rem]'>

        <div >
            <Icon  className=" text-3xl mb-1 group-hover:animate-bounce"/>
            <p className='tracking-widest hidden group-hover:block transition-all '>{title}</p>
        </div>
    </div>
  )
}

export default HeaderItem