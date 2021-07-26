import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(p) => (p.justify ? p.justify : "space-between")};
  align-items: ${(p) => (p.align ? p.align : "center")};
  gap: ${(p) => (p.gap ? p.gap : "0")};
  position: ${(p) => p.position && p.position};
`;

export default FlexRow;
