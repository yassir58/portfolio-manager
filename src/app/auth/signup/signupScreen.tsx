import Link from "next/link";
import CheckElement from "~/app/_components/ui/checkElement";
import { Input } from "~/components/ui/input";

export const SignupScreen:React.FC = ()=>{
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <img className="w-[100px]" src={'/Logo.svg'} alt="" />
            <div className='flex flex-col gap-3 justify-center items-center '>
                <h1 className='text-4xl  text-[#20293A] font-[700]'>Create an account</h1>
                <p className="text-[17px] text-[#677489] text-[500]">Enter the fields below to get started</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <button className="large-secondary-btn">
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
                    <Link href='/auth/forgot-password' className='text-[#6466E9] font-[700] hover:opacity-85'>Forgot password</Link>
                </div>

                <div className="flex justify-start items-start gap-4 flex-wrap w-[400px]">
                <CheckElement checked={true} value='one lower case character' />
                <CheckElement checked={false} value='one upper case character' />
                <CheckElement checked={false} value='one number' />
                <CheckElement checked={false} value='one special character' />
                <CheckElement checked={false} value='8 characters minimum' />
                </div>
                <button className="large-primary-btn">Create account</button>
                <div className='flex justify-start items-center w-[400px]'>
                    <p className="text-[#677489]">Already a member ? <Link href='/auth/signin' className='text-[#6466E9] font-[700] hover:opacity-85'>Login</Link> </p>

                </div>
            </div>
        </div>
    </div>
    )
}