import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaMax, setRem } from "../../styles";

export const Container = styled.div`
  min-height: 692px;

  bottom: 0;
  left: 0;
  right: 0;

  top: 0;
  z-index: 0;
  overflow-x: scroll;
  background: #fff;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: block;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
    align-items: center;
    align-content: center;
  }
`;

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  ${(props) => `background: ${props.theme.primaryColor}`};
  max-width: 720px;
  height: auto;
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.9);
 

  ${mediaMax.phone`
  {
    padding: 16px 16px;
     width:  100%;
     margin: 0 auto;
     display: grid;
     width: 100%;
  
  }
  `};
`;

export const FormH1 = styled.h1`
  ${(props) => `color: ${props.theme.secondaryColor}`};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: ${setRem()} ${setRem()};
  margin-bottom: 16px;
  width: 90%;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 16px 32px;
  }
`;
export const FormTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 16px;
  width: 90%;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 16px 32px;
  }
`;

export const FormSelect = styled.select`
  padding: ${setRem()} ${setRem()};
  margin-bottom: 16px;
  width: 90%;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    padding: 16px 32px;
  }
`;

export const FormButton = styled.button`
  background: #4b59f7;
  padding: 16px 0;

  width: 45%;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
