import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;
  margin-bottom: 2rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 10px;
  width: 1200px;
  height: 100%;
  padding: 0 5px;
  
  h1 {
    margin-top: 2.5rem;
  }

  h2 {
    font-weight: 400;
  }

`

export const PedidoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 1000px;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 1000px;

  div {
    
    input {
      width: 400px;
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
      & + input {
        margin: 0 1rem;
      }
    }
  }

  input {
    width: 300px;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 400;
    font-size: 1rem;
    margin-left: 15px;
    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button {
      width: 200px;
      padding: 0 1.5rem;
      height: 4rem;
      margin: 0 1rem;
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
  }
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
` 

export const PedidoData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  background: var(--gray-300);
  border-radius: 10px;
  padding: 1rem;
  width: 1000px;

  h2 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;
  }

  span {
    text-decoration: underline;
    font-weight: 400;
  }
`



interface FormButtonProps {
  isUpdate?: boolean;
}

export const FormSubmitButton = styled.button<FormButtonProps>` 
  display: ${(props) => props.isUpdate
    ? 'none'
    : 'block'};
  width: 150px;
  padding: 0 1rem;
  height: 3rem;
  background: var(--green-500);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`

export const FormButton = styled.button<FormButtonProps>` 
  display: ${(props) => props.isUpdate
    ? 'block'
    : 'none'};
  width: 150px;
  padding: 0 1rem;
  height: 3rem;
  background: var(--green-500);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`

export const DecideButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
`

export const ConfirmButton = styled.button`
  width: 200px;
  padding: 0 1.5rem;
  height: 4rem;
  margin: 0 1rem;
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

export const CancelButton = styled.button`
  width: 200px;
  padding: 0 1.5rem;
  height: 4rem;
  margin: 0 1rem;
  background: #cc0000;
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;
  &:hover {
    filter: opacity(0.9);
  }
`
