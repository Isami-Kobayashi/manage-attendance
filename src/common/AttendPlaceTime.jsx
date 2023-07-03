import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export const AttendPlaceTime = (props) => {
  return (
    <FormControl>
      <InputLabel></InputLabel>
      <Select>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
