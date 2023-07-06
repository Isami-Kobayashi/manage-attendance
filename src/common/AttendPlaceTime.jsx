import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const AttendPlaceTime = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const type1 = event.target.value;
    console.log(type1);
    console.log(props.date);
    console.log(props.user);
    await setDoc(doc(db, "users", props.user), {
      date: props.date,
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
