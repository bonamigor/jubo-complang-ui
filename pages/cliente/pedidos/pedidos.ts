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
  height: 170px;
  padding: 0 5px;
  
  h1 {
    margin-top: 2.5rem;
  }
`

export const InputFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

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

  table {
    width: 1200px;
    border-spacing: 0 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    
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
