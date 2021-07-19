import React from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { Container, Button, Divider } from "styles";
import { Drawer } from "components";
import { navLinks } from "constants/navLinks";
import { useDisclosure } from "hooks";

const Content = styled.div`
  padding: 1rem 0;
`;

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
  } ;
`;

const MobileNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    display: none;
  } ;
`;

const NavMenuButton = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  font-weight: 300;
  transition: all 0.3s;
  margin: 0 0.5rem;
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const NavLinkList = styled.div`
  margin-bottom: 0.8rem;
`;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Content>
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
                <NavLink style={{ margin: 0 }} href={nav.path}>
                  {nav.label}
                </NavLink>
              </NavLinkList>
            ))}
          </Drawer>
        </MobileNavBar>
      </Content>
    </Container>
  );
};

export default Header;
