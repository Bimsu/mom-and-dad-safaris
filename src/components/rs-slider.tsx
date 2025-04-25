import styled from "styled-components";
import { useState } from 'react';
import { useEffect } from 'react';

  const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const CarouselSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

type Props = {
  slides: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export const Carousel: React.FC<Props> = ({
  slides,
  autoplay = true,
  autoplayInterval = 2000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {

    if (!autoplay) return;

    const timer = setInterval(() => {
      next();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval]);

  const prev = () => {
    setCurrent(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide
          key={index}
          src={slide}
          className={index === current ? 'active' : ''}
        />
      ))}

      <ArrowButton className="left" onClick={prev}>
        prev
      </ArrowButton>
      <ArrowButton className="right" onClick={next}>
        next
      </ArrowButton>
    </CarouselContainer>
  );
};