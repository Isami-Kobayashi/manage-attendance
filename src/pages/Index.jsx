import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Edit } from "../components/Edit";
import { Home } from "../components/Home";
import { Header } from "../components/Header";

export const Index = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/edit`} element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
