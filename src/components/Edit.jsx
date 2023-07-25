import React, { useState, useEffect } from "react";
import moment from "moment";
import { AttendPlace } from "../common/AttendPlace";
import { AttendTime } from "../common/AttendTime";
import { Info } from "../common/Info";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  IconButton,
} from "@mui/material";
import arrow from "../assets/arrow-bk.png";
import "../assets/base.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const Edit = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const [dateId, setDateId] = useState(0);

  const categories = [
    { id: "八王子", name: "八王子" },
    { id: "在宅", name: "在宅" },
    { id: "羽村", name: "羽村" },
    { id: "初台", name: "初台" },
    { id: "休暇", name: "休" },
  ];

  const attentive = [
    { id: "早", name: "早" },
    { id: "定時", name: "定時" },
    { id: "遅", name: "遅" },
  ];

  const dateList = [];
  const weeksEn = [];

  //「＿」は単純に引数として書く必要があるため、記述はされたが特に使われていない」から気にしないでOK
  [...Array(7)].map((_, id) => {
    dateList.push(
      //現在時刻に
      moment()
        //0~7を足す＝現在の日付に０～７を足して1週間の日付を格納
        .add(dateId + id, "days")
        //formatで日付の形式を指定
        .format("MMDD(ddd)")
    );
    weeksEn.push(
      moment()
        .add(dateId + id, "days")
        //曜日を日本語表記で取得する
        .format("ddd")
    );
  });

  return (
    <main className="main">
      <div className="container">
        <div className="section-container editAll">
          <TableContainer component={Paper}>
            <Table className="section-table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {dateList.map((date, id) => (
                    <TableCell key={id} align="center">
                      {date.includes("Sat") ? (
                        <span className="holiday">{date}</span>
                      ) : date.includes("Sun") ? (
                        <span className="holiday">{date}</span>
                      ) : (
                        date
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.length > 0 &&
                  users.map((user) => (
                    <TableRow>
                      <TableCell key={user.id} component="th" scope="row">
                        {user.name}
                      </TableCell>
                      {dateList.map((id) => (
                        <TableCell key={id} align="center">
                          <AttendPlace
                            options={categories}
                            date={id}
                            user={user.id}
                          />
                          <AttendTime
                            options={attentive}
                            date={id}
                            user={user.id}
                          />
                          <Info user={user} date={id} />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="arrowLeft">
            <IconButton onClick={() => setDateId(dateId - 7)}>
              <img src={arrow} alt="arrow" />
            </IconButton>
          </div>
          <div className="arrowRight">
            <IconButton onClick={() => setDateId(dateId + 7)}>
              <img src={arrow} alt="arrow" />
            </IconButton>
          </div>
        </div>
      </div>
    </main>
  );
};