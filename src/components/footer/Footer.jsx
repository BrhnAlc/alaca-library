
import { darkIcon, lightIcon } from "../../helper/iconData"
import { FooterBtn, FooterContainer } from "./Footer.style"
import { useThemeContext } from "../../context/ThemeContext"



const Footer = () => {
  const [myTheme, setMyTheme] = useThemeContext()
  return (
    <FooterContainer>
      <FooterBtn>{myTheme===" light" ? lightIcon : darkIcon }</FooterBtn>
    </FooterContainer>
  )
}

export default Footer