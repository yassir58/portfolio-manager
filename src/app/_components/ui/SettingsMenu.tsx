import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"

export function SettingsMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
                    <button className='w-[50px] h-[50px] flex justify-center items-center rounded-full  bg-[#CDD5E0] hover:opacity-85'>
                        <img src="/profile.svg" alt="user"  className='w-6'/>
                    </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-4">
        <div className="grid gap-2 w-full">
          <div className="w-full  py-4 justify-start items-center flex gap-4">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full  bg-[#CDD5E0]">

          <img src="/profile.svg" alt="user"  className='w-6'/>
            </div>
            <div className="flex flex-col justify-center items-start">
            <h4 className="font-medium leading-none text-[#20293A]">Gigachad</h4>
            <p className="text-sm text-muted-foreground text-[#677489]">
              gigachad@gmail.com
            </p>

            </div>
          </div>
            <div className='h-[1px] w-80 -ml-4 bg-[#E3E8EF]'></div>
          <div className="grid gap-2">
          <p className="text-sm text-muted-foreground text-[#677489]">
              Account
            </p>
            <Link href={'/settings/profile'} className="font-[500] flex justify-start items-center gap-2 text-[#20293A]">
            <img src="/profile-1.svg" alt="" />
              Profile Settings
            </Link>
            <Link href={'/settings/projects'} className="font-[500] flex justify-start items-center gap-2 text-[#20293A]">
                <img src="/multiple image-1.svg" alt="" />
              Projects Settings
            </Link>
            <Link href={'/'} className="font-[500] flex justify-start items-center gap-2 text-[#20293A]">
                <img src="/airplay.svg" alt="" />
              My Portfolio
            </Link>
            <div className='h-[1px] w-80 -ml-4 my-4 bg-[#E3E8EF]'></div>
            <Link href={'/'} className="font-[500] flex justify-start items-center gap-2 text-[#DD524C]">
                <img src="/Logout.svg" alt="" />
              Logout
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
