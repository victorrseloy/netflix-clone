import React, { useState ,useRef,useLayoutEffect} from "react";
import styled from "styled-components";
import CatalogItem from "components/CatalogItem";

function clamp(number:number, min:number, max:number) {
  return Math.max(min, Math.min(number, max));
}

const CarroussellWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const CarroussellContainer = styled.div`
  overflow: scroll;
  scrollbar-width:none;
  -ms-overflow-style: none;
`;

interface CatalogCarroussellProps {}
const CatalogCarroussell: React.FunctionComponent<CatalogCarroussellProps> = (
  props
) => {
 

  return (
    <CarroussellContainer>
      <CarroussellWrapper >
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
