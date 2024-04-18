
"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import {Input} from "~/components/ui/input";



const page  = ()=>{
    return (<div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex flex-col gap-6 justify-center items-center'>
        <img className="w-[100px]" src={'/Logo.svg'} alt="" />
            <div className='flex flex-col gap-3 justify-center items-center '>
        <h1 className='text-4xl  text-[#20293A] font-[700]'>Login to account</h1>
                <p className="text-[17px] text-[#677489] text-[500]">Enter the fields below to get started</p>
            </div>
           <div className="flex flex-col gap-4 justify-center items-center">
           <button className="large-secondary-btn"
            onClick={() => signIn("github", { callbackUrl: "/settings/profile" })}
           >
                <span className="flex justify-center items-center gap-2">
                    <img src={'/github.svg'} alt="" />
                    <span>Sign in with Github</span>
                </span>
            </button>
            <div className='flex gap-2 w-[400px] justify-center items-center'>
                <div className='w-[50%] h-[1px] bg-[#E5E5E5]'></div>
                <div className='text-[#677489] text-[15px]'>or</div>
                <div className='w-[50%] h-[1px] bg-[#E5E5E5]'></div>
            </div>
            <Input type="text" className="primary-input" placeholder='Enter email' />
            <div className="flex w-[400px]  flex-col gap-1 justify-center items-end">
            <Input type="text" className="primary-input" placeholder='Enter a password' />
            <Link href='/auth/forgotPassword' className='text-[#6466E9] font-[700] hover:opacity-85'>Forgot password</Link>
            </div>
            <button className="large-primary-btn">Sign in</button>
            <div className='flex justify-start items-center w-[400px]'>
            <p className="text-[#677489]">Not a member ? <Link href='/auth/signup' className='text-[#6466E9] font-[700] hover:opacity-85'>Create account</Link> </p>

            </div>
           </div>
        </div>
    </div>)
}

export default page;