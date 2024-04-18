

interface props {
    checked:boolean;
    value:string
}
const CheckElement:React.FC<props> = ({ checked, value}) => {    
    return (
       <div className='flex gap-2 justify-start items-center'>
       <img src={checked ? '/checked.svg' : '/unchecked.svg'} alt="" /> 
       <p className='text-[#677489] text-[12px] font-[500]'>{value}</p>
       </div>
    );
}


export default CheckElement