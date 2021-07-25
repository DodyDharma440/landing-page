import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Button as ButtonStyle, ArrowIconButton } from "components/styled";

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyle {...props}>
      {children}
      <ArrowIconButton>
        <HiOutlineArrowNarrowRight size={20} />
      </ArrowIconButton>
    </ButtonStyle>
  );
};

export default Button;
