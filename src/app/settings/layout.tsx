import { SettingsMenu } from "../_components/ui/SettingsMenu";

export default function Layout({ children }:{children: React.ReactNode}) {


    return (
        <div className="flex flex-col gap-2 w-full h-full">
            <nav className="flex justify-between w-full h-[70px] px-8 py-2 border-b-2 border-[#E3E8EF] items-center">
                    <img src="/Logo.svg" className="w-[100px]" alt="logo" />
                   <SettingsMenu/>
            </nav>
            <main>{children}</main>
        </div>
    )
}