import { HeaderContainer } from "./styles";

import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
// Assets
import LogoIgnite from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt=""/> 
      <nav>
        <NavLink to="/" title="Time">
          <Timer size={24}/>
        </NavLink>

        <NavLink to="/history" title="Historico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}