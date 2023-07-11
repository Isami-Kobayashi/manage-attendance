import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const AttendTime = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const type1 = event.target.value;
    const docRef = doc(db, "users", props.user);
    await updateDoc(docRef, {
      date: props.date,
      time: type1,
    });
  };
  return (
    <FormControl>
      <InputLabel></InputLabel>
      <Select onChange={saveDB}>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
