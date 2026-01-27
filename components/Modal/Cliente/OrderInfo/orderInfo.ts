import styled from "styled-components";

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
    margin: 1.5rem 0;
    
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
    }
  }
`