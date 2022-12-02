import styled from "styled-components"

export const CountdownContainer = styled.div`
  width: 100%;  
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;

  color: ${props => props.theme["gray-100"]};

  span {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem 1rem;
    border-radius: 2px;
    background-color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 750px){
    font-size: 6rem;
    line-height: 5rem;
    grid-template-columns: 21% 21% 6% 21% 21%;
  }

  @media(max-width: 550px){
    display: grid;
    grid-template-columns: 19% 19% 16% 19% 19%;
    gap: .5rem;
    font-size: 6rem;
    line-height: 3rem;
  }

  @media(max-width: 430px){
    font-size: 4rem;
    line-height: 2rem;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme["green-500"]};

  @media(max-width: 750px){
    width: 100%; 
    font-size: 6rem;
    overflow: initial;
  }

  @media(max-width: 550px){
    font-size: 5rem;
  }
`