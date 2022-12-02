import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;

  color: ${props => props.theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["red-500"]};


  &:not(:disabled):hover {
    background-color: ${props => props.theme["red-700"]};
  }
`