import React, { useState } from "react";
import axios from "axios";

export default function PostPage() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  return (
    <>
      <div className="text-left ml-[180px] h-full ">
        <p className="w-[180px] h-[60px] font-semibold text-2xl">Send a post</p>
        <p className="w-[750px] h-[60px] text-left text-lg text-[#5f5f5f] ">
          Share your story with the world! Send a captivating post across all
          social media platforms and let your unique voice resonate far and wide
        </p>

        <div className="w-[750px] h-[60px] mt-[25px] flex justify-between ">
          <p className="w-[80px] h-[60px] mt-[4px] text-xl">Post Text</p>
          <button
            type="button"
            class="text-white w-[150px] h-[40px] bg-gradient-to-r from-blue-700  to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-base rounded-lg  px-5 py-1.5 text-center me-2 mb-2"
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

        <p className="w-[180px] h-[60px] mt-[8px] text-xl">Add post on</p>
      </div>
    </>
  );
}
