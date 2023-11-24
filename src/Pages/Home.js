import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../Components/Footer";
import React from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearchChange={handleSearch} />
      <Outlet searchTerm={searchTerm} />
      <Footer />
    </>
  );
}
