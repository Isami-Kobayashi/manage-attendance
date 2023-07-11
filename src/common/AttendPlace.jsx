import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const AttendPlace = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const type1 = event.target.value;
    const docRef = doc(db, "users", props.user, props.date, "aaa");
    await setDoc(docRef, {
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
