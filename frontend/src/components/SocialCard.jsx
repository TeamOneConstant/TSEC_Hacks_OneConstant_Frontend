import { useEffect, useState } from "react";
import AddSocials from "./AddSocials";
import { Plus } from "lucide-react";

export default function SocialCard({
  SocialIcon,
  SocialName,
  SocialImage,
  //   onClick,
}) {

  var s1 = JSON.parse(localStorage.getItem('socialUsername'))
  // s1 = s1 === null ? "" : s1
  var s2 = JSON.parse(localStorage.getItem('socialConnects'))
  s2 = s2 === null ? false : s2

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isConnected, setIsConnected] = useState(s2[SocialName.toLowerCase()]);
  // const [platform, setPlatform] = useState("");
  const [username, setUsername] = useState(s1[SocialName.toLowerCase()])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {

    var u = JSON.parse(localStorage.getItem('socialUsername'));

    // setPlatform(JSON.parse(localStorage.getItem('socialConnects'))[SocialName.toLowerCase()])
    setUsername(u[SocialName.toLowerCase()])
    setIsConnected(true);
    setIsModalOpen(false);
  };
  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="w-[580px] h-[110px] border-2 border-[#dcdcdc] rounded-md mt-[50px]  p-[10px]">
      <div className="flex justify-between ">
        <div className="gap-x-[4px] flex text-[#5F5F5F]">
          <SocialIcon color="#5F5F5F" size={30} />
          <h2 className="ml-[10px] text-lg font-medium">{SocialName}</h2>
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
          <img src={SocialImage} width={30} height={30} />
        </div>
      </div>

      <div>

        {
          isConnected ? (
          
          <a target="_blank" href={`https://${SocialName.toLowerCase()}.com/${username}`}>
              <h1>{username}</h1>
          </a>
        ) : (
          <button
            onClick={onClick}
            className="flex gap-x-[4px] justify-center items-center"
          >
            <Plus size={30} color="#007DFC" />
            <h1 className=" text-[#007DFC]  ml-[10px]">Add Link</h1>
          </button>
        )}


        {isModalOpen && (
          <AddSocials isOpen={isModalOpen} onClose={closeModal} calledBy={SocialName} />
        )}
      </div>
    </div>
  );
}
