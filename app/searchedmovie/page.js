
import { notFound } from "next/navigation"
const page = () => {

    const notallow=true

    if(notallow){
        return notFound()
    }
  return (
    <div>
      
    </div>
  )
}

export default page
