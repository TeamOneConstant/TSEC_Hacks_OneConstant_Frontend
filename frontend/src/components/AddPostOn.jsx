import React from "react";
import { Switch } from "@mui/material";

export const AddPostOn = (props) => {
    return(
        <div  style={{height: '150px', width: '400px',borderColor: '#DCDCDC', borderRadius: '2px', borderWidth: '2px', display: 'flex',justifyContent: 'space-around', alignItems: 'center'}} >
            <Switch checked={true} />
        </div>
    )
}