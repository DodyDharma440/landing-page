import styled from "styled-components";

const Avatar = styled.img`
  width: ${(p) => (p.width ? p.width : "70px")} !important;
  height: ${(p) => (p.height ? p.height : "70px")};
  border-radius: 50%;
`;

export default Avatar;
