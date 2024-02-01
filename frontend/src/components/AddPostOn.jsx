import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { CalendarDays } from "lucide-react";
import DateTimePicker from "react-datetime-picker";
import Calendar from "react-calendar";
import { Pencil } from "lucide-react";

export const AddPostOn = ({ SocialImage, SocialName }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    closeDatePicker();
    setScheduled(true);
  };

  const openDatePicker = () => {
    console.log(isDatePickerOpen);
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div className="h-[100px] w-full border-[#DCDCDC] rounded-md flex justify-around items-center p-[20px]">
      <div className="flex  justify-between items-center h-full w-full">
        <div className="flex space-x-[6px] items-center justify-content">
          <Switch onClick={handleToggle} />
          <img src={SocialImage} width={30} height={30} className="m-[10px]" />
          <h1 className="text-ml text-center">{SocialName}</h1>
        </div>

        <div className="bg-[#007DFC33] rounded-lg flex justify-around items-center p-[10px]">
          <CalendarDays width={20} height={20} />
          <h1 className="text-sm text-center ml-[10px]">
            {selectedDate.toDateString()}
          </h1>
        </div>
        {scheduled ? (
          <button
            className="bg-[#ECECEC] rounded-lg flex justify-around items-center p-[10px]"
            onClick={() => {
              openCalendar();
            }}
          >
            <Pencil width={20} height={20} />
            <h1 className="text-md text-center ml-[10px]">Edit Schedule</h1>
          </button>
        ) : (
          <button
            className="bg-[#ECECEC] rounded-lg flex justify-around items-center p-[10px]"
            onClick={() => {
              openDatePicker();
            }}
          >
            <CalendarDays width={20} height={20} />
            <h1 className="text-md text-center ml-[10px]">Schedule Post</h1>
          </button>
        )}
        {isDatePickerOpen && (
          <DateTimePicker
            className="h-[100px] w-[100px]"
            onChange={handleDateChange}
            value={selectedDate}
          />
        )}

        {isCalendarOpen && (
          <div className="h-[100px] w-[100px] z-50">
            <Calendar onChange={handleDateChange} value={selectedDate} />
            <button onClick={closeCalendar}>Close Calendar</button>
          </div>
        )}
      </div>
    </div>
  );
};
