import { useState } from "react";
import AddSocials from "./AddSocials";
import { Plus } from "lucide-react";

export default function SocialCard({
  SocialIcon,
  SocialName,
  SocialImage,
  //   onClick,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
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
        <button
          onClick={onClick}
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
  );
}
