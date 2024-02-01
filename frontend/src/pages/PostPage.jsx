import React, { useState } from "react";
import axios from "axios";
import { AddPostOn } from "../components/AddPostOn";

export default function PostPage() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const socials = [
    {
      SocialName: "Instagram",
      SocialImage: "/Instagram.png",
    },
    {
      SocialName: "Facebook",
      SocialImage: "/Facebook.png",
    },
    // {
    //   SocialName: "Youtube",
    //   SocialImage: "/Youtube.png",
    // },
  ];

  function handleChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(selectedFile);
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  return (
    <>
      <div className="text-left ml-[180px] h-full overflow-y-hidden">
        <p className="w-[180px] h-[60px] font-semibold text-2xl">Send a post</p>
        <p className="w-[750px] h-[60px] text-left text-lg text-[#5f5f5f] ">
          Share your story with the world! Send a captivating post across all
          social media platforms and let your unique voice resonate far and wide
        </p>

        <div className="w-[750px] h-[60px] mt-[25px] flex justify-between ">
          <p className="w-[80px] h-[60px] mt-[4px] text-xl">Post Text</p>
          <button
            type="button"
            className="text-white w-[150px] h-[40px] bg-gradient-to-r from-blue-700  to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-base rounded-lg  px-5 py-1.5 text-center me-2 mb-2"
          >
            Generative AI
          </button>
        </div>

        <textarea className="w-[750px] h-[200px] border-2 border-[#dcdcdc] rounded-md" />

        <p className="w-[180px] h-[60px] mt-[8px] text-xl">
          Add Image or Video
        </p>

        <div className="w-[750px] h-[200px] -mt-[5px] border-2 border-[#dcdcdc] rounded-md">
          <label>
            <input className="hidden" type="file" onChange={handleChange} />
            <img
              src="/document.png"
              alt="upload"
              className="w-[60px] h-[60px] ml-[350px] mt-[50px]"
            />
          </label>
          <p className="w-full h-[35px] font-semibold text-lg text-center">
            Select File or drag and drop file
          </p>
        </div>

        <div className="w-full h-[14px] " />
        {file && (
          <div className="w-[150px] h-[100px] border-2 border-[#5f5f5f] outline-none rounded-md ">
            <img
              src="/folder.png"
              alt="preview"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <p className="w-[180px] h-[60px] mt-[8px] text-xl">Add post on</p>

        <div className="w-[750px] h-[200px] justify-center items-center border-2 border-[#DCDCDC] rounded-md ">
          {socials.map((social, index) => {
            return (
              <AddPostOn
                key={index}
                SocialName={social.SocialName}
                SocialImage={social.SocialImage}
              />
            );
          })}
        </div>

        <button className="bg-blue-700 w-[720px] h-[60px] ml-[20px] mt-[40px] rounded-md flex justify-center items-center">
          <p className=" text-white text-center text-2xl">Post Now</p>
        </button>
      </div>
    </>
  );
}
