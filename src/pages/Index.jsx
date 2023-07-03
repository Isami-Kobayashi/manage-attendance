import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { AttendButton } from "../components/AttendButton";

export const Index = () => {
  const [AttendPeople, setAttendPeople] = useState("");
  const [OutPeople, setOutPeople] = useState("");
  const handleAttendPeopleChange = (newValue) => {
    setAttendPeople(newValue);
  };
  const handleOutPeopleChange = (newValue) => {
    setOutPeople(newValue);
  };

  return (
    <div>
      <AttendButton
        handleAttendPeopleChange={handleAttendPeopleChange}
        handleOutPeopleChange={handleOutPeopleChange}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path={`/`}
            element={<Home AttendPeople={AttendPeople} OutPeople={OutPeople} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
