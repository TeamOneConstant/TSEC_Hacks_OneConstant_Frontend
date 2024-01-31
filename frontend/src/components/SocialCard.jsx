import React from "react";
import { Instagram } from "lucide-react";
import { Camera } from "lucide-react";
import { Plus } from "lucide-react";

export default function SocialCard(props) {
    return (
        <div style={{height: '150px', width: '400px',borderColor: '#DCDCDC', borderRadius: '2px', borderWidth: '2px', display: 'flex',justifyContent: 'space-around', alignItems: 'center'}} >
            <div style={{display: "flex", alignItems: 'space-between', flexDirection: 'column'}}> 
            <div style={{display: "flex"}}>
                <props.SocialIcon color="#5F5F5F" size={30}/>
                <h2 style={{marginLeft: '10px'}}>{props.SocialName}</h2>
            </div> 
            <div style={{display: 'flex'}}>
                <Plus size={30} color="#007DFC" />
                <h1 style={{color: '#007DFC', marginLeft: '10px' }}>Add Link</h1>
            </div>
            </div>

            <div style={{ width: '50px', height: '50px', borderColor: '#DCDCDC', borderRadius: 100, padding: '5px',
                            borderWidth: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                onClick={props.onClick}
            >
                <img src={props.SocialImage} width={30} height={30}/>
            </div>
        </div>
    )
}