import { Header } from 'components/atoms/Header';
import React from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import { Button } from 'components/atoms/Button';

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;

const AddTask = () => {
  return (
    <Wrapper>
      <Header>Add new task</Header>
      <InputField name={'Title'} id={'title'} type={'text'} />
      <InputField isTextArea name={'Text'} id={'text'} type={'textarea'} />
      <Button>Add Task</Button>
    </Wrapper>
  );
};

export default AddTask;
