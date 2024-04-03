import { notFound } from "next/navigation"

const page = () => {
    const notallow=true

    if(notallow){
        return notFound()
    }

  return (
    <div>page</div>
  )
}

export default page