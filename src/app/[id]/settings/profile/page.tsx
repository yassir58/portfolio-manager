import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import {authOptions} from '~/server/auth'
import { ProfileScreen } from "./profileScreen";


const page = async ()=>{


  const session = await getServerSession(authOptions);

  if (!session || (session && session.user == null))
    redirect ('/auth/signin');
    return (
       <ProfileScreen/>
    )
}

export default page