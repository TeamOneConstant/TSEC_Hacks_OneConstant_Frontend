import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import { CalendarDays } from "lucide-react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddPostOn = (props) => {
    const [toggle, setToggle] = useState(false);
    const [check, setCheck] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        closeDatePicker();
    };

    const openDatePicker = () => {
        setIsDatePickerOpen(true);
    };
    
    const closeDatePicker = () => {
        setIsDatePickerOpen(false);
    };

    const handleToggle = () => {
        setToggle(!toggle)
        setCheck(!check)
    }

    const handleChecked = () => {
        const newValue = check === 0 ? 1 : 0;
        onChange({ target: { value: newValue } });
    };

    return(
        <div>
        <div className="h-[100px] w-[500px] border-[#DCDCDC] rounded-md flex justify-around items-center ml-[150px] p-[20px]" >
            <div className="flex  justify-between items-center h-full w-full">
                <div className="flex space-x-[6px] items-center justify-content">
            <Switch checked={true} onChange={handleToggle}/>
            <img src={props.SocialImage} width={30} height={30} className="m-[10px]" />
            <h1 className="text-ml text-center">{props.SocialName}</h1>
            </div>
            
            <button className="bg-[#ECECEC] rounded-lg flex justify-around items-center p-[10px]" onClick={() => {openDatePicker(); console.log("Clicked")}} >
                <CalendarDays width={20} height={20} />
                <h1 className="text-md text-center ml-[10px]">Schedule post</h1>
            </button>
            
            </div>
        </div>
        {isDatePickerOpen && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          onClickOutside={closeDatePicker}
        />
      )}
        </div>
    )
}