import React from "react";

import NavBar from "components/NavBar";
import VideoBannerFull from "components/VideoBannerFull";
import CatalogSection from "components/CatalogSection";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const CatalogScreen: React.FC = () => (
  <Wrapper>
    <NavBar />
    <VideoBannerFull />
    <CatalogSection />
    <CatalogSection />
    <CatalogSection />
    <CatalogSection />
    <CatalogSection />
    <CatalogSection />
  </Wrapper>
);

export default CatalogScreen;
