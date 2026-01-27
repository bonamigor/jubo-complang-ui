import styled from "styled-components";

export const PaginationButtons = styled.div`
  display: flex;

  button {
    padding: 0.5rem;
    margin: 0 0.25rem;
    margin-bottom: 1rem;
    width: 2rem;
    height: 2rem;
    background: var(--green-500);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 0.75rem;
    font-weight: 500;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  #more {
      width: 4rem;
  }
`