import { SettingsHeader } from "./settingsHeader"

export default function Layout({ children }:{children: React.ReactNode}) {


    return (
        <div className="flex flex-col gap-2 w-full h-full">
           <SettingsHeader/>
            <main>{children}</main>
        </div>
    )
}