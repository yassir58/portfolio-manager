"use client";
import { usePathname } from "next/navigation";
import ProjectCard from "~/app/_components/ui/projectCard";
import { api } from "~/trpc/react";
import Link from "next/link";
import Spinner from "~/app/_components/spinner";
import Modal from "~/app/_components/ui/modal";
import SendEmail from "~/app/_components/SendMail";

interface props {
  user?: {
    id: string;
    name: string;
    image?: string;
    email: string;
  };
}
export const PortfolioScreen: React.FC<props> = (user) => {
  const pathname = usePathname();
  const usrname = pathname.split("/")[1];
  const { data, isLoading } = api.users.getUserByUsername.useQuery({
    username: usrname ?? "",
  });

  const { data: projects } = api.users.getProjects.useQuery();

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
        <Link
          className="secondary-btn fixed right-8 top-8"
          href={`/${data?.username}/settings/profile`}
        >
          <img src="/gear.svg" alt="" className="w-6" />
        </Link>
        <img
          src="/profile-bg.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="z-20 -mt-[100px] flex h-full w-[60%] flex-col items-start justify-start">
        <img
          src={data?.image ?? ""}
          alt="user"
          className="mb-6 w-[200px] rounded-full ring-8 ring-white"
        />
        <h1 className="text-2xl font-[700] text-[#364153]">
          {data?.name ?? ""}
        </h1>
        <p className="pt-2 text-[17px] font-[400] text-[#677489]">
          {data?.jobTitle ?? ""}
        </p>
        <Modal
          variant="outline-btn mt-4"
          value={
            <div className=" flex items-center justify-center gap-2">
              <img src="/message.svg" alt="" />
              Contact
            </div>
          }
        >
          <SendEmail />
        </Modal>

        <p className="mb-4 mt-6 text-[17px] font-[400] text-[#677489]">Bio</p>
        <p className="mb-8 text-[17px] font-[400] text-[#364153]">
          {data?.bio ?? ""}
        </p>
        <div className="my-4 h-[1px] w-full bg-[#E3E8EF]"></div>
        <div className="mb-5 flex flex-col items-start justify-start gap-3">
          <p className="my-4  text-[18px] font-[500] text-[#677489]">
            Projects
          </p>
          {projects?.map((project, index) => (
            <ProjectCard key={index} project={project} edit={false} />
          ))}
        </div>
      </div>
      <footer className="w-[100%]">
        <div className="flex items-center justify-center gap-2 p-3">
          <p className="text-[12px] font-[400] text-[#677489]">powred by</p>
          <img src="/Logo.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};
