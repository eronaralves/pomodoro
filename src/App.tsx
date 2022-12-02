import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import {
  BrowserRouter as RouterDom
} from 'react-router-dom'
import { Router } from './Router'
import { CyclesContenxtProvider } from './contexts/CyclesContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterDom>
        <CyclesContenxtProvider>
          <Router/> 
        </CyclesContenxtProvider>
      </RouterDom>
      <GlobalStyle />
    </ThemeProvider>
  )
}
