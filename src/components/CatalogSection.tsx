import React from "react";
import styled from "styled-components";
import CatalogCarroussel from "components/CatalogCarroussel";

const CatalogSectionContainer = styled.div``;

const CatalogSectionTitle = styled.span`
  color: white;
  font-family:'Netflix Sans';
  font-size:12px;
  font-weight:700;
`;

const CatalogSection = () => (
  <CatalogSectionContainer>
    <CatalogSectionTitle>Watch again</CatalogSectionTitle>
    <CatalogCarroussel />
  </CatalogSectionContainer>
);

export default CatalogSection;
