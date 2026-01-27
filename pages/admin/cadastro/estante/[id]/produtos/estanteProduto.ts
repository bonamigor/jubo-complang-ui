import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;

  h2 {
    margin-top: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 10px;
  width: 1200px;
  height: 250px;
  padding: 0 5px;
  
  h1 {
    margin-top: 2.5rem;
  }
`

export const FormItself = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;
  padding: 0 1rem;

  input:first-of-type {
    padding: 0 1rem;
    margin: 0 0rem;
    height: 4rem;
    width: 550px;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 300;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  input {
    padding: 0 1.5rem;
    margin: 0 1rem;
    height: 4rem;
    width: 150px;
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

  select {
    width: 600px;
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
    
    option {
      padding: 0 1.5rem;
    }
  }

  ul {
    list-style-type: none;
  }
`

interface FormButtonProps {
  isUpdate?: boolean;
}

export const FormSubmitButton = styled.button<FormButtonProps>` 
  display: ${(props) => props.isUpdate
    ? 'none'
    : 'block'};
  width: 120px;
  padding: 0 1rem;
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

export const FormButton = styled.button<FormButtonProps>` 
  display: ${(props) => props.isUpdate
    ? 'block'
    : 'none'};
  width: 120px;
  padding: 0 1rem;
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

export const InputFilter = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 1200px;

  input {
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 400;
    font-size: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  div {
    position: absolute;
    z-index: 1;
    padding-left: 25px;
    margin-top: 1rem;
  }
`

export const TableContainer = styled.div`
  margin-top: 10px;

  table {
    width: 1200px;
    border-spacing: 0 0.5rem;
    margin-bottom: 1rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    thead {
      tr {
        &:first-child {
          color: var(--gray-700);
        }
      }
    }

    tbody {
      tr {
        td {
          font-size: 1rem;
          text-align: center;
        }
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      color: var(--black);
      border-radius: 0.25rem;

      a {
        margin: 0 5px;
      }
    }
  }
`
