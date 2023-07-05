import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export const AttendPlaceTime = (props) => {
  const saveDB = async (event) => {
    event.preventDefault();
    const { type1 } = event.target.elements;
    console.log(type1.value);
  };
  return (
    <FormControl>
      <InputLabel></InputLabel>
      <Select onChange={saveDB}>
        {props.options.map((option) => (
          <MenuItem name="type1" key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
