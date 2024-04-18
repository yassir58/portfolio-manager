import CheckElement from '~/app/_components/ui/checkElement'
import {Input} from '~/components/ui/input'

const page = () => {
    return (<div className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <img className="w-[100px]" src={'/Logo.svg'} alt="" />
            <div className='flex flex-col gap-3 justify-center items-center '>
                <h1 className='text-4xl  text-[#20293A] font-[700]'>Reset password</h1>
                <p className="text-[17px] text-[#677489] text-[500]">{`Enter your new password and you're all set`}</p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <Input type="text" className="primary-input" placeholder='Enter new password' />
                <Input type="text" className="primary-input" placeholder='Confirm new password' />
                <div className="flex justify-start items-start gap-4 flex-wrap w-[400px]">
                <CheckElement checked={true} value='one lower case character' />
                <CheckElement checked={false} value='one upper case character' />
                <CheckElement checked={false} value='one number' />
                <CheckElement checked={false} value='one special character' />
                <CheckElement checked={false} value='8 characters minimum' />
                </div>
                <button className="large-primary-btn">Reset password</button>
                
            </div>
        </div>
        </div>)
}

export default page;