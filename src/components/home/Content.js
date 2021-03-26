import React from "react";
import styled from "styled-components";
import { setFlex } from "../../styles";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Nulla enim ullamco ad dolor id minim ex eiusmod pariatur exercitation
        anim labore cupidatat. Labore nostrud do nisi eiusmod pariatur eu sunt
        proident eiusmod magna sunt nisi id voluptate. Incididunt non eiusmod
        eiusmod Lorem. Ullamco anim esse mollit reprehenderit laboris nostrud ex
        aliqua quis. Sint irure dolor aliqua ad exercitation et fugiat. Id culpa
        ipsum laboris officia consequat amet pariatur sint anim nisi deserunt
        ex.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  min-height: 100vh;

  ${(props) => `background: ${props.theme.secondaryColor}`};
  ${(props) => `color: ${props.theme.primaryColor}`};
`;
