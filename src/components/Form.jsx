import React, { useState } from "react";
import rightCharacter from "../assets/formPic2.svg";
import leftCharacter from "../assets/LeftFormPic.svg";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./style/DatePickerStyles.css";

const Form = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [purpose, setPurpose] = useState("specific");
  const [category, setCategory] = useState("group");
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    contact: "",
    branch: "",
    year: "",
    date: "",
    purpose: "",
    specificType: "",
    category: "",
    groupName: "",
    time: "",
  });


  const DataInp = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };



  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    DataInp("year", event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    DataInp("time", event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    DataInp("purpose", event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    DataInp("category", event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const dataToSubmit = { ...formData, date: startDate, year: selectedYear, time: selectedTime };
      console.log(dataToSubmit);
      try {
        // const response = await fetch("YOUR_BACKEND_URL/api/form-submit", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(dataToSubmit),
        // });
        // if (response.ok) {
        //   // Handle successful submission
        //   console.log("Form submitted successfully");
        // } else {
        //   // Handle submission error
        //   console.error("Form submission error");
        // }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const options = [
    { value: "1st", text: "1st year" },
    { value: "2nd", text: "2nd year" },
    { value: "3rd", text: "3rd year" },
    { value: "4th", text: "4th year" },
    { value: "5th", text: "5th year" },
  ];

  const TimeOptions = [
    { value: "10AM", text: "10AM" },
    { value: "11AM", text: "11AM" },
    { value: "12PM", text: "12PM" },
    { value: "1PM", text: "1PM" },
    { value: "2PM", text: "2PM" },
    { value: "3PM", text: "3PM" },
    { value: "4PM", text: "4PM" },
    { value: "5PM", text: "5PM" },
    { value: "6PM", text: "6PM" },
  ];

  return (
    <div className="formPage bg-black w-screen h-screen justify-center flex-col flex items-center">
      <div className="w-[70%] h-[7rem] bg-[#CB9D06] mt-7 flex justify-center items-center text-[#fff] gap-8 font-freeman flex-col rounded-[12px] leading-[41px]">
        <div className="text-[2rem] font-[900] tracking-wide">
          KIIT STUDENT ACTIVITY CENTRE
        </div>
        <div className="text-[1.7rem] font-[900] tracking-wide">
          Campus 13 ( Karmansha )
        </div>
      </div>
      <div className="w-[80%] h-auto mt-4 bg-[#000] rounded-[1.5rem] border border-[#F3EBE8] relative z-10 flex flex-col">
        <img
          className="h-[12rem] absolute -top-[12.1rem] right-4"
          src={rightCharacter}
          alt="right character"
        />
        <img
          className="absolute h-[15rem] -top-[9.5rem] z-0 -left-[3rem]"
          src={leftCharacter}
          alt="left character"
        />
        <form onSubmit={handleSubmit}>
          <div className="p-[2rem] pl-10 flex justify-between">
            <div className="flex text-[white] p-2 w-[45%] h-[3.5rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="name">
                Name:
              </label>
              <input
                className="bg-[#000] w-[27rem] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                type="text"
                id="name"
                name="name"
                onChange={(e) => DataInp(e.target.name, e.target.value)}
                placeholder="saurav jha"
              />
            </div>
          
            <div className="flex text-[white] p-2 w-[45%] h-[3.5rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="rollNumber">
                Roll Number:
              </label>
              <input
                className="bg-[#000] w-[70%] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                type="text"
                id="rollNumber"
                name="rollNumber"
                onChange={(e) => DataInp(e.target.name, e.target.value)}
                placeholder="22053276"
              />
            </div>
          
          </div>
          <div className="p-[2rem] -mt-9 flex justify-between">
            <div className="flex text-[white] p-2 w-[45%] h-[3.5rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="contact">
                Contact:
              </label>
              <input
                className="bg-[#000] w-[25rem] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                type="text"
                id="contact"
                name="contact"
                onChange={(e) => DataInp(e.target.name, e.target.value)}
                placeholder="123455689"
              />
            </div>
           
            <div className="flex text-[white] p-2 w-[45%] h-[3.5rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="branch">
                Branch:
              </label>
              <input
                className="bg-[#000] w-[26rem] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                type="text"
                id="branch"
                name="branch"
                onChange={(e) => DataInp(e.target.name, e.target.value)}
                placeholder="cse"
              />
            </div>
       
          </div>
          <div className="p-[2rem] -mt-9 flex justify-between">
            <div className="flex text-[white] p-2 w-[20rem] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="year">
                Year:
              </label>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                id="year"
                name="year"
                className="bg-[#000] w-[15rem] outline-none border-none text-yellow-ochre"
              >
                <option hidden>Year</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
           
            <div className="flex text-[white] p-2 w-[20rem] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
              <label className="ml-5" htmlFor="date">
                Date:
              </label>
              <DatePicker
                name="date"
                id="date"
                className="bg-[#000] w-[15rem] outline-none border-none text-yellow-ochre"
                value={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  DataInp("date", date);
                }}
                clearIcon={null}
                calendarIcon={<FaRegCalendarAlt color="#fff" size={20} />}
              />
            </div>
          </div>

          {/* Purpose */}
          <div className="flex text-[white] -mt-1 p-2 w-[95%] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-around items-center mx-auto">
            <div>Purpose of Practice</div>
            <div className="">
              <input
                type="radio"
                id="general1"
                name="purpose"
                value="general"
                onChange={handlePurposeChange}
              />
              <label className="ml-5" htmlFor="general1">
                General
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="specific1"
                name="purpose"
                value="specific"
                onChange={handlePurposeChange}
              />
              <label className="ml-5" htmlFor="specific1">
                Specific
              </label>
            </div>
            {purpose === "specific" && (
              <div className="flex text-[white] w-auto h-auto p-1 text-[1.25rem] font-freeman border-b-[2px] border-yellow-ochre bg-[#000] gap-3 justify-center items-center">
                <input
                  className="bg-[#000] w-[26rem] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                  type="text"
                  name="specificType"
                  placeholder="Enter purpose"
                  onChange={(e) => DataInp(e.target.name, e.target.value)}
                />
              </div>
            )}
          </div>
         

          {/* Category */}
          <div className="flex text-[white] p-2 mt-7 w-[95%] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-around items-center mx-auto">
            <div>Category</div>
            <div className="">
              <input
                type="radio"
                id="solo/duet"
                name="category"
                checked={category === "solo/duet"}
                value="solo/duet"
                onChange={handleCategoryChange}
              />
              <label className="ml-5" htmlFor="solo/duet">
                solo/duet
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="group"
                name="category"
                value="group"
                checked={category === "group"}
                onChange={handleCategoryChange}
              />
              <label className="ml-5" htmlFor="group">
                group
              </label>
            </div>
            {category === "group" && (
              <div className="flex text-[white] w-auto h-auto p-1 text-[1.25rem] font-freeman border-b-[2px] border-yellow-ochre bg-[#000] gap-3 justify-center items-center">
                <input
                  className="bg-[#000] w-[26rem] outline-none border-none text-yellow-ochre placeholder:text-[#CB9D0650]"
                  type="text"
                  name="groupName"
                  placeholder="Enter category"
                  onChange={(e) => DataInp(e.target.name, e.target.value)}
                />
              </div>
            )}
          </div>
    

          {/* Time of Practice */}
          <div className="flex text-[white] ml-[2.8%] mt-[1.5%] p-2 w-[35%] h-[3rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000] gap-3 justify-center items-center">
            <label className="w-auto ml-5" htmlFor="time">
              Time of Practice
            </label>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              id="time"
              name="time"
              className="bg-[#000] w-[15rem] outline-none border-none text-yellow-ochre"
            >
              <option hidden>Time</option>
              {TimeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
         

          <div className="flex justify-center mb-3">
            <button
              type="submit"
              className="flex justify-center items-center text-[white] px-14 h-[3.5rem] rounded-[1.5rem] text-[1.25rem] font-freeman border border-[#F3EBE8] bg-[#000]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
