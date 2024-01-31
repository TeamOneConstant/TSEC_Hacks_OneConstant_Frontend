import { X } from "lucide-react";
import React, { useState } from "react";

export default function AddSocials({ isOpen, onClose }) {
  const [profileurl, setProfileUrl] = useState("");

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="w-[780px] ml-[200px] h-[450px] border-[2px] border-[#dcdcdc] rounded-lg">
          <p className=" mt-[50px] ml-[30px] text-left text-2xl font-semibold">
            Enter URL
          </p>

          <div
            onClick={handleClose}
            className="w-[50px] h-[50px] -mt-[50px] ml-[680px] flex justify-center items-center rounded-full border-2 border-[#dcdcdc] "
          >
            <X size={30} />
          </div>

          <div className="w-[720px] h-[60px] pl-[25px] ml-[25px] mt-[50px]  border-[2px] border-solid border-[#DCDCDC] rounded-md flex">
            <input
              type="text"
              placeholder="Enter your profile url"
              className="w-full outline-none"
              value={profileurl}
              onChange={(ev) => setProfileUrl(ev.target.value)}
            />
          </div>

          <p className="w-[650px] h-[60px] mt-[15px] ml-[25px] text-left text-[#5F5F5F]">
            Kindly include your essential social links to enhance your online
            presence and connect with your audience more effectively.
          </p>

          <button className="bg-blue-700 w-[720px] h-[80px] ml-[25px] mt-[50px] rounded-md flex justify-center items-center">
            <p className=" font-semibold text-white text-center text-2xl">
              Done
            </p>
          </button>
        </div>
      )}
    </>
  );
}
