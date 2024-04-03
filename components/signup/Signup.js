"use client"

import { useState } from "react"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useRouter } from "next/navigation";


const Signup = () => {
    

    
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const router= useRouter()
   
    function register(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
           
                const user = userCredential.user;
                console.log(user)
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    function handleemail(e) {
        setUserEmail(e.target.value)
    }
    function handlepassword(e) {
        setUserPassword(e.target.value)
    }

  return (

       <div className=" h-[75vh] flex items-center justify-center ">
            <div className="max-w-md w-full p-6 bg-black text-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
            {/* Your form content goes here */}
            <form onSubmit={register}>
                <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={userEmail}
                    onChange={handleemail}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={handlepassword}
                />
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={register}
                >
                    Sign Up
                </button>
            
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
            </div>
            </div> 

  )
}

export default Signup
