import React, { Component } from "react";
import styled from "styled-components";
import { media, setColor, setRem } from "../../styles";
import { Section } from "../globals/Section";
import Title from "../globals/Title";
import Room from "./Room";
import rooms from "./rooms-data";

export default class Rooms extends Component {
  state = {
    rooms: rooms,
  };

  render() {
    console.log("Rooms", rooms);
    console.log("Rooms", this.state.rooms);
    return (
      <Section color={setColor.lightGrey}>
        <Title title="our rooms" center />
        <RoomCenter>
          {this.state.rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomCenter>
      </Section>
    );
  }
}

const RoomCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};

  ${media.large`
  width:100vw;
  max-width:1170px;
 
  
  `};

  /* ${media.tablet`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)};

  `} */
  /* ${media.large`
  grid-template-columns: repeat(3, 1fr);
  
  `} */
`;
