
interface props
{
    edit:boolean,
    project: {
        title: string,
        description: string,
        image: string
    }
}


const ProjectCard:React.FC<props> = ({project, edit}) =>{
    return (
        <div className='w-full rounded-md border-2 border-[#E3E8EF] p-4 flex justify-start items-center gap-6'>
            <img src={project.image} alt="" className="w-[217px] h-[138px] rounded-md object-cover" />
            <div className='flex flex-col items-start justify-start gap-2 w-full h-full '>
            <h1 className="font-[600] text-[#20293A] text-2xl">{project.title}</h1>
                <p className="text-[#677489] text-[17px] font-[400]">{project.description}</p>
                {edit ? (
                     <button className="secondary-btn flex items-center justify-center gap-2">
                     <img src="/Pencil.svg" alt="" className="w-6" />
                     Edit
                 </button>
                ) : (
                    <div className='flex justify-start items-center gap-3'>
                        <button className="outline-btn flex items-center justify-center gap-2">
                     Demo URL
                     <img src="/Link.svg" alt="" className="w-5" />
                 </button>
                 <button className="outline-btn flex items-center justify-center gap-2">
                     Repository URL
                     <img src="/Link.svg" alt="" className="w-5" />
                 </button>
                    </div>
                )}
               
            </div>

        </div>
    )
}

export default ProjectCard