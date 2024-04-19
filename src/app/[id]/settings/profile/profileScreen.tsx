'use client'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Input} from '~/components/ui/input' ;
import { api } from '~/trpc/react';

export const ProfileScreen = () =>{

    const path = usePathname ()
    const userName = path.split ('/')[1]
    const {data:user, isLoading} = api.users.getUserByUsername.useQuery({
        username:userName??''
    })
    const router = useRouter ();
    const [username, setUsername] = useState( '');
    const [name, setName] = useState('');
    const [jobtitle, setJob] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const utils = api.useUtils();

    const updateProfileSettings = api.users.updateProfileSettings.useMutation({

        onSuccess:()=>{
            console.log('Profile updated successfully');
            void utils.users.getUserByUsername.invalidate();
        }
    });

    useEffect(()=>{

        setUsername (user?.username??'');
        setName (user?.name??'');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setJob (user?.jobTitle??'');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setBio (user?.bio??'');


    },[user])
    
    

    return (
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
        <div className='flex flex-col gap-6 justify-center items-start w-[70%] pt-8'>
        <h1 className="text-2xl font-[600] text-[#20293A]">Profile settings</h1>
        <div className="flex w-full h-auto border-2 border-[#E3E8EF] justify-center items-center rounded-md py-3 mb-6 flex-col">
            <div className="flex justify-center items-center rounded-md bg-[#F2F5F9] w-[90%] h-[250px]">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full  bg-[#CDD5E0] hover:opacity-85">
                    <img src="/profile-1.svg" alt="user" className="w-8" />
                    </div>
                    <p className='text-[#677489] text-[18px] pt-6'>
                    Image must be 256 x 256px - max 2MB
                    </p>
                    <div className='flex gap-4 justify-center items-center'>
                    <button className="primary-action-btn">
                        <img src="/upload.svg" alt="" className='w-6'/>
                    Upload new photo
                    </button>
                    <button className="danger-action-btn">
                        <img src="/Trash.svg" alt="delete" className="w-6" />
                        Remove photo</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 justify-start w-[90%] py-6 items-start'>
                <div className="flex w-full justify-start items-start gap-6 ">
                    <div className='flex flex-col gap-2 justify-start items-start w-full'>
                        <label className="font-[500] " htmlFor="email">Email</label>
                        <Input id='email' type="email" className='primary-input'  placeholder="Your Email" value={user?.email??''} disabled={true}/>
                    </div>
                    <div className='flex flex-col gap-2 justify-start items-start w-full'>
                        <label className="font-[500] " htmlFor="job">Job title</label>
                        <Input onChange={(e) => setJob (e.target.value)} type="text" className='primary-input'  value={jobtitle} placeholder="Enter your job title" id='job'/>
                    </div>
                </div>
                <div className='flex w-full justify-start items-start gap-6 '>

                <div className='flex flex-col gap-2 justify-start items-start w-[50%]'>
                        <label className="font-[500] " htmlFor="name">Full Name</label>
                        <Input value={name} onChange={(e) => setName (e.target.value)} id='name' type="text" className='primary-input'  placeholder="Enter your full name" />
                    </div>
                    <div className='flex flex-col gap-2 justify-start items-start w-[50%]'>
                        <label className="font-[500] " htmlFor="username">Username</label>
                        <Input disabled={true} value={user?.username??''} onChange={(e)=> setUsername (e.target.value)} id='username' type="text" className='primary-input'  placeholder="Enter your username" />
                    </div>
                </div>
                    <div className='flex flex-col gap-2 w-full justify-start items-start'>
                        <label className="font-[500] " htmlFor="bio">Bio</label>
                        <textarea value={bio} onChange={(e) => setBio (e.target.value)} name='bio'  className='primary-input h-[160px] w-full'  placeholder="Enter your bio" />
                    </div>
                    <div className="flex justify-end items-start w-full">
                        <button className="primary-btn flex justify-center items-center gap-2" disabled={isLoading} onClick={()=>{
                            updateProfileSettings.mutate({
                                id:user?.id??'',
                                username:username??'',
                                name:name,
                                jobTitle:jobtitle,
                                bio:bio,
                                image:user?.image??'',
                            })
                        }}>
                            <img src="/unchecked.svg" alt="" />
                            save</button>
                    </div>
            </div>
        </div>
        </div>
    </div>
    )
}