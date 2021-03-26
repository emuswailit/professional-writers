import React from "react";
import About from "../components/home/About";
import Header from "../components/home/Header";
import Rooms from "../components/home/Rooms";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <About />
      <Rooms />
    </>
  );
};

export default Home;
