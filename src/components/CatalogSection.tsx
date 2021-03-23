import React from "react";
import styled from "styled-components";
import CatalogCarroussel from "components/CatalogCarroussel";

const CatalogSectionContainer = styled.div``;

const CatalogSectionTitle = styled.span`
  color: white;
`;

const CatalogSection = () => (
  <CatalogSectionContainer>
    <CatalogSectionTitle>Section Title</CatalogSectionTitle>
    <CatalogCarroussel />
  </CatalogSectionContainer>
);

export default CatalogSection;
