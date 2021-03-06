import { Header } from 'components/atoms/Header';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import InputField from 'components/molecules/InputField/InputField';
import { Button } from 'components/atoms/Button';
import { NotesContext } from 'providers/NotesProvider';

const Wrapper = styled.form`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 85%;
    margin: 0 auto;
    justify-content: center;
  }
`;

const initialFormState = {
  uuid: null,
  title: '',
  text: '',
  done: false,
};

const AddTask = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddNote } = useContext(NotesContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();
    handleAddNote(formValues);
    setFormValues(initialFormState);
  };

  return (
    <Wrapper onSubmit={handleSubmitNote}>
      <Header>Add new task</Header>
      <InputField name={'title'} id={'title'} type={'text'} value={formValues.title} onChange={handleInputChange} />
      <InputField isTextArea name={'text'} id={'text'} type={'textarea'} value={formValues.text} onChange={handleInputChange} />
      <Button type="submit">Add Task</Button>
    </Wrapper>
  );
};

export default AddTask;
