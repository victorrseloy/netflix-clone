import * as React from "react";
import styled from "styled-components";

interface itemProps {
  alternate?: boolean | undefined;
}

const Item = styled.div<itemProps>`
  box-sizing: border-box;
  min-width: 50%;
  height: 140px;
  background-color: green;
  border-radius: 3px;
  margin: 0 5px;
  background-image: ${(props) =>
    props.alternate
      ? `url("https://occ-0-769-768.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXuMUwXKcs7UyGSJ-9-GiQ_QhllziHA3E4s8A9zg-f75VcyE190TZi0dfpGRhAQRLa3rg9XDz05dwi9fbmp9MlL6LAM.webp?r=2ac")`
      : `url("https://occ-0-769-768.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWGIqnOTz0bKl0FKDZLc810tpErb3Q-BZiONLqzdhwzRGQgMDMqRfpIMNokDmgLZzNSuJQJrCn9SsHh9FIZTcrO7PNM.webp?r=51e")`};
  background-size: cover;
  @media (min-width: 800px) {
    min-width: 33%;
  }
`;

interface ICatalogItemProps {
  alternate?: boolean | undefined;
}

const CatalogItem: React.FunctionComponent<ICatalogItemProps> = (props) => {
  return <Item alternate={props.alternate} />;
};

export default CatalogItem;
