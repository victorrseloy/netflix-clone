import React, { useState } from "react";
import styled from "styled-components";
import CatalogItem from "components/CatalogItem";
import { useSwipeable } from "react-swipeable";

const CarroussellWrapper = styled.div<wrapperProps>`
  display: flex;
  flex-wrap: nowrap;

  transform: translate(${(props) => props.translated}px, 0);
`;

const CarroussellContainer = styled.div`
  overflow: hidden;
`;

interface wrapperProps {
  translated: number;
}

interface CatalogCarroussellProps {}

const CatalogCarroussell: React.FunctionComponent<CatalogCarroussellProps> = (
  props
) => {
  const [pos, setPos] = useState<number>(0);
  const [initialPos, setInitialPos] = useState<number>(0);
  const [timeout, setTimeoutId] = useState<NodeJS.Timeout>();
  const speedDecay = 0.3;
  const stepInMs = 5;

  const decaySpeedFunction = (currentSpeed: number, currentPos: number) => {
    const signal = currentSpeed / Math.abs(currentSpeed);
    const opositeSignal = signal * -1;
    const newPost2 = currentPos + currentSpeed;

    setPos(currentPos + currentSpeed);
    const newSpeed = currentSpeed + opositeSignal * speedDecay;
    if (newSpeed / signal > 0) {
      setTimeoutId(
        setTimeout(() => decaySpeedFunction(newSpeed, newPost2), stepInMs)
      );
    }
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setInitialPos(pos);
      if (timeout) {
        clearTimeout(timeout);
      }

      setTimeout(
        () => decaySpeedFunction(eventData.vxvy[0] * 15, pos),
        stepInMs
      );
    },
    onSwiping: (eventData) => {
      setPos(initialPos + eventData.deltaX);
      //   console.log(eventData);
    },
    onSwipeStart: () => {
      setInitialPos(pos);
    },
  });
  return (
    <CarroussellContainer>
      <CarroussellWrapper translated={pos} {...handlers}>
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
        <CatalogItem />
        <CatalogItem alternate={true} />
      </CarroussellWrapper>
    </CarroussellContainer>
  );
};

export default CatalogCarroussell;
