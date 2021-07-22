import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { Container, Button, Divider, NavLink } from "styles";
import { Drawer } from "components";
import { navLinks } from "constants/navLinks";
import { useDisclosure } from "hooks";

const Navbar = styled.div`
  background-color: ${(p) => (p.isTop ? "transparent" : "#fff")};
  transition: all 0.5s ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 1rem 0;
  box-shadow: ${(p) => !p.isTop && "0 0 5px #00000033"};
  @media ${(p) => p.theme.breakpoints.up.md} {
    padding: ${(p) => (p.isTop ? "1rem 0" : "0.5rem 0")};
  }
`;

const Content = styled.div``;

const AppLogo = styled.h1`
  font-size: 1.5rem;
  color: ${(p) => p.theme.colors.primary};
  letter-spacing: 0.5px;
`;

const DesktopNavBar = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    display: flex;
  }
`;

const MobileNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    display: none;
  }
`;

const NavMenuButton = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavLinkList = styled.div`
  margin-bottom: 0.8rem;
`;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTop, setIsTop] = useState(true);

  const handleChangeColor = () => {
    if (window.pageYOffset > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.body.onscroll = handleChangeColor;
  }, []);

  return (
    <Navbar isTop={isTop}>
      <Container>
        <DesktopNavBar>
          <AppLogo>Design</AppLogo>
          <NavLinks>
            {navLinks.map((nav, index) => (
              <NavLink key={index} href={nav.path}>
                {nav.label}
              </NavLink>
            ))}
          </NavLinks>
          <Button variant="outlined">Free Templates</Button>
        </DesktopNavBar>
        <MobileNavBar>
          <AppLogo>Design</AppLogo>
          <NavMenuButton onClick={onOpen}>
            <HiMenu size={30} />
          </NavMenuButton>
          <Drawer position="left" open={isOpen} onClose={onClose}>
            <AppLogo>Design</AppLogo>
            <Divider style={{ margin: "0.8rem 0" }} />
            {navLinks.map((nav, index) => (
              <NavLinkList key={index}>
                <NavLink
                  onClick={onClose}
                  style={{ margin: 0 }}
                  href={nav.path}
                >
                  {nav.label}
                </NavLink>
              </NavLinkList>
            ))}
          </Drawer>
        </MobileNavBar>
      </Container>
    </Navbar>
  );
};

export default Header;
