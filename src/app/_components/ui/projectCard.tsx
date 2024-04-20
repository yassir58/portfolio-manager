import { EditProject } from "../EditProject"
import Modal from "./modal"
import Link from 'next/link'
interface props
{
    edit:boolean,
    project: {
        id:string
        name: string,
        description: string,
        image: string,
        demoUrl:string
        repoUrl:string
    }
}


const ProjectCard:React.FC<props> = ({project, edit}) =>{
    return (
        <div className='w-full rounded-md border-2 border-[#E3E8EF] p-4 flex justify-start items-center gap-6'>
            <img src={project.image} alt="" className="w-[217px] h-[138px] rounded-md object-cover" />
            <div className='flex flex-col items-start justify-start gap-2 w-full h-full '>
            <h1 className="font-[600] text-[#20293A] text-2xl">{project.name}</h1>
                <p className="text-[#677489] text-[17px] font-[400]">{project.description}</p>
                {edit ? (

                    <Modal variant={'secondary-btn'} value={<div className='flex items-center justify-center gap-2'>
                        <img src="/Pencil.svg" alt="" className="w-6" />
                        Edit
                    </div>}>
                        <EditProject project={project}/>
                    </Modal>
                ) : (
                    <div className='flex justify-start items-center gap-3'>
                        
                        <Link href={project.demoUrl} className="outline-btn flex items-center justify-center gap-2">
                     Demo URL
                     <img src="/Link.svg" alt="" className="w-5" />
                 </Link>
                 <Link href={project.repoUrl} className="outline-btn flex items-center justify-center gap-2">
                     Repository URL
                     <img src="/Link.svg" alt="" className="w-5" />
                 </Link>
                    </div>
                )}
               
            </div>

        </div>
    )
}

export default ProjectCard