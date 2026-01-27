import styled from 'styled-components';

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
  width: 1100px;
  height: 320px;
  padding: 0 5px;
  
  h1 {
    margin-top: 2.5rem;
  }
`

export const FormItself = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;
  padding: 0 1rem;

  div {
    display: flex;
    flex-direction: row;

    #name {
      width: 500px;
    }

    #price {
      width: 150px;
    }

    #unity {
      width: 200px;
    }
  }

  input {
    padding: 0 1.5rem;
    margin: 0 1rem;
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

  select {
    padding: 0 1.5rem;
    margin: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    color: var(--gray-300);
    font-size: 1.5rem;
    font-weight: 400;
  }
  
  button[type="submit"] {
    width: 300px;
    padding: 0 1.5rem;
    height: 4rem;
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
  width: 200px;
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

export const InputFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  input {
    padding: 0 1.5rem;
    margin: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 400;
    font-size: 1rem;
    width: 1100px;

    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const TableContainer = styled.div`
  margin-top: 10px;

  div {
    margin-top: 1.5rem;
  }

  table {
    width: 1100px;
    border-spacing: 0 0.5rem;
    text-align: left;
    margin-bottom: 1rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
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

          &:first-child {
            text-align: left;
          }
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
