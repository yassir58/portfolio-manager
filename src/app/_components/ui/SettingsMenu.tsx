"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { usePathname } from "next/navigation";

export function SettingsMenu({
  user,
}: {
  user: {
    username: string;
    email: string;
    image: string;
    id: string;
    name: string;
  };
}) {

  const path = usePathname();
  const username = path.split("/")[1];
  return (
    <Popover>
      <PopoverTrigger asChild>
        {user?.image ? (
          <img
            className="h-[50px] w-[50px] hover:ring-2 rounded-full"
            src={user?.image}
            alt=""
          />
        ) : (
          <button className="flex h-[50px] w-[50px] hover:ring-2 items-center justify-center rounded-full  bg-[#CDD5E0] hover:opacity-85">
            <img src={"/profile.svg"} alt="user" className="w-6" />
          </button>
        )}
      </PopoverTrigger>
      <PopoverContent className="mr-4 w-80">
        <div className="grid w-full gap-2">
          <div className="flex  w-full items-center justify-start gap-4 py-4">
            {user?.image ? (
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={user?.image}
                alt=""
              />
            ) : (
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full  bg-[#CDD5E0]">
                <img src={"/profile.svg"} alt="user" className="w-6" />
              </div>
            )}

            <div className="flex flex-col items-start justify-center">
              <h4 className="font-medium leading-none text-[#20293A]">
                {user.username ?? ""}
              </h4>
              <p className="text-muted-foreground text-sm text-[#677489]">
                {user.email ?? ""}
              </p>
            </div>
          </div>
          <div className="-ml-4 h-[1px] w-80 bg-[#E3E8EF]"></div>
          <div className="grid gap-2">
            <p className="text-muted-foreground text-sm text-[#677489]">
              Account
            </p>
            <Link
              href={`/${username}/settings/profile`}
              className="flex items-center justify-start gap-2 font-[500] text-[#20293A]"
            >
              <img src="/profile-1.svg" alt="" />
              Profile Settings
            </Link>
            <Link
              href={`/${username}/settings/projects`}
              className="flex items-center justify-start gap-2 font-[500] text-[#20293A]"
            >
              <img src="/multiple image-1.svg" alt="" />
              Projects Settings
            </Link>
            <Link
              href={`/${username}/portfolio`}
              className="flex items-center justify-start gap-2 font-[500] text-[#20293A]"
            >
              <img src="/airplay.svg" alt="" />
              My Portfolio
            </Link>
            <div className="my-4 -ml-4 h-[1px] w-80 bg-[#E3E8EF]"></div>
            <Link
              href={"/"}
              className="flex items-center justify-start gap-2 font-[500] text-[#DD524C]"
              onClick={() => signOut()}
            >
              <img src="/Logout.svg" alt="" />
              Logout
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
