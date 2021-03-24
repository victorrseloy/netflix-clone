import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import CatalogItem from "components/CatalogItem";

function clamp(number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max));
}

const ButtonComponent = styled.div`
  width: 50px;
  background-color: red;
  position: absolute;
  z-index: 1;
  height: 150px;
  left: 0;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  right: 0;
  &:nth-child(2) {
    left: initial;
    right: 0;
  }
`;

const CarroussellWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  overflow-y: hidden;
`;

const CarroussellContainer = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &:hover {
    ${ButtonComponent} {
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
`;

interface CatalogCarroussellProps {}
const CatalogCarroussell: React.FunctionComponent<CatalogCarroussellProps> = (
  props
) => {
  const carrousellRef = useRef<HTMLDivElement>(null);
  const scrollFunction = (dir: 1 | -1) => () => {
    if (carrousellRef) {
      const currentPos = carrousellRef.current?.scrollLeft || 0;
      const totalWidth = carrousellRef.current?.offsetWidth || 0;
      carrousellRef.current?.scroll({
        left: currentPos + dir * totalWidth,
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <CarroussellContainer>
      <ButtonComponent onClick={scrollFunction(-1)} />
      <ButtonComponent onClick={scrollFunction(1)} />
      <CarroussellWrapper ref={carrousellRef}>
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
