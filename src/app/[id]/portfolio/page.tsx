import { getServerSession } from "next-auth";
import { PortfolioScreen } from "./portfolioScreen";
import { authOptions } from "~/server/auth";

const page = async () => {

  const session = await getServerSession(authOptions);
 
  return (
    <PortfolioScreen userLoggedIn={session?.user?true:false}/>
  );
};

export default page;
