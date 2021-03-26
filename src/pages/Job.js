import React, { useState } from "react";
import styled from "styled-components";
import { SmallBtn } from "../components/globals/Buttons";
import { Section } from "../components/globals/Section";
import Title from "../components/globals/Title";
import Content from "../components/home/Content";
import Navbar from "../components/home/Navbar";
import { blueTheme, greenTheme, redTheme } from "../components/home/themes";

const Job = (props) => {
  console.log(props)
  return (
    <>
      <Navbar>
        <SmallBtn onClick={props.handleThemeChange}>Change theme</SmallBtn>
      </Navbar>
      <Content>
        <article className="main">
          <Title title="post your job here" center />
        </article>
      </Content>
    </>
  );
};

export default Job;
