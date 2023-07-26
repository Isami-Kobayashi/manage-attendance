import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../assets/base.css";

export const AttendTime = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const type1 = event.target.value;
    const docRef = doc(db, "users", props.user, props.date, "aaa");
    await setDoc(
      docRef,
      {
        time: type1,
      },
      { merge: true }
    );
  };
  return (
    <FormControl variant="filled" sx={{ m: 0.1, minWidth: 70 }}>
      <InputLabel id="demo-simple-select-label">時間</InputLabel>
      <Select
        onChange={saveDB}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="time"
        className="boxWidth"
      >
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
