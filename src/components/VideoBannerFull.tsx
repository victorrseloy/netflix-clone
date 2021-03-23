import React from "react";
import styled from "styled-components";

const VideoBannerContainer = styled.div`
  
`;

const BannerImg = styled.img`
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  width:100%;
`;

const VideoBannerFull = () => {
  return <VideoBannerContainer>
    <BannerImg src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTx0fi_iWr-QSP85WT_5JX-5TsagIg61_mBx6Mi2B4cMGHf7kk2LUThxd1breoPPtyU3xgftQBdbtr2yoNRLsYVKDSrB.webp?r=f1a"></BannerImg>
  </VideoBannerContainer>
}

// 

export default VideoBannerFull;
