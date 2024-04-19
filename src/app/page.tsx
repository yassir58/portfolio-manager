import { authOptions } from "~/server/auth";
import { api } from "~/trpc/server";
import { UpdateProfile } from "./_components/updateProfile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession (authOptions)


  if (!session || (session && session.user == null))
    redirect ('/auth/signin');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
     {session.user && <UpdateProfile user={{
      name:session.user.name??'',
      id:session.user.id??'',
      email:session.user.email??'',
      image:session.user.image??''
     }}/>}
    </main>
  );
}


