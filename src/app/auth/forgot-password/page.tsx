import Link from 'next/link'
import {Input} from '~/components/ui/input'
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-6">
        <img className="w-[100px]" src={"/Logo.svg"} alt="" />
        <div className="flex flex-col items-center justify-center gap-3 ">
          <h1 className="text-4xl  font-[700] text-[#20293A]">
            Forgot password
          </h1>
          <p className="text-[17px] text-[#677489] text-[500]">
            Enter the email address associated with your account
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Input
            type="text"
            className="primary-input"
            placeholder="Enter email"
          />
          <button className="large-primary-btn">Send reset link</button>
          <div className="flex w-[400px] items-center justify-start">
            <p className="text-[#677489]">
              Remember your password ?{" "}
              <Link
                href="/auth/signin"
                className="font-[700] text-[#6466E9] hover:opacity-85"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default page;