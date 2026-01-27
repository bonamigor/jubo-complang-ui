import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 4rem 0;
  padding-bottom: 4rem;
  text-align: center;

  table {
    width: 1000px;
    border-spacing: 0 0.5rem;
    margin-bottom: 1rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    thead {
      background: var(--gray-700);
      tr {
        color: var(--white);

        th:first-of-type {
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        td {
          background: var(--gray-200);
          font-size: 1rem;
        }

        td:first-of-type {
          text-align: left;
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

export const TableTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;
  padding: 1rem 0;
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
