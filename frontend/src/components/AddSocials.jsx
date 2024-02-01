import { X } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router";

export default function AddSocials({ isOpen, onClose, calledBy }) {
  // const [profileurl, setProfileUrl] = useState("");
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myObj, setMyObj] = useState("");

  const cb = calledBy.toLowerCase();

  const handleClose = () => {
    onClose();
  };

  async function addSocialAccount(ev) {
    ev.preventDefault();

    var token = localStorage.getItem('authToken')

    fetch('https://tsec-hacks.vercel.app/api/integrations/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        "platform": cb
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
        var sc = JSON.parse(localStorage.getItem('socialConnects'))
        var su = JSON.parse(localStorage.getItem('socialUsername'))
        sc[cb] = true;
        su[cb] = username;
        localStorage.setItem('socialConnects', JSON.stringify(sc))
        localStorage.setItem('socialUsername', JSON.stringify(su))
        handleClose();

      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });

    
  }
  //w-[780px] ml-[100px] -mt-[180px] fixed  h-[450px] border-[2px] border-[#dcdcdc] rounded-lg

  return (
    <>
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[780px] h-[460px] border-2 border-[#dcdcdc] rounded-lg bg-white z-50">
          <p className=" mt-[50px] ml-[30px] text-left text-2xl font-semibold">
            Enter URL
          </p>

          <div
            onClick={handleClose}
            className="w-[50px] h-[50px] -mt-[50px] ml-[680px] flex justify-center items-center rounded-full border-2 border-[#dcdcdc] "
          >
            <X size={30} />
          </div>

          <form onSubmit={addSocialAccount}>
            <div className="w-[720px] h-[60px] pl-[25px] ml-[25px] mt-[50px]  border-[2px] border-solid border-[#DCDCDC] rounded-md flex">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full outline-none"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </div>

            <div className="w-[720px] h-[60px] pl-[25px] ml-[25px] mt-[10px] border-[2px] border-solid border-[#DCDCDC] rounded-md flex">
              <input
                type="text"
                placeholder="Enter your password"
                className="w-full outline-none"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>

            <p className="w-[650px] h-[60px] mt-[15px] ml-[25px] text-left text-[#5F5F5F]">
              Kindly include your essential social links to enhance your online
              presence and connect with your audience more effectively.
            </p>

            <button className="bg-blue-700 w-[720px] h-[80px] ml-[25px] mt-[50px] rounded-md flex justify-center items-center">
              <p className=" font-semibold text-white text-center text-2xl">
                Connect profile
              </p>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
