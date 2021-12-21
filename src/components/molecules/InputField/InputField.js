import { Input } from 'components/atoms/Input';
import { Label } from 'components/atoms/Label';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputField = ({ onChange, id, value, name, type, isTextArea, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor="id">{name}</Label>
      {isTextArea ? (
        <Input isTextArea as="textarea" name={name} id={id} type={type} value={value} onChange={onChange} {...props}></Input>
      ) : (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} {...props}></Input>
      )}
    </Wrapper>
  );
};

export default InputField;
