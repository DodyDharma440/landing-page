import React from "react";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
import { Transition } from "react-transition-group";

const MenuCloseButton = styled.div`
  cursor: pointer;
  top: 1rem;
  right: 115px;
  position: absolute;
  @media ${(p) => p.theme.breakpoints.max.md} {
    text-align: end;
    position: unset;
  }
`;

const MenuContainer = styled.div`
  padding: 130px 115px;
  max-width: 500px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.colors.background.primary};
  box-shadow: 1px 1px 3px #00000026;
  z-index: 999;
  @media ${(p) => p.theme.breakpoints.max.md} {
    padding: 1.5rem;
    max-width: 300px;
  }
`;

const MenuTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 6rem;
  @media ${(p) => p.theme.breakpoints.max.md} {
    margin-bottom: 2rem;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  line-height: 1rem;
`;

const MenuListItem = styled.li`
  margin-bottom: 1.6rem;
`;

const MenuLink = styled.a`
  font-weight: 400;
  font-size: 20px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

const MenuBar = ({ isOpen, onClose }) => {
  const DURATION = 300;

  const defaultStyle = {
    transition: `all ${DURATION}ms ease-in-out`,
    left: "-100%",
  };

  const transitionStyles = {
    entering: { left: 0 },
    entered: { left: 0 },
    exiting: { left: "-100%" },
    exited: { left: "-100%" },
  };

  return (
    <Transition in={isOpen} timeout={DURATION}>
      {(state) => (
        <MenuContainer style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <MenuCloseButton onClick={onClose}>
            <HiX size={36} />
          </MenuCloseButton>
          <MenuTitle>Beyond</MenuTitle>
          <MenuList>
            <MenuListItem>
              <MenuLink>Home</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink>Packages</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink>Pages</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink>Blog</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink>Contact</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuContainer>
      )}
    </Transition>
  );
};

export default MenuBar;
