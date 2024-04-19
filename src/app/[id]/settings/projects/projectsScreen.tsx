
'use client'
import React, { useState } from "react";
import ProjectCard from "~/app/_components/ui/projectCard";
import {Input} from "~/components/ui/input";

export const ProjectsScreen = () =>{
const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <div className="flex w-[70%] flex-col items-start justify-center gap-6 pt-8">
          <h1 className="text-2xl font-[600] text-[#20293A]">
            Projects settings
          </h1>
          <button className="large-action-btn flex items-center justify-start gap-2" onClick={()=> setIsVisible (true)}>
            <img src="/Plus.svg" alt="" />
            Add Project
          </button>
          <div className={`flex h-auto w-full flex-col items-center justify-center rounded-md border-2 border-[#E3E8EF] py-3 ${isVisible ? 'block' : 'hidden'}`}>
            <div className="flex h-[250px] w-[90%] items-center justify-center rounded-md bg-[#F2F5F9]">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full  bg-[#CDD5E0] hover:opacity-85">
                  <img src="/profile-1.svg" alt="user" className="w-8" />
                </div>
                <p className="pt-6 text-[18px] text-[#677489]">
                  Image must be 256 x 256px - max 2MB
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="primary-action-btn">
                    <img src="/upload.svg" alt="" className="w-6" />
                    Upload new photo
                  </button>
                  <button className="danger-action-btn">
                    <img src="/Trash.svg" alt="delete" className="w-6" />
                    Remove photo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-[90%] flex-col items-start justify-start gap-4 py-6">
              <div className="flex w-full items-start justify-start gap-6">
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                  <label className="font-[500] " htmlFor="demoUrl">
                    Project name
                  </label>
                  <Input
                    className='primary-input'
                    id="projectName"
                    type="text"
                    
                    placeholder="Enter Your Project name"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                  <label className="font-[500] " htmlFor="demo">
                    Demo URL
                  </label>
                  <Input
                    className='primary-input'
                    type="text"
                    
                    placeholder="Enter demo url"
                    id="demo"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 w-[50%]">
                <label className="font-[500] " htmlFor="repo">
                  Repository URL
                </label>
                <Input
                  className='primary-input'
                  id="repo"
                  type="text"
                  
                  placeholder="Enter repository url"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="font-[500] " htmlFor="bio">
                  Description
                </label>
                <textarea
                  name="bio"
                  className="primary-input h-[160px] w-full"
                  placeholder="Enter your project description"
                />
              </div>
              <div className="flex w-full items-start justify-end gap-3">
                <button className="secondary-btn flex items-center justify-center gap-2" onClick={()=> setIsVisible (false)}>
                  <img src="/Trash-1.svg" alt="" />
                  Remove
                </button>
                <button className="primary-btn flex items-center justify-center gap-2">
                  <img src="/Plus-1.svg" alt="" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[70%] flex-col items-start justify-center gap-6 py-8">
          <ProjectCard edit={true} project={{title: 'Music Player', description: 'I was Junior Front-End Developers,who are responsible for implementing visual and interactive elements that users see and interact with in a web application. ', image: '/Sketch - jpeg.png'}} />
        </div>
      </div>
    )
}