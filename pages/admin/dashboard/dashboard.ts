import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;

  div {
    display: flex;
    flex-direction: row;
  }

  a {
      text-decoration: underline
  }
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;

  input {
    padding: 0 1.5rem;
    margin: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-100);
    font-weight: 400;
    font-size: 1rem;
    width: 585px;

    &::placeholder {
      color: var(--gray-300);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: var(--white);
  width: 500px;
  height: 228px;
  border-radius: 10px;
  margin: 0 2rem;
  text-align: center;

  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 1rem 0;
    color: var(--black);

    h2 {
      font-weight: 400;
      text-decoration: underline;
    }
  }
`

export const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: var(--white);
  width: 500px;
  height: 228px;
  border-radius: 10px;
  margin: 0 2rem;
  text-align: center;

  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 1rem 0;
    color: var(--black);

    h2 {
      font-weight: 400;
      text-decoration: underline;
    }
  }
`

export const LoadingDiv = styled.div`
  display: flex;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`

export const NoContent = styled.div`
  display: flex;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`

export const TableContainer = styled.div`
  display: flex;
  margin-top: 2rem 0;

  table {
    width: 1200px;
    border-spacing: 0 0.5rem;
    text-align: center;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;

      &:first-child {
        text-align: left;
      }
    }

    thead {
      tr {
        &:first-child {
          color: var(--gray-700);
        }

        th {
          &:nth-child(2){
            text-align: left;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          font-size: 0.85rem;

          &:nth-child(2){
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
      text-align: center;

      a {
        margin: 0 5px;
      }
    }
  }
`

