import React, { useState } from "react";
import { AttendSelect } from "../common/AttendSelect";
import { Button } from "@mui/material";

export const AttendButton = (props) => {
  const member = [
    { id: "佐竹", name: "佐竹" },
    { id: "小林", name: "小林" },
    { id: "高橋", name: "高橋" },
  ];

  const [people, setPeople] = useState("");

  const handleValueChange = (newValue) => {
    setPeople(newValue);
  };

  const handleInChange = () => {
    const value = people;
    props.handleAttendPeopleChange(value);
  };
  const handleOutChange = () => {
    const value = people;
    props.handleOutPeopleChange(value);
  };

  return (
    <div>
      <AttendSelect options={member} handleValueChange={handleValueChange} />
      <h1>{people}</h1>
      <Button variant="contained" onClick={handleInChange}>
        出勤
      </Button>
      <Button variant="outlined" onClick={handleOutChange}>
        退勤
      </Button>
    </div>
  );
};
