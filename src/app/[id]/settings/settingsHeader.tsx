'use client'
import { api } from "~/trpc/react";
import { SettingsMenu } from "../../_components/ui/SettingsMenu";
import { usePathname } from "next/navigation";

export const SettingsHeader:React.FC = () =>{

    const path = usePathname();
    const username = path.split ('/')[1];

    console.log ('username: ', username)
    const {data:user} = api.users.getUserByUsername.useQuery({
        username:username??''
    })
    return (
        <nav className="flex justify-between w-full h-[70px] px-8 py-2 border-b-2 border-[#E3E8EF] items-center">
        <img src={'/Logo.svg'} className="w-[100px]" alt="logo" />
       <SettingsMenu user={{
        username:user?.username??'',
        email:user?.email??'',
        image:user?.image??'',
        id:user?.id??'',
        name:user?.name??''

       }}/>
</nav>
    )
}