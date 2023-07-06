import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const AttendPlaceTime = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const type1 = event.target.value;
    console.log(type1);
    console.log(props.date);
    console.log(props.user);
    const addDataRef = collection(db, "users");
    await addDoc(addDataRef, {
      date: props.date,
      name: props.user,
      place: type1,
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
