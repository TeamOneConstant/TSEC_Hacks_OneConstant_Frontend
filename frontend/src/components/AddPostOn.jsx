import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import { CalendarDays } from "lucide-react";
import DateTimePicker from 'react-datetime-picker';
import { Pencil } from "lucide-react";

export const AddPostOn = (props) => {
    const [toggle, setToggle] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [scheduled, setScheduled] = useState(false);

    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date);
        closeDatePicker();
        setScheduled(true);
    };

    const openDatePicker = () => {
        console.log(isDatePickerOpen)
        setIsDatePickerOpen(true);
    };
    
    const closeDatePicker = () => {
        setIsDatePickerOpen(false);
    };

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <div className="h-[100px] w-[600px] border-[#DCDCDC] rounded-md flex justify-around items-center ml-[300px] p-[20px]" >
            <div className="flex  justify-between items-center h-full w-full">
                <div className="flex space-x-[6px] items-center justify-content">
                    
            <Switch onCick={handleToggle}/>
            <img src={props.SocialImage} width={30} height={30} className="m-[10px]" />
            <h1 className="text-ml text-center">{props.SocialName}</h1>
            </div>
            
            <div className="bg-[#007DFC33] rounded-lg flex justify-around items-center p-[10px]" >
            <CalendarDays width={20} height={20} />
                <h1 className="text-sm text-center ml-[10px]">{selectedDate.toDateString()}</h1>
            </div>
            {scheduled ?
            <button className="bg-[#ECECEC] rounded-lg flex justify-around items-center p-[10px]" onClick={() => {openDatePicker()}} >
            <Pencil width={20} height={20} />
            <h1 className="text-md text-center ml-[10px]">Edit Schedule</h1>
        </button> : 
                <button className="bg-[#ECECEC] rounded-lg flex justify-around items-center p-[10px]" onClick={() => {openDatePicker()}} >
                <CalendarDays width={20} height={20} />
                <h1 className="text-md text-center ml-[10px]">Schedule Post</h1>
            </button>
            }
            {isDatePickerOpen && (
                <DateTimePicker onChange={handleDateChange} value={selectedDate} />
      )}
            
            </div>
        </div>
    )
}