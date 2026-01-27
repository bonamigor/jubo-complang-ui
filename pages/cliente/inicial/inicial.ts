import styled from 'styled-components';

export const Observacao = styled.div`
  text-align: center;

  h1 {
    margin-top: -9rem;
    color: white;
    font-weight: 500;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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

export const TableContainer = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
  text-align: center;

  table {
    width: 1000px;
    border-spacing: 0 0.5rem;
    text-align: center;
    margin-bottom: 1rem;
    background: var(--gray-700);
    border-radius: 10px;
    
    th {
      color: var(--white);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
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
          color: var(--black);

          &:first-child {
            text-align: center;
          }
        }
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      color: var(--black);

      a {
        margin: 0 5px;
      }
    }
  }
`
