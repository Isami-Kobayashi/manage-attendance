import React, { useState, useEffect } from "react";
import moment from "moment";
import { AttendButton } from "../components/AttendButton";
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

export const Home = (props) => {
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
  console.log(users);
  const today = "07/11(Tue)";
  return (
    <main className="main layoutHome">
      <div className="container">
        <div className="section-container">
          <AttendButton users={users} />
          <TableContainer component={Paper}>
            <Table className="section-table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {dateList.map((date, id) => (
                    <TableCell key={id} align="center">
                      {date}
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
                          {user.time}
                          {id === today && user.now}
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
