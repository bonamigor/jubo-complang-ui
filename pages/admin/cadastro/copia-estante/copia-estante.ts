import styled from 'styled-components';

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
  width: 1100px;
  padding: 20px 5px 40px;
  min-height: 600px;
  
  h1 {
    margin-top: 2.5rem;
    color: var(--gray-700);
    font-size: 2rem;
  }
`

export const InfoBox = styled.div`
  background: var(--blue-50);
  border-left: 4px solid var(--blue-500);
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 4px;
  width: 90%;
  
  p {
    color: var(--gray-600);
    margin: 5px 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`

export const FormItself = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 1rem;
`

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  margin-bottom: 30px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: var(--gray-50);
    border-radius: 8px;
    border: 1px solid var(--gray-200);

    h2 {
      color: var(--gray-700);
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--green-500);
      font-size: 1.3rem;
    }
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;

  label {
    color: var(--gray-600);
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  select {
    width: 100%;
    padding: 0 1rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--white);
    font-weight: 400;
    font-size: 1rem;
    color: var(--gray-700);
    transition: border-color 0.2s;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
      border-color: var(--green-500);
    }

    &:disabled {
      background: var(--gray-100);
      color: var(--gray-400);
      cursor: not-allowed;
    }

    option {
      padding: 12px 1rem;
      display: flex;
      align-items: center;
      min-height: 40px;
    }

    option:first-child {
      color: var(--gray-400);
      font-style: italic;
    }
  }

  span {
    padding: 0.8rem 1rem;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 0.25rem;
    font-size: 0.9rem;
    color: var(--gray-600);
    margin-top: 5px;
  }
`

export const DatalistInput = styled.input`
  width: 100%;
  padding: 0 1rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: var(--white);
  font-weight: 400;
  font-size: 1rem;
  color: var(--gray-700);
  transition: border-color 0.2s;
  display: flex;
  align-items: center;

  &::placeholder {
    color: var(--gray-400);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    height: 100%;
  }

  &:focus {
    outline: none;
    border-color: var(--green-500);
  }

  &:disabled {
    background: var(--gray-100);
    color: var(--gray-400);
    cursor: not-allowed;
  }
`

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gray-500);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #ff4444;
  }
`

export const FormSubmitButton = styled.button<{ disabled: boolean }>` 
  width: 300px;
  padding: 0 1rem;
  height: 3.5rem;
  background: ${props => props.disabled ? 'var(--gray-400)' : 'var(--green-500)'};
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 600;
  transition: all 0.2s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.7;
  }
`

export const LoadingMessage = styled.div`
  color: var(--gray-500);
  font-size: 0.85rem;
  margin-top: 5px;
  font-style: italic;
`