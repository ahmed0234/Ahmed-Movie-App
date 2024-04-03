import { SignIn } from "@clerk/nextjs"



const page = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl text-rose-500">You have to first signIn if dont have account please considering signUp !</h1>
      <br />
      <br />
    <div className=" flex items-center justify-center ">
      
        <SignIn  afterSignInUrl={`/`} afterSignUpUrl={`/`}/>
    </div>
    </div>
  )
}

export default page
