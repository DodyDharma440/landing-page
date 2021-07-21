import React from "react";
import styled from "styled-components";
import { Section, Container, Row } from "styles";
import { Title } from "components";

const RowContent = styled.div`
  width: calc(100% / 5);
  margin-bottom: 1.5rem;
  @media ${(p) => p.theme.breakpoints.up.lg} {
    width: 50%;
  }
  @media ${(p) => p.theme.breakpoints.up.md} {
    width: 100%;
  }
`;

const BlogCard = styled.div`
  padding: 1.5rem;
  margin: 0px 0.5rem;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 1rem;
  border-bottom-left-radius: 0px;
  transition: all 0.3s;
  :hover {
    transform: translateY(-10px);
    box-shadow: 1px 2px 5px #00000030;
  }
`;

const BlogDate = styled.h5`
  font-weight: bold;
  opacity: 0.7;
`;

const BlogTitle = styled.h4`
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const BlogDesc = styled.p`
  line-height: 1.5;
`;

const Link = styled.a``;

const Blog = () => {
  return (
    <Section id="blog" background="background2">
      <Container>
        <Title align="center" title="Latest Blog Posts" subtitle="Blog" />
        <Row>
          {[1, 2, 3, 4, 5].map((index) => (
            <RowContent key={index}>
              <Link href="#">
                <BlogCard>
                  <BlogDate>May 12th, 2020</BlogDate>
                  <BlogTitle>Far far away, behind the word mountains</BlogTitle>
                  <BlogDesc>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </BlogDesc>
                </BlogCard>
              </Link>
            </RowContent>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Blog;
