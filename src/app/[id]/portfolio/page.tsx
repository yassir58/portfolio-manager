import { getServerSession } from "next-auth";
import { PortfolioScreen } from "./portfolioScreen";
import { authOptions } from "~/server/auth";

const page = async () => {

 
  return (
    <PortfolioScreen />
  );
};

export default page;
