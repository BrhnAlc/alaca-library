import React from 'react'
import {Nav,Logo,Menu,HamburgerIcon,MenuLink} from './Navbar.style'
import { menuIcon } from '../../helper/iconData'

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap" >

      <Logo>Alaca Library</Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>
      <Menu >
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
      </Menu>
      </Nav>
  )
}

export default Navbar