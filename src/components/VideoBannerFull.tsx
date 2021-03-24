import React from "react";
import styled from "styled-components";

const VideoBannerContainer = styled.div``;

const BannerImg = styled.img`
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.laptop} {
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const VideoBannerFull = () => {
  return (
    <VideoBannerContainer>
      <BannerImg src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZK9zWaFmABq58P8rYcaPyt40kN4fTnDR2IWLnJ4f5jMI9lGKEU-W3lAS4o65-DK0cAvEMY0lHkGDXlLOwEwt4h3NZ1Q.webp?r=a88"></BannerImg>
    </VideoBannerContainer>
  );
};

//

export default VideoBannerFull;
