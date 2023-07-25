import React, { useState } from "react";
import { AttendSelect } from "../common/AttendSelect";
import { Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";
import "../assets/base.css";

export const AttendButton = (props) => {
  const member = [
    { id: "小林", name: "小林" },
    { id: "高橋", name: "高橋" },
  ];

  var today = moment();
  var todayFormat = today.format("MMDD(ddd)");

  const [people, setPeople] = useState("");

  const handleValueChange = (newValue) => {
    setPeople(newValue);
  };

  const handleInChange = async (event) => {
    event.preventDefault();
    const value = people;
    if (value === "高橋") {
      const docRef = doc(
        db,
        "users",
        "eSNhDrNbl1Ds8bNPlSIj",
        todayFormat,
        "aaa"
      );
      await setDoc(
        docRef,
        {
          now: "△",
        },
        { merge: true }
      );
    }
    if (value === "小林") {
      const docRef = doc(
        db,
        "users",
        "gvqlXDrvQWr2mwLWHjOL",
        todayFormat,
        "aaa"
      );
      await setDoc(
        docRef,
        {
          now: "△",
        },
        { merge: true }
      );
    }
  };
  const handleOutChange = async (event) => {
    event.preventDefault();
    const value = people;
    if (value === "高橋") {
      const docRef = doc(
        db,
        "users",
        "eSNhDrNbl1Ds8bNPlSIj",
        todayFormat,
        "aaa"
      );
      await setDoc(
        docRef,
        {
          now: "-",
        },
        { merge: true }
      );
    }
    if (value === "小林") {
      const docRef = doc(
        db,
        "users",
        "gvqlXDrvQWr2mwLWHjOL",
        todayFormat,
        "aaa"
      );
      await setDoc(
        docRef,
        {
          now: "-",
        },
        { merge: true }
      );
    }
  };

  return (
    <div className="attendWrapper">
      <AttendSelect
        className="selectMargin"
        options={member}
        handleValueChange={handleValueChange}
      />
      <Button variant="contained" onClick={handleInChange}>
        出勤
      </Button>
      <Button variant="outlined" onClick={handleOutChange}>
        退勤
      </Button>
    </div>
  );
};
