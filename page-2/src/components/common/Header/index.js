import React from "react";
import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import { Container } from "components/styled";
import { Button, MenuBar } from "components/common";
import { useDisclosure } from "hooks";

const HeaderContainer = styled.div`
  max-height: 100px;
  background-color: ${(p) => p.theme.colors.background.primary};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: fixed;
  background-color: ${(p) => p.theme.colors.background.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 100;
`;

const Header = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <HeaderContainer>
      <Container>
        <Content>
          <MenuButton onClick={onOpen}>
            <HiMenuAlt2 size={36} />
          </MenuButton>
          <div></div>
          <Button>Book Now</Button>
        </Content>
      </Container>
      <MenuBar isOpen={isOpen} onClose={onClose} />
    </HeaderContainer>
  );
};

export default Header;
