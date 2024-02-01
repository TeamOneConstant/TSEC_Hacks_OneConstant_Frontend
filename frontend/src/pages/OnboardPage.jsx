import SocialCard from "../components/SocialCard";
import { Facebook, Instagram, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { Plus } from "lucide-react";
import AddSocials from "../components/AddSocials";
import axios from "axios";
import json from "superagent/lib/node/parsers/json";

{
  /* <SocialCard SocialIcon={Instagram} SocialName="Instagram" SocialImage={InstagramImg} onClick={() => {}}/> */
}

export default function OnBoardPage() {

  fetch('https://tsec-hacks.vercel.app/api/accounts/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "connect.siddhiraj@gmail.com",
      "fname": "Siddhiraj R Kolwankar"
    }
    )
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);

      localStorage.setItem("authToken", data['authToken']['access'])
      localStorage.setItem("userData", JSON.stringify(data['data']))
      localStorage.setItem("socialConnects", JSON.stringify({ 'facebook': false, 'instagram': false, 'youtube': false}))
      localStorage.setItem("socialUsername", JSON.stringify({ 'facebook': "", 'instagram': "", 'youtube': ""}))


      

    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const onClick = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const socials = [
    {
      SocialIcon: Instagram,
      SocialName: "Instagram",
      SocialImage: "/Instagram.png",
      // onClick: onClick,
    },
    {
      SocialIcon: Facebook,
      SocialName: "Facebook",
      SocialImage: "/Facebook.png",
      // onClick: onClick
    },
    {
      SocialIcon: Youtube,
      SocialName: "Youtube",
      SocialImage: "/Youtube.png",
      // onClick: onClick,
    },
  ];

  //border-2 border-[#dcdcdc]
  return (
    <div className=" w-[900px] h-full ml-[200px] pl-[25px]  rounded-md">
      <p className="w-[500px] h-[50px] text-black font-semibold text-left text-2xl">
        Let's connect your social profile's
      </p>
      <p className="w-[500px] h-[30px] text-[#5f5f5f] text-base text-left">
        Add as many social media profile as you want
      </p>

      <div className=" space-y-[6px]">
        {socials.map((social, index) => {
          return (
            <SocialCard
              key={index}
              SocialIcon={social.SocialIcon}
              SocialName={social.SocialName}
              SocialImage={social.SocialImage}
            />
          );
        })}
      </div>

      {/* <div className="w-[580px] h-[110px] border-2 border-[#dcdcdc] rounded-md mt-[50px]  p-[10px]">
        <div className="flex justify-between ">
          <div className="gap-x-[4px] flex">
            <Instagram color="#5F5F5F" size={30} />
            <h2 className="ml-[10px]">Instagram</h2>
          </div>

          <div
            className="
          w-[50px]
          h-[50px]
          -mt-[2px]
          border-[#DCDCDC]
          rounded-full
          p-[5px]
          border-2
          flex
         justify-center
          items-center
        "
          >
            <img src="/Instagram.png" width={30} height={30} />
          </div>
        </div>

        <div>
          <button
            onClick={openModal}
            className="flex gap-x-[4px] justify-center items-center"
          >
            <Plus size={30} color="#007DFC" />
            <h1 className=" text-[#007DFC]  ml-[10px]">Add Link</h1>
          </button>
          {isModalOpen && (
            <AddSocials isOpen={isModalOpen} onClose={closeModal} />
          )}
        </div>
      </div>

      <div className="w-[580px] h-[110px] border-2 border-[#dcdcdc] rounded-md mt-[50px]  p-[10px]">
        <div className="flex justify-between ">
          <div className="gap-x-[4px] flex">
            <Facebook color="#5F5F5F" size={30} />
            <h2 className="ml-[10px]">Facebook</h2>
          </div>

          <div
            className="
          w-[50px]
          h-[50px]
          -mt-[2px]
          border-[#DCDCDC]
          rounded-full
          p-[5px]
          border-2
          flex
         justify-center
          items-center
        "
          >
            <img src="/Facebook.png" width={30} height={30} />
          </div>
        </div>

        <div>
          <button className="flex gap-x-[4px] justify-center items-center">
            <Plus size={30} color="#007DFC" />
            <h1 className=" text-[#007DFC]  ml-[10px]">Add Link</h1>
            {/* <AddSocials isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* </button>
          {isModalOpen && (
            <AddSocials isOpen={isModalOpen} onClose={closeModal} />
          )}
        </div>
      </div> */}

      <button className="w-[580px] h-[50px] mt-[20px] flex justify-center items-center gap-x-1 rounded-3xl border-2  border-[#007DFC] bg-blue-200 ">
        <Plus size={30} color="#007DFC" />
        <h1 className=" text-[#007DFC]  ml-[10px]">Add More Links</h1>
      </button>
    </div>
  );
}
