
import { useState } from "react"
import { UploadButton } from "~/lib/uploadthing"
import { api } from "~/trpc/react"

interface props {
    project :{
        id:string,
        name: string,
        image: string,
        description: string,
        demoUrl: string,
        repoUrl: string
    }
}

export const EditProject:React.FC<props> = ({project}) =>{

    const [title, setTitle] = useState (project.name)
    const [url, setUrl] = useState (project.image)
    const [description, setDescription] = useState (project.description)
    const [demoUrl, setDemoUrl] = useState (project.demoUrl)
    const [repoUrl, setRepoUrl] = useState (project.repoUrl)
    const utils = api.useUtils ()
    const updateProject = api.users.upateProject.useMutation ({
        onSuccess: () => {
            console.log('Project updated')
            void utils.users.getProjects.invalidate ();
        }
    })
    return (
        <div className='w-full h-full flex flex-col justify-start items-start p-6 gap-6'>

            <h1 className="font-[600] text-[#20293A] text-2xl">Edit Project</h1>

            <div className='flex justify-start items-center gap-4'>
            <img src={url} alt="" className="w-[217px] h-[138px] rounded-md object-cover" />
            <div className='flex flex-col items-start justify-start gap-2 w-full h-full'>
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
                  <button className="danger-action-btn">
                    <img src="/Trash.svg" alt="delete" className="w-6" />
                    Remove photo
                  </button>
            </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-4 w-full h-full'>
                <div className='flex flex-col items-start justify-start gap-2 w-full h-full'>
                    <label className="font-[500] " htmlFor="name">
                        Project Name
                    </label>
                    <input onChange={(e)=> setTitle (e.target.value)} type="text" className="primary-input" placeholder="Enter your project name" />
                </div>
                <div className='flex flex-col items-start justify-start gap-2 w-full h-full'>
                    <label className="font-[500] " htmlFor="description">
                        Description
                    </label>
                    <textarea onChange={(e)=> setDescription (e.target.value)} className="primary-input" placeholder="Enter your project description" />
                </div>
                <div className='flex flex-col items-start justify-start gap-2 w-full h-full'>
                    <label className="font-[500] " htmlFor="demo">
                        Demo URL
                    </label>
                    <input onChange={(e)=> setDemoUrl (e.target.value)} type="text" className="primary-input" placeholder="Enter your demo url" />
                </div>
                <div className='flex flex-col items-start justify-start gap-2 w-full h-full'>
                    <label className="font-[500] " htmlFor="repo">
                        Repository URL
                    </label>
                    <input onChange={(e)=> setRepoUrl(e.target.value)} type="text" className="primary-input" placeholder="Enter your repository url" />
                </div>
                <div className='flex justify-start items-center gap-4'>
                   
                    <button className="primary-btn flex items-center justify-center gap-2" onClick={()=>{
                        updateProject.mutate ({
                            id: project.id,
                            name: title,
                            image: url,
                            description: description,
                            demoUrl: demoUrl,
                            repoUrl: repoUrl
                        })
                    }}>
                        Save
                        <img src="/Save.svg" alt="" className="w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}