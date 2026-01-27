import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green-500);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin: 10px 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    .no {
      font-size: 50px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`
