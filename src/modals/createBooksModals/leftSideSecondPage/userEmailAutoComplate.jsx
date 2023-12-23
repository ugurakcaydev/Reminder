import { useState } from "react";
import UserEmailSuggestions from "./UserEmailSuggestions";

/* eslint-disable react/prop-types */
const UserEmailAutoComplete = ({ users }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="rounded-lg group overflow-auto border border-[#32414a] bg-[#1d2629]  ">
      <div className="w-full  overflow-auto ">
        <div className="cursor-pointer  transition-all duration-500 min-h-[40px]">
          <input
            className="border-none px-2 py-3 w-full h-full bg-[#1d2629] focus:outline-none"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Kelimeyi yazın..."
          />
          <UserEmailSuggestions users={users} inputValue={inputValue} />
        </div>
      </div>
    </div>
  );
};

export default UserEmailAutoComplete;
