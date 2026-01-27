import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;

  div #loading {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 10px;
  width: 1300px;
  height: 600px;
  padding: 0 5px;

  header {
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    align-items: center;

    input {
      width: 800px;
      padding: 1.25rem 1.5rem; /* Adicionado padding vertical */
      margin: 1rem 0;
      height: 4rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: var(--gray-100);
      font-weight: 400;
      font-size: 1rem;
      
      &::placeholder {
        color: var(--gray-300);
        font-size: 1rem; /* Reduzido de 1.5rem */
        font-weight: 400;
        line-height: normal;
      }
      
      & + input {
        margin-top: 1rem;
      }
    }

    textarea {
      width: 800px;
      padding: 1.25rem 1.5rem; /* Adicionado padding vertical */
      margin: 1rem 0;
      height: 12rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: var(--gray-100);
      font-weight: 400;
      font-size: 1rem;
      resize: vertical;
      line-height: 1.5;

      &::placeholder {
        color: var(--gray-300);
        font-size: 1rem; /* Reduzido de 1.5rem */
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }

  button {
    margin-left: 1.5rem;
    width: 200px;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green-500);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

  h1 {
    margin-top: 2.5rem;
  }
`;

export const Orderless = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 10px;
  width: 1200px;
  height: 200px;
  padding: 0 5px;
`;

export const LoadingOrders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-top: -2rem;
  border-radius: 10px;
  width: 1200px;
  height: 200px;
  padding: 0 5px;
`;

export const TableContainer = styled.div`
  margin-top: 10px;

  table {
    width: 1300px;
    border-spacing: 0 0.5rem;
    text-align: center;
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
          font-size: 0.8rem;
          padding: 1rem 2rem;
          border: 0;
          background: var(--white);
          color: var(--black);
          border-radius: 0.25rem;

          a {
            margin: 0 5px;
          }
        }

        td:first-child {
          border-radius: 0.5rem 0 0 0.5rem;
        }

        td:last-child {
          border-radius: 0 0.5rem 0.5rem 0;
        }
      }
    }
  }
`;