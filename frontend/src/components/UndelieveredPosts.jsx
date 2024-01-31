import React, {useState} from "react";
import { CalendarDays } from "lucide-react";
import { Switch } from "@mui/material";

export const UndelieveredPosts = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="h-[200px] w-[800px] border-[#DCDCDC] border-[2px] rounded-md flex justify-around items-center ml-[300px] p-[20px]">
            <img src="/ImgPreview.png" height={150} width={150} className="rounded-md" />
            <div className="flex-col justify-around">
                <h2 className="mb-[10px]">Rediscovering Joy in Everyday Moments 🌟 #LifeIsBeautiful</h2>
                <div className="bg-[#007DFC33] rounded-lg flex justify-around items-center p-[10px] mb-[8px]" >
            <CalendarDays width={20} height={20} />
                <h1 className="text-sm text-center ml-[10px]">{new Date().toString()}</h1>
            </div>
            <div className="flex space-x-[6px] items-center justify-content">
                    
            <Switch onCick={handleToggle}/>
            <img src={props.SocialImage} width={30} height={30} className="m-[10px]" />
            <h1 className="text-ml text-center">{props.SocialName}</h1>
            </div>
            </div>
            <button className="bg-[#007DFC] p-[15px] rounded-md">

                Post Again
            </button>
        </div>
    )
}