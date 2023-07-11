import React, { useState } from "react";
import { AttendSelect } from "../common/AttendSelect";
import { Button } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const AttendButton = (props) => {
  const member = [
    { id: "小林", name: "小林" },
    { id: "高橋", name: "高橋" },
  ];

  const [people, setPeople] = useState("");

  const handleValueChange = (newValue) => {
    setPeople(newValue);
  };

  const handleInChange = async (event) => {
    event.preventDefault();
    const value = people;
    if (value === "高橋") {
      const docRef = doc(db, "users", "eSNhDrNbl1Ds8bNPlSIj");
      await updateDoc(docRef, {
        now: "△",
      });
    }
    if (value === "小林") {
      const docRef = doc(db, "users", "gvqlXDrvQWr2mwLWHjOL");
      await updateDoc(docRef, {
        now: "△",
      });
    }
  };
  const handleOutChange = async (event) => {
    event.preventDefault();
    const value = people;
    if (value === "高橋") {
      const docRef = doc(db, "users", "eSNhDrNbl1Ds8bNPlSIj");
      await updateDoc(docRef, {
        now: "-",
      });
    }
    if (value === "小林") {
      const docRef = doc(db, "users", "gvqlXDrvQWr2mwLWHjOL");
      await updateDoc(docRef, {
        now: "-",
      });
    }
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
