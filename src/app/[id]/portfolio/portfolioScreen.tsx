"use client";
import { usePathname } from "next/navigation";
import { api } from "~/trpc/react";
import Link from "next/link";
import Spinner from "~/app/_components/spinner";
import Modal from "~/app/_components/ui/modal";
import SendEmail from "~/app/_components/SendMail";
import ProjectsList from "~/app/_components/ProjectsList";

interface props {
  userLoggedIn:boolean
}
export const PortfolioScreen: React.FC<props> = (userLoggedIn) => {
  const pathname = usePathname();
  const id = pathname.split("/")[1];
  const { data, isLoading } = api.users.getUserById.useQuery({
    id: id ?? "",
  });

  

  if (isLoading) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-[180px] w-full">
        {userLoggedIn && <Link
          className="secondary-btn fixed right-8 top-8"
          href={`/${data?.username}/settings/profile`}
        >
          <img src="/gear.svg" alt="" className="w-6" />
        </Link>}
        <img
          src="/profile-bg.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="z-20 -mt-[100px] flex h-full w-[93%] md:w-[80%] px-2 lg:w-[60%] flex-col items-start justify-start">
        {data?.image ? (
          <img
            src={data?.image}
            alt=""
            className="ring-8 ring-white h-[160px] mb-6 w-[160px] rounded-full"
          />
        ) : (
          <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full  bg-[#CDD5E0] mb-6 ring-8 ring-white">
            <img src="/profile-1.svg" alt="user" className="w-16" />
          </div>
        )}
        <h1 className="text-2xl font-[700] text-[#364153]">
          {data?.name ?? ""}
        </h1>
        <p className="pt-2 text-[17px] font-[400] text-[#677489]">
          {data?.jobTitle ?? ""}
        </p>
        <div className='flex justify-start items-center my-6 gap-4'>
        <Modal
          variant="outline-btn "
          value={
            <div className=" flex items-center justify-center gap-2">
              <img src="/message.svg" alt="" />
              Contact
            </div>
          }
        >
          <SendEmail />
        </Modal>
          <button className="outline-btn ">
          <div className=" flex items-center justify-center gap-2">
              <img src="/download.svg" alt="" />
              Download resume
            </div>
          </button>

          <Link href=''>
          <img src="/linkedin.svg" alt="" className='w-8 hover:opacity-90'/>
          </Link>
          <Link href=''>
          <img src="/githubDark.svg" alt="" className='w-8 hover:opacity-90'/>
          </Link>
        </div>
        <p className="mb-4 mt-6 text-[17px] font-[400] text-[#677489]">Bio</p>
        <p className="mb-8 text-[17px] font-[400] text-[#364153]">
          {data?.bio ?? ""}
        </p>
        <div className="my-4 h-[1px] w-full bg-[#E3E8EF]"></div>
        <ProjectsList id={data?.id??''} edit={false} />
      </div>
      <footer className="w-[100%] relative bottom-0 left-[50%] -translate-x-[50%]">
        <div className="flex items-center justify-center gap-2 p-3">
          <p className="text-[12px] font-[400] text-[#677489]">powred by</p>
          <img src="/Logo.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};
