import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Crimson Text", serif;
  font-weight: 400;
  text-align: center;
  font-style: normal;
  color: #000000;
`

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F3EEE1;
  width: 100%;

  a {
    text-decoration: none;
  }

  h1 {
    font-family: "Mogra", system-ui;
    font-size: 6rem;
    font-weight: 700;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  li {
    text-align: left;
    font-size: 2rem;
    font-weight: 400
  }

  div#intro-text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    width: 70%;
    height: 500px;

    a {
      text-decoration: none;
      text-align: center;
      color: black;
      font-size: 2rem;
    }

    a:visited {
      text-decoration: none;
      color: black;
    }
  }

  div#navigation {

    a {
      text-decoration: none;
      text-align: center;
      padding: 0 10px;
      color: black;
      font-size: 2rem;
    }

    a:visited {
      text-decoration: none;
      color: black;
    }
  }
`

