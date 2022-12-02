import styled from "styled-components"

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  color: ${props => props.theme["gray-100"]};

  span {
    height: 100%;

    padding: 2rem 1rem;
    border-radius: 2px;
    background-color: ${props => props.theme["gray-700"]};
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  overflow: hidden;

  display: flex;
  justify-content: center;

  color: ${props => props.theme["green-500"]};
`