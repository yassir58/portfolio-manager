import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";
import { ProjectsScreen } from "./projectsScreen";

const page:React.FC = async () => {

  const session = await getServerSession(authOptions);

  if (!session || (session && session.user == null))
    redirect ('/auth/signin');
  return (<ProjectsScreen user={{
    name: session.user?.name ?? '',
    image: session.user?.image ?? '',
    email: session.user?.email ?? '',
    id: session.user?.id ?? ''
  }}/>);
};

export default page;
