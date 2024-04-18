import ProjectCard from "~/app/_components/ui/projectCard";
const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="h-[180px] w-full">
        <img
          src="/profile-bg.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>

      <div className="z-20 -mt-[100px] flex h-full w-[60%] flex-col items-start justify-start">
        <img
          src="/yelatman.jpg"
          alt="user"
          className="mb-6 w-[200px] rounded-full ring-8 ring-white"
        />
        <h1 className="text-2xl font-[700] text-[#364153]">Gigachad</h1>
        <p className="text-[17px] font-[400] text-[#677489]">
          Front-end developer
        </p>
        <button className="outline-btn mt-6 flex items-center justify-center gap-2">
          <img src="/message.svg" alt="" />
          Contact
        </button>
        <p className="mb-4 mt-6 text-[17px] font-[400] text-[#677489]">Bio</p>
        <p className="mb-8 text-[17px] font-[400] text-[#364153]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si
          coactum est, non satis. Quae cum essent dicta, finem fecimus et
          ambulandi et disputandi. Duo Reges: constructio interrete. Quamquam
          haec quidem praeposita recte et reiecta dicere licebit. Quae cum
          essent dicta, finem fecimus et ambulandi et disputandi. Duo Reges:
          constructio interrete. Quamquam haec quidem praeposita recte et
          reiecta dicere licebit.
        </p>
        <div className="my-4 h-[1px] w-full bg-[#E3E8EF]"></div>
        <div className="flex flex-col items-start justify-start gap-3 mb-5">
          <p className="my-4  text-[18px] font-[500] text-[#677489]">
            Projects
          </p>
            <ProjectCard
            edit={false}
              project={{
                title: "Music Player",
                description:
                  "I was Junior Front-End Developers,who are responsible for implementing visual and interactive elements that users see and interact with in a web application. ",
                image: "/Sketch - jpeg.png",
              }}
            />
        </div>
      </div>
      <footer className='w-[100%]'>
        <div className='flex justify-center items-center gap-2 p-3'>
            <p className="text-[12px] font-[400] text-[#677489]">powred by</p>
            <img src="/Logo.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default page;
