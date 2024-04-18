import ui from '../../styles/ui.module.css'


export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className='flex justify-center gap-2 items-center w-[98%] h-[100vh]  mx-auto'>
        <div className={`w-[460px] rounded-md h-[98%]  p-4 ${ui.authBg} sm:block hidden`}>
            <div className='flex flex-col gap-6 pt-8'>
            <h1 className='text-xl  text-white font-[700]'>Easy Portfolio for Developer</h1>
            <p className='text-white font-[400] text-[15px]'>As a web developer, having a portfolio is essential for showcasing your technical skills and attracting potential clients. A portfolio is a museum of your work, with past tech stacks, case studies, and your work history.</p>
            </div>
        </div>
        <div className='w-full h-[98%] flex justify-center items-center'>

        {children}
        </div>
    </div>
    );
  }

