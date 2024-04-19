
import { getServerSession } from "next-auth";
import { SignupScreen } from "./signupScreen";
import { redirect } from "next/navigation";
import {authOptions} from '~/server/auth'
const page = async () => {
    
    const session = await getServerSession (authOptions);


    console.log (session)
    if (session && session.user)
        {redirect ('/')}
    return (
       <SignupScreen/> 
    )
}


export default page;