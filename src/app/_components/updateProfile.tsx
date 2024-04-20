

'use client'
import { Input } from "~/components/ui/input"
import { api } from "~/trpc/react"
import {useRouter} from 'next/navigation'
import {useState }from 'react'
import { useToast } from "~/components/ui/use-toast"
import { UploadButton } from "~/lib/uploadthing";

import Spinner from "./spinner"

interface props {
    user:{
        id: string,
        name:string,
        image:string,
        email:string
    }
}
export const UpdateProfile:React.FC<props> = ({user})=>{

    const router = useRouter ();
    const {toast} = useToast();
    const [username, setUsername] = useState ('')
    const [url, setUrl] = useState ('')


    const removeImage = ()=> setUrl ('')
    const {data, isLoading} = api.users.getUserById.useQuery({
        id:user.id
    });
    const updateProfile = api.users.updateProfile.useMutation ({
        onSuccess:() =>{
            toast({
                title:'Profile updated successfully'
            })
            router.push (`/${username}/settings/profile`)
        },
        onError: ()=>{
            toast({
                variant:'destructive',
                title:'Failed to update profile'
            })
        }
    })
    if (data?.username){
        router.push (`/${data?.username}/settings/profile`)
    }
    if (isLoading)
    {
        return (
            <div className='flex justify-center items-center w-full h-full'>
                <Spinner/>
            </div>)
    }

    return (
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
        <div className='flex flex-col gap-6 justify-center items-start w-[70%] pt-8'>
        <h1 className="text-2xl font-[600] text-[#20293A]">Profile Info</h1>
        <div className="flex w-full h-auto border-2 border-[#E3E8EF] justify-center items-center rounded-md py-3 mb-6 flex-col">
            <div className="flex justify-center items-center rounded-md bg-[#F2F5F9] w-[90%] h-[250px]">
                <div className="flex flex-col gap-2 justify-center items-center">
                   {
                          url.length?
                          <img src={url} alt="profile" className="w-[100px] h-[100px] rounded-full"/>
                            :
                            <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full  bg-[#CDD5E0] hover:opacity-85">
                            <img src="/profile-1.svg" alt="user" className="w-8" />
                            </div>
                   }
                    <p className='text-[#677489] text-[18px] pt-6'>
                    Image must be 256 x 256px - max 2MB
                    </p>
                    <div className='flex gap-4 justify-center items-center'>
                    <UploadButton
                  content={{
                    button({ ready }) {
                      if (ready) return <div className='flex justify-center items-center gap-2'>
                          <img src="/upload.svg" alt="" className='w-6'/>
                    Upload new photo
                      </div>;

                      return "Getting ready...";
                    },
                    allowedContent({ ready, fileTypes, isUploading }) {
                      return ``;
                    },
                  }}
                  className="ut-button:mt-6 ut-button:w-[220px] ut-button:bg-white ut-button:text-[#20293A] ut-button:shadow-md"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setUrl(res[0]?.url??'');
                    console.log("Files: ", res);
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                    <button className="danger-action-btn" onClick={removeImage}>
                        <img src="/Trash.svg" alt="delete" className="w-6" />
                        Remove photo</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 justify-start w-[90%] py-6 items-start'>
                <div className="flex w-full justify-start items-start gap-6 ">
                    <div className='flex flex-col gap-2 justify-start items-start w-full'>
                        <label className="font-[500] " htmlFor="username">Username</label>
                        <Input  onChange={(e) => setUsername (e.target.value)} id='username' type="text" className='primary-input'  placeholder="Your Username" />
                    </div>
                   
                </div>
               
                    <div className="flex justify-end items-start w-full">
                        <button className="primary-btn flex justify-center items-center gap-2" onClick={()=>{
                            updateProfile.mutate ({
                                username:username,
                                image:url,
                                id:user.id
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