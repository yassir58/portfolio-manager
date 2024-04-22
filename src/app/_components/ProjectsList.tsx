import React, { useEffect } from "react";
import { api } from "~/trpc/react";
import ProjectCard from "./ui/projectCard";
import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <Skeleton className="h-[125px] w-[200px] rounded-xl" />
      <div className="flex flex-col gap-2 w-full justify-start items-start">
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

interface props {
  id: string;
  edit: boolean;
}

const ProjectsList: React.FC<props> = ({ id, edit }) => {
  const { data: projects, isLoading } = api.users.getProjects.useQuery({
    id: id ?? "",
  });

  if (isLoading) {
    return (
      <div className="flex w-[95%] flex-col gap-2 md:w-[70%]">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  return (
    <div className="mb-5 flex flex-col items-start justify-start gap-3">
      <p className="my-4  text-[18px] font-[500] text-[#677489]">Projects</p>
      {projects?.map((project, index) => (
        <ProjectCard key={index} project={project} edit={edit} />
      ))}
    </div>
  );
};

export default ProjectsList;
