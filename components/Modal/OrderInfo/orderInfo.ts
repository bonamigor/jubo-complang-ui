import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OrderHeader = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    
    p {
      margin: 0 10px;
    }
  }
`

interface OrderItemsProps {
  showScrollBar?: boolean;
}

export const OrderItems = styled.div<OrderItemsProps>`
  margin-top: 4rem 0;
  padding-bottom: 4rem;
  text-align: center;
  overflow-y: ${(props) => props.showScrollBar ? 'scroll' : 'hidden'};
  max-height: 500px;

  /* width */
  ::-webkit-scrollbar {
   width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
   background: #f1f1f1; 
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
   background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
   background: #555; 
  }

  thead {
    position: sticky;
  }

  h3 {
    text-align: center;
  }

  table {
    width: 900px;
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
        &:first-child {
          color: var(--white);
        }
      }
    }

    tbody {
      div {
        display: flex;
        align-items: center;
        text-align: center;
      }

      tr {
        td {
          background: var(--gray-250);
          font-size: 1rem;
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

      div {
        display: flex;
        flex-direction: row;
        width: 4rem;
      }
    }
  }
`

export const OrderFooter = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  input {
    padding: 0 1rem;
    margin: 0 0rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--gray-200);
    font-weight: 400;
    font-size: 1rem;
    width: 250px;
  }
`

export const GeneratePdf = styled.div`
  margin-top: -3rem;

  div {
    display: flex;
    flex-direction: row;
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    margin-left: 1rem;
    height: 3rem;
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

export const ConfirmSection = styled.div`
  div {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
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

  #empresa {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%
  }
`

export const CancelSection = styled.div`
  margin-left: 2rem;
  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: red;
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

export const Observacao = styled.div`
  display: flex;
  flex-direction: column;
`