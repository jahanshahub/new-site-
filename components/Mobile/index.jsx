import React from "react";
import NFTList from "../NFTList";
import TextLink from "../TextLink";
import TextLink2 from "../TextLink2";
import styled from "styled-components";
import {
  MontserratSemiBoldWhite8px,
  InterNormalWhite30px,
  MontserratBoldWhite9px,
  InterNormalWhite17px,
  InterBoldWhite25px,
  InterNormalWhite23px,
} from "../../styledMixins";
import "./Mobile.css";

function Mobile(props) {
  const {
    overlapGroup3,
    welcomeToCthulhuClub,
    builtOn,
    logoBlack1,
    nftSneakPeak,
    x1261,
    x2170,
    x2705,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    line22,
    x3805C48449A948A3Bd8A12A1C45Fa08A1,
    cthulhuClubNft,
    place,
    mint,
    nFTList1Props,
    nFTList2Props,
    nFTList3Props,
    nFTList4Props,
    nFTList5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile screen">
        <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <WelcomeToCthulhuClub id="welcome-to-cthulhu-club">{welcomeToCthulhuClub}</WelcomeToCthulhuClub>
          <Headline>
            <Group48>
              <BuiltOn>{builtOn}</BuiltOn>
              <LogoBlack1 src={logoBlack1} />
            </Group48>
          </Headline>
          <SneakPeak>
            <NFTSneakPeak>{nftSneakPeak}</NFTSneakPeak>
            <OverlapGroup1>
              <Group67>
                <NFTList src={nFTList1Props.src} />
                <NFTList src={nFTList2Props.src} className={nFTList2Props.className} />
              </Group67>
              <NftListContainer>
                <NFTList src={nFTList3Props.src} className={nFTList3Props.className} />
                <NFTList src={nFTList4Props.src} className={nFTList4Props.className} />
                <NFTList src={nFTList5Props.src} className={nFTList5Props.className} />
              </NftListContainer>
              <X1261 src={x1261} />
              <X2170 src={x2170} />
              <X2705 src={x2705} />
            </OverlapGroup1>
          </SneakPeak>
          <HowManyWillBeMin>
            <span className="inter-bold-white-25px">{spanText1}</span>
            <span className="inter-normal-white-19px">{spanText2}</span>
            <span className="inter-bold-white-25px">{spanText3}</span>
            <span className="inter-normal-white-25px">{spanText4}</span>
            <span className="inter-normal-white-19px">{spanText5}</span>
            <span className="inter-bold-white-25px">{spanText6}</span>
            <span className="inter-normal-white-25px">{spanText7}</span>
            <span className="inter-normal-white-19px">{spanText8}</span>
            <span className="inter-bold-white-25px">{spanText9}</span>
            <span className="inter-normal-white-25px">{spanText10}</span>
            <span className="inter-normal-white-19px">{spanText11}</span>
            <span className="inter-bold-white-25px">{spanText12}</span>
            <span className="inter-normal-white-19px">{spanText13}</span>
            <span className="inter-bold-white-25px">{spanText14}</span>
            <span className="inter-normal-white-25px">{spanText15}</span>
          </HowManyWillBeMin>
          <Line22 src={line22} />
        </OverlapGroup3>
        <Topbar>
          <OverlapGroup2>
            <X3805C48449A948A3BD8A12A1C45FA08A1 src={x3805C48449A948A3Bd8A12A1C45Fa08A1} />
            <OverlapGroup>
              <CthulhuClubNFT>{cthulhuClubNft}</CthulhuClubNFT>
              <Right>
                <DesktopMenu>
                  <a href="#welcome-to-cthulhu-club">
                    <TextLink1>
                      <Place>{place}</Place>
                    </TextLink1>
                  </a>
                  <a href="https://mint.cthulhuclubnft.com" target="_blank">
                    <TextLink3>
                      <Mint>{mint}</Mint>
                    </TextLink3>
                  </a>
                  <TextLink />
                  <TextLink2 />
                </DesktopMenu>
              </Right>
            </OverlapGroup>
          </OverlapGroup2>
        </Topbar>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 390px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 101px 0;
  align-items: flex-start;
  min-height: 3754px;
  background-size: 100% 100%;
`;

const WelcomeToCthulhuClub = styled.div`
  ${InterNormalWhite23px}
  width: 159px;
  min-height: 71px;
  margin-left: 17px;
  letter-spacing: 0;
`;

const Headline = styled.div`
  width: 92px;
  height: 33px;
  margin-top: 149px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Group48 = styled.div`
  margin-left: 2px;
  width: 94px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 33.28689193725586px;
`;

const BuiltOn = styled.div`
  ${InterNormalWhite17px}
  width: 65px;
  min-height: 13px;
  letter-spacing: 0;
`;

const LogoBlack1 = styled.img`
  width: 92px;
  height: 10px;
  margin-top: 10px;
`;

const SneakPeak = styled.div`
  width: 366px;
  align-self: center;
  margin-top: 99px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 280px;
`;

const NFTSneakPeak = styled.div`
  ${InterNormalWhite30px}
  width: 258px;
  min-height: 30px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 362px;
  height: 212px;
  position: relative;
  margin-top: 38px;
  margin-left: 2px;
`;

const Group67 = styled.div`
  position: absolute;
  height: 212px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 362px;
`;

const NftListContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 131px;
  top: 0;
  left: 129px;
`;

const X1261 = styled.img`
  position: absolute;
  width: 98px;
  height: 166px;
  top: 21px;
  left: 6px;
  object-fit: cover;
`;

const X2170 = styled.img`
  position: absolute;
  width: 98px;
  height: 166px;
  top: 21px;
  left: 247px;
  object-fit: cover;
`;

const X2705 = styled.img`
  position: absolute;
  width: 65px;
  height: 109px;
  top: 9px;
  left: 147px;
  object-fit: cover;
`;

const HowManyWillBeMin = styled.div`
  ${InterBoldWhite25px}
  width: 357px;
  min-height: 652px;
  align-self: center;
  margin-top: 1768px;
  margin-right: 1px;
  letter-spacing: 0;
`;

const Line22 = styled.img`
  width: 390px;
  height: 1px;
  margin-top: 458px;
`;

const Topbar = styled.div`
  position: fixed;
  height: 52px;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  min-width: 392px;
`;

const OverlapGroup2 = styled.div`
  height: 52px;
  display: flex;
  padding: 5px 8px;
  align-items: flex-start;
  min-width: 390px;
  background-color: var(--black-2);
`;

const X3805C48449A948A3BD8A12A1C45FA08A1 = styled.img`
  width: 39px;
  height: 40px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  width: 325px;
  height: 29px;
  position: relative;
  margin-left: 6px;
  margin-top: 2px;
`;

const CthulhuClubNFT = styled.div`
  ${MontserratBoldWhite9px}
  position: absolute;
  width: 169px;
  top: 0;
  left: 0;
  letter-spacing: 0.1px;
  line-height: 36px;
  white-space: nowrap;
`;

const Right = styled.div`
  position: absolute;
  width: 186px;
  height: 21px;
  top: 8px;
  left: 139px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DesktopMenu = styled.div`
  margin-left: 18px;
  width: 204px;
  position: relative;
  display: flex;
`;

const TextLink1 = styled.div`
  width: 46px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
`;

const Place = styled.div`
  ${MontserratSemiBoldWhite8px}
  min-height: 28px;
  min-width: 26px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
  white-space: nowrap;
`;

const TextLink3 = styled.div`
  width: 40px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
`;

const Mint = styled.div`
  ${MontserratSemiBoldWhite8px}
  min-height: 28px;
  min-width: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
  white-space: nowrap;
`;

export default Mobile;
