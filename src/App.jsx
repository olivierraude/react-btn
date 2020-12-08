import React from 'react';
import styled from 'styled-components'

const theme = {
  green: {
    default: '#21D19F',
    hover: '#45B69C'
  },
  pink: {
    default: '#F4CBC6',
    hover: '#F4AFAB'
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  border-radius: 5px;
  box-shadow: 0px 4px 4px lightgray;
  color: white;
  cursor: pointer;
  display: inline;
  font-size: 2em;
  margin: 0px 50px;
  margin-top: 50vh;
  outline: 0;
  padding: 15px;
  text-transform: uppercase;
  transition: ease background-color 300ms;
  &:hover {
      background-color: ${props => theme[props.theme].hover};
    }
  }
`
Button.defaultProps ={
  theme: 'green'
}

function clickMe() {
  alert('Hello World!');
}

export default function App() {

  return (
    <>
      <Container>
        <div>
          <Button onClick={clickMe}>
            Cliquez-moi
          </Button>
        </div>
        <div>
          <Button theme="pink" onClick={clickMe}>
            Cliquez-moi
          </Button>
        </div>
      </Container>
    </>
  )
} 