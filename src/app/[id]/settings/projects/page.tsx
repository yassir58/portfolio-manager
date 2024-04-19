import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";
import { ProjectsScreen } from "./projectsScreen";

const page:React.FC = async () => {

const session = await getServerSession(authOptions);

  if (!session || (session && session.user == null))
    redirect ('/auth/signin');
  return (<ProjectsScreen/>);
};

export default page;
