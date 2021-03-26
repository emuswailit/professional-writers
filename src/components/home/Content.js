import React, { useState } from "react";
import styled from "styled-components";
import { setFlex } from "../../styles";
import { PrimaryButton } from "../globals/Buttons";
import FileUpload from "../globals/FileUpload";
import {
  Column,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormTextArea,
  Row,
  FormSelect
  
} from "../globals/FormElements";

const Content = ({ className }) => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });
  return (
    <div className={className}>
      <Form>
        <FormH1>Enter details below to and submit. We will contact you immediately with a ready quote or if necessary further consultation.</FormH1>
        <Row>
          <Column>
            <FormLabel>Your full names</FormLabel>
          </Column>
          <Column>
            <FormInput type="text" />
          </Column>
        </Row>
        <Row>
          <Column>
            <FormLabel>Email address</FormLabel>
          </Column>
          <Column>
            <FormInput type="email" />
          </Column>
        </Row>

        <Row>
          <Column>
            <FormLabel>Phone contact</FormLabel>
          </Column>
          <Column>
            <FormInput type="phone" />
          </Column>
        </Row>
     
        <Row>
          <Column>
            <FormLabel>Job type</FormLabel>
          </Column>
          <Column>
            <FormSelect>
            <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
            </FormSelect>
          </Column>
        </Row>
        <Row>
          <Column>
            <FormLabel>Short message</FormLabel>
          </Column>
          <Column>
            <FormTextArea rows="4" />
          </Column>
        </Row>
        <Row>
          <Column>
            <FormLabel>Upload file</FormLabel>
          </Column>
          <Column>
          <FileUpload
          accept=".jpg,.png,.jpeg,.pdf"
         
          multiple
          updateFilesCb={updateUploadedFiles}
        />
          </Column>
        </Row>
        <Row>
          <Column>
            <PrimaryButton>Submit</PrimaryButton>
          </Column>
        </Row>
      </Form>
    </div>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  min-height: 100vh;

  ${(props) => `background: ${props.theme.secondaryColor}`};
  ${(props) => `color: ${props.theme.primaryColor}`};
`;
