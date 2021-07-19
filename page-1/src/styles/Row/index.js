import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(p) => (!p.align ? "center" : p.align)};
  justify-content: space-between;
  gap: ${(p) => (p.gap ? p.gap : 0)};
`;

export default Row;
