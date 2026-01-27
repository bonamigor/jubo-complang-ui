import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF; // Links Header

    --gray-100: #F2F2F2; // Input Background
    --gray-200: #E5E5E5; // Background
    --gray-250: #C4C4C4;
    --gray-300: #B1B1B1; // Placeholders
    --gray-400: #a8a8b3;
    --gray-700: #969cb2;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214; // Text
    --black: #000000;

    --cyan-500: #61dafb;
    --green-500: #04B486; // Alternative Background
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--gray-200);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 1200px;
    background: var(--gray-200);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    text-align: center;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
