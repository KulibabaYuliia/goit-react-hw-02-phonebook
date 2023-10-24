import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormWrap = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 300px;
  align-items: start;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-top: 10px;

  label {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 10px;
  }

  Field {
    border: 1px solid #b2b2b2;
    border-radius: 4px;
    padding: 3px;
  }

  input:focus {
    border-color: transparent;
  }

  button {
    padding: 5px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #b2b2b2;
  }
`;
