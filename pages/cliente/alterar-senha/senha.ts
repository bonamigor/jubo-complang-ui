import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 10px;
  width: 1200px;
  height: 230px;
  padding: 0 5px;
  
  h1 {
    margin-top: 2.5rem;
  }
`

export const ChangePasswordForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2%;
  margin-top: 2rem;
  width: 90%;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const FormButton = styled.button` 
  display: block;
  width: 150px;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green-500);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
