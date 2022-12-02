import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 74rem;
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;

  margin: 5rem auto;
  padding: 2.5rem;

  border-radius: 8px;
  background-color: ${props => props.theme["gray-800"]};

  @media(max-width: 750px){
    padding-inline: 1.2rem;
  }
`