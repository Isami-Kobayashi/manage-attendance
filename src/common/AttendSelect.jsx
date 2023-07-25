import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import "../assets/base.css";

export const AttendSelect = (props) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    props.handleValueChange(value);
  };

  return (
    <FormControl className="selectWidth">
      <InputLabel></InputLabel>
      <Select onChange={handleInputChange}>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
