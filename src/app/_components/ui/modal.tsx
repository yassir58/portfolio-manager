import { useState } from "react"
interface props {
    children:React.ReactNode
    variant:string
    value:React.ReactElement

}
const Modal:React.FC<props> = ({children, value, variant})=>{

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
       <>
        <button className={`${variant}`} onClick={onOpen}>
            {value}
        </button>
        <div className={`z-20 bg-black/80 w-[100vw] ${isOpen ? 'flex' : 'hidden'} h-[100vh] fixed top-0 left-0`} onClick={onClose}></div>
        <div className={`w-[500px] min-h-[400px] h-auto max-h-[450px] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-y-auto bg-white rounded-md shodow-md z-30 ${isOpen ? 'flex' : 'hidden'}`}>
        <button className='border-none bg-transparent outline-none absolute top-6 right-6' onClick={onClose}>
            <img src="/cross.svg" alt="" className='hover:scale-110' />
        </button>
        {children}
        </div>
       </>
    )
}

export default Modal