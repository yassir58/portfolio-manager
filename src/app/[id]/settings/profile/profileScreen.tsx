"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import { UploadButton } from "~/lib/uploadthing";
export const ProfileScreen = () => {
  const path = usePathname();
  const userName = path.split("/")[1];
  const { data: user, isLoading } = api.users.getUserByUsername.useQuery({
    username: userName ?? "",
  });
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [jobtitle, setJob] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const utils = api.useUtils();
  const [url, setUrl] = useState ('')
  const updateProfileSettings = api.users.updateProfileSettings.useMutation({
    onSuccess: () => {
      console.log("Profile updated successfully");
      void utils.users.getUserByUsername.invalidate();
    },
  });

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setJob(user?.jobTitle ?? "");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setBio(user?.bio ?? "");
    setUrl(user?.image??'')
  }, [user]);

  const removeImg = () => {
    setUrl(user?.image??'')
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <div className="flex w-[70%] flex-col items-start justify-center gap-6 pt-8">
        <h1 className="text-2xl font-[600] text-[#20293A]">Profile settings</h1>
        <div className="mb-6 flex h-auto w-full flex-col items-center justify-center rounded-md border-2 border-[#E3E8EF] py-3">
          <div className="flex h-[250px] w-[90%] items-center justify-center rounded-md bg-[#F2F5F9]">
            <div className="flex flex-col items-center justify-center gap-2">
             {
                url.length > 0 ? <img src={url} alt="profile" className="w-[80px] h-[80px] rounded-full"/> : ( <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full  bg-[#CDD5E0] hover:opacity-85">
                <img src="/profile-1.svg" alt="user" className="w-8" />
              </div>)
             }
              <p className="pt-6 text-[18px] text-[#677489]">
                Image must be 256 x 256px - max 2MB
              </p>
              <div className="flex items-center justify-center gap-4">
                <UploadButton
                  content={{
                    button({ ready }) {
                      if (ready) return <div className='flex justify-center items-center gap-2'>
                          <img src="/upload.svg" alt="" className='w-6'/>
                    Upload new photo
                      </div>;

                      return "Getting ready...";
                    },
                    allowedContent({ ready, fileTypes, isUploading }) {
                      return ``;
                    },
                  }}
                  className="ut-button:mt-6 ut-button:w-[220px] ut-button:bg-white ut-button:text-[#20293A] ut-button:shadow-md"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setUrl(res[0]?.url??'');
                    console.log("Files: ", res);
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
               
                <button className="danger-action-btn" onClick={()=> removeImg()} >
                  <img src="/Trash.svg" alt="delete" className="w-6" />
                  Remove photo
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[90%] flex-col items-start justify-start gap-4 py-6">
            <div className="flex w-full items-start justify-start gap-6 ">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="font-[500] " htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="primary-input"
                  placeholder="Your Email"
                  value={user?.email ?? ""}
                  disabled={true}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="font-[500] " htmlFor="job">
                  Job title
                </label>
                <Input
                  onChange={(e) => setJob(e.target.value)}
                  type="text"
                  className="primary-input"
                  value={jobtitle}
                  placeholder="Enter your job title"
                  id="job"
                />
              </div>
            </div>
            <div className="flex w-full items-start justify-start gap-6 ">
              <div className="flex w-[50%] flex-col items-start justify-start gap-2">
                <label className="font-[500] " htmlFor="name">
                  Full Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  className="primary-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex w-[50%] flex-col items-start justify-start gap-2">
                <label className="font-[500] " htmlFor="username">
                  Username
                </label>
                <Input
                  disabled={true}
                  value={user?.username ?? ""}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  type="text"
                  className="primary-input"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <label className="font-[500] " htmlFor="bio">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                name="bio"
                className="primary-input h-[160px] w-full"
                placeholder="Enter your bio"
              />
            </div>
            <div className="flex w-full items-start justify-end">
              <button
                className="primary-btn flex items-center justify-center gap-2"
                disabled={isLoading}
                onClick={() => {
                  updateProfileSettings.mutate({
                    id: user?.id ?? "",
                    username: username ?? "",
                    name: name,
                    jobTitle: jobtitle,
                    bio: bio,
                    image: url ?? "",
                  });
                }}
              >
                <img src="/unchecked.svg" alt="" />
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
