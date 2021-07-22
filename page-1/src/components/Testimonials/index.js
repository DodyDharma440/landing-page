import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { testimonials } from "constants/testimonials";
import { Avatar } from "styles";

const CarouselWrapper = styled.div`
  min-height: 100%;
`;

const CarouselItem = styled.div`
  max-width: ${(p) => p.theme.breakpoints.sm};
  padding-top: 2rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  text-align: center;
`;

const TestiDesc = styled.p`
  margin: 1rem 0;
`;

const TestiName = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0.5rem 1rem;
  :focus {
    outline: none;
  }
  @media ${(p) => p.theme.breakpoints.up.sm} {
    display: none;
  }
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 0 0.4rem;
  cursor: pointer;
`;

const IndicatorActive = styled(Indicator)`
  background-color: ${(p) => p.theme.colors.primary};
`;

const Testimonials = () => {
  const renderArrowPrev = (clickHandler, hasPrev, label) => {
    return (
      hasPrev && (
        <ArrowButton style={{ left: 15 }} onClick={clickHandler}>
          <HiArrowNarrowLeft size={20} />
        </ArrowButton>
      )
    );
  };

  const renderArrowNext = (clickHandler, hasNext, label) => {
    return (
      hasNext && (
        <ArrowButton style={{ right: 15 }} onClick={clickHandler}>
          <HiArrowNarrowRight size={20} />
        </ArrowButton>
      )
    );
  };

  const renderIndicator = (clickHandler, isSelected, index, label) => {
    if (isSelected) {
      return <IndicatorActive aria-label={`Selected: ${label} ${index + 1}`} />;
    }

    return (
      <Indicator
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <CarouselWrapper>
      <Carousel
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        swipeable
        autoPlay
        interval={3000}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        renderIndicator={renderIndicator}
      >
        {testimonials.map((el, id) => (
          <CarouselItem key={id}>
            <Avatar src={el.avatar} />
            <TestiDesc>{`"${el.description}"`}</TestiDesc>
            <TestiName>{el.name}</TestiName>
            <p>{el.work}</p>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default Testimonials;
