'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import CheckElement from "~/app/_components/ui/checkElement";
import { Input } from "~/components/ui/input";
import axios from 'axios';
import {useState} from 'react';
import z from 'zod'
import {signIn} from 'next-auth/react'
export const requestSchema = z.object({
    email: z.string().email (),
    password:z.string().min(6)
})

export const SignupScreen:React.FC = ()=>{
    
    const router = useRouter(); 
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const lowercase =  /[a-z]/.test(password);
    const uppercase =  /[A-Z]/.test(password);
    const onenumber = /[0-9]/.test(password);
    const onespecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const signUp = async () => {
        try {
          const req = requestSchema.parse({
            email: email,
            password: password,
          });
          const res = await axios.post("/api/user", JSON.stringify(req));
          if (res.status === 201) {
            // toast.success(`User signup successfully`);
            router.push("/auth/signin");
          }
        } catch (error: unknown) {
            alert ('failed to signup')
        //   toast.error (`Error : signup faild`)
        }
      };
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <img className="w-[100px]" src={'/Logo.svg'} alt="" />
            <div className='flex flex-col gap-3 justify-center items-center '>
                <h1 className='text-4xl  text-[#20293A] font-[700]'>Create an account</h1>
                <p className="text-[17px] text-[#677489] text-[500]">Enter the fields below to get started</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <button className="large-secondary-btn" 
            onClick={() => signIn("github", { callbackUrl: "/" })}
                
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
                <Input type="email" className="primary-input" placeholder='Enter email'onChange={(e)=> setEmail (e.target.value)} required/>
                <div className="flex w-[400px]  flex-col gap-1 justify-center items-end">
                    <Input type="password" className="primary-input" placeholder='Enter a password' onChange={(e)=> setPassword (e.target.value)} required/>
                    <Link href='/auth/forgot-password' className='text-[#6466E9] font-[700] hover:opacity-85'>Forgot password</Link>
                </div>

                <div className="flex justify-start items-start gap-4 flex-wrap w-[400px]">
                <CheckElement checked={lowercase} value='one lower case character' />
                <CheckElement checked={uppercase} value='one upper case character' />
                <CheckElement checked={onenumber} value='one number' />
                <CheckElement checked={onespecial} value='one special character' />
                <CheckElement checked={password.length>=8} value='8 characters minimum' />
                </div>
                <button className="large-primary-btn" onClick={async ()=>{
                    await signUp();
                }}>Create account</button>
                <div className='flex justify-start items-center w-[400px]'>
                    <p className="text-[#677489]">Already a member ? <Link href='/auth/signin' className='text-[#6466E9] font-[700] hover:opacity-85'>Login</Link> </p>

                </div>
            </div>
        </div>
    </div>
    )
}