import styled from 'styled-components';

export const LoginButton = styled.button`
  border-radius: 20px;
  background: var(--gray-250);
  color: var(--black);
  padding: 0 10px;
  border: 0;
  margin-left: 5px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
