import React, { memo, useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  getDocs,
  collection,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const Info = (props) => {
  const user = props.user.id;
  const date = props.date;

  //ちなみに doc 関数は db を除く引数が偶数であることが仕様として決まっています。
  //error文「n.indexof is not function」は引数はstringにしないといけない
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    // current userのメモの投稿内容を表示する

    // memosのデータ追加
    const usersCollectionRef = collection(db, "users", user, date);
    // memosのデータ取得
    onSnapshot(
      usersCollectionRef,
      (snapshot) =>
        setMemos(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        ),
      (error) => {
        console.log(error.message);
      }
    );
  }, []);
  const listInfoTime = [];
  const InfoTime = () => {
    memos.map((id) => {
      listInfoTime.push(id);
    });
    console.log(listInfoTime[0]);
    if (listInfoTime[0] !== undefined) {
      return listInfoTime[0].time;
    }
  };
  const listInfoPlace = [];
  const InfoPlace = () => {
    memos.map((id) => {
      listInfoPlace.push(id);
    });
    console.log(listInfoPlace[0]);
    if (listInfoPlace[0] !== undefined) {
      return listInfoPlace[0].place;
    }
  };

  return (
    <>
      <ul className="dotNone">
        <li>
          <span className="down">時間：</span>
          {InfoTime()}
        </li>
        <li>
          <span className="down">場所：</span>
          {InfoPlace()}
        </li>
      </ul>
    </>
  );
};
