import React from "react";
import styled from "styled-components";
import { InterLightWhite23px, InterNormalWhite75px, InterSemiBoldWhite45px } from "../../styledMixins";


function Roadmap() {
  return (
    <Roadmap1>
      <Roadmap2>Roadmap</Roadmap2>
      <PhaseContainer>
        <Phase01>Phase 01/</Phase01>
        <Phase02>Phase 02/</Phase02>
        <Phase03>Phase 03/</Phase03>
      </PhaseContainer>
      <FlexRow>
        <MintOut1111Cth>
          🐙&nbsp;&nbsp;Mint out 1,111 Cthulhu&#39;s
          <br />
          🐙 Create Cthulhu Website
          <br />
          🐙 Create The $CLU Coin!
          <br />
          🐙 Create Staking, Breeding and Create “The Dens” to Train your Cthulhus and stake for a multiplier
        </MintOut1111Cth>
        <DeployCthulhuAtt>
          🐙 Deploy Cthulhu Attribute and cosmetic customization
          <br />
          🐙 Create Mobile app where you will be able to use your Cthulhu&#39;s and earn $CLU
          <br />
          🐙 Allocate A percent of mint funds towards partnerships marketing and merch drops for Cthulhu holders. Merch
          drops will be able to buy using $CLU Coins. A percent of merch revenue will be redistributed to holders.
        </DeployCthulhuAtt>
        <ReleaseSneakPeak>
          🐙 Release Sneak peaks of our gen 2 collection
          <br />
          🐙 Create an in depth Cthulhu Defi Metaverse <br />
          🐙 Create Cthulhu NFT Launchpad
          <br />
          🐙 Release Roadmap 2.0
          <br />
          🐙 Create dating app for single Cthulhu’s to match and breed
        </ReleaseSneakPeak>
      </FlexRow>
    </Roadmap1>
  );
}

const Roadmap1 = styled.div`
  position: absolute;
  width: 963px;
  top: 1537px;
  left: 263px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 950px;
`;

const Roadmap2 = styled.div`
  ${InterNormalWhite75px}
  width: 595px;
  min-height: 107px;
  letter-spacing: 0;
`;

const PhaseContainer = styled.div`
  ${InterSemiBoldWhite45px}
  height: 106px;
  margin-top: 34px;
  margin-left: 10.32px;
  display: flex;
  align-items: flex-start;
  min-width: 864px;
`;

const Phase01 = styled.div`
  width: 198px;
  min-height: 106px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 72px;
`;

const Phase02 = styled.div`
  width: 204px;
  min-height: 106px;
  margin-left: 133px;
  letter-spacing: 0;
  line-height: 72px;
`;

const Phase03 = styled.div`
  width: 206px;
  min-height: 106px;
  margin-left: 123px;
  letter-spacing: 0;
  line-height: 72px;
`;

const FlexRow = styled.div`
  ${InterLightWhite23px}
  height: 645px;
  align-self: center;
  margin-top: 58px;
  margin-left: 2.32px;
  display: flex;
  align-items: flex-start;
  min-width: 945px;
`;

const MintOut1111Cth = styled.div`
  width: 286px;
  min-height: 348px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

const DeployCthulhuAtt = styled.div`
  width: 286px;
  min-height: 645px;
  margin-left: 43px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

const ReleaseSneakPeak = styled.div`
  width: 286px;
  min-height: 497px;
  margin-left: 43px;
  letter-spacing: 0;
  line-height: 36.8px;
`;

export default Roadmap;
