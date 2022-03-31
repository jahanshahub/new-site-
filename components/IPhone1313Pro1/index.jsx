import React from "react";
import Group672 from "../Group672";
import NFTList3 from "../NFTList3";
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
import "./IPhone1313Pro1.css";

function IPhone1313Pro1(props) {
  const {
    cthulhuClub,
    line22,
    nftSneakPeak,
    x1261,
    x2170,
    x2705,
    welcomeToCthulhuClub,
    builtOn,
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
    x3805C48449A948A3Bd8A12A1C45Fa08A1,
    cthulhuClubNft,
    place,
    mint,
    group672Props,
    nFTList31Props,
    nFTList32Props,
    nFTList33Props,
    textLinkProps,
    textLink2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-1 screen">
        <OverlapGroup3>
          <CthulhuClub src={cthulhuClub} />
          <Line22 src={line22} />
          <SneakPeak>
            <NFTSneakPeak>{nftSneakPeak}</NFTSneakPeak>
            <OverlapGroup1>
              <Group672 nFTList1Props={group672Props.nFTList1Props} nFTList2Props={group672Props.nFTList2Props} />
              <NftListContainer>
                <NFTList3 className={nFTList31Props.className} />
                <NFTList3 className={nFTList32Props.className} />
                <NFTList3 className={nFTList33Props.className} />
              </NftListContainer>
              <X1261 src={x1261} />
              <X2170 src={x2170} />
              <X2705 src={x2705} />
            </OverlapGroup1>
          </SneakPeak>
          <WelcomeToCthulhuClub>{welcomeToCthulhuClub}</WelcomeToCthulhuClub>
          <Headline>
            <BuiltOn>{builtOn}</BuiltOn>
            <LogoBlack1 src="/img/logo-black-1@2x.svg" />
          </Headline>
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
          <OverlapGroup2>
            <X3805C48449A948A3BD8A12A1C45FA08A1 src={x3805C48449A948A3Bd8A12A1C45Fa08A1} />
            <OverlapGroup>
              <CthulhuClubNFT>{cthulhuClubNft}</CthulhuClubNFT>
              <Right>
                <DesktopMenu>
                  <TextLink1>
                    <Place>{place}</Place>
                  </TextLink1>
                  <a href="https://mint.cthulhuclubnft.com" target="_blank">
                    <TextLink3>
                      <Mint>{mint}</Mint>
                    </TextLink3>
                  </a>
                  <TextLink className={textLinkProps.className} />
                  <TextLink2 className={textLink2Props.className} />
                </DesktopMenu>
              </Right>
            </OverlapGroup>
          </OverlapGroup2>
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 392px;
  height: 3754px;
  position: relative;
`;

const CthulhuClub = styled.img`
  position: absolute;
  width: 390px;
  height: 3754px;
  top: 0;
  left: 0;
`;

const Line22 = styled.img`
  position: absolute;
  width: 390px;
  height: 1px;
  top: 3612px;
  left: 0;
`;

const SneakPeak = styled.div`
  position: absolute;
  width: 366px;
  top: 453px;
  left: 8px;
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

const WelcomeToCthulhuClub = styled.div`
  ${InterNormalWhite23px}
  position: absolute;
  width: 159px;
  top: 101px;
  left: 17px;
  letter-spacing: 0;
`;

const Headline = styled.div`
  position: absolute;
  width: 101px;
  top: 312px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 42px;
`;

const BuiltOn = styled.div`
  ${InterNormalWhite17px}
  width: 72px;
  min-height: 16px;
  letter-spacing: 0;
`;

const LogoBlack1 = styled.img`
  width: 101px;
  height: 13px;
  margin-top: 13px;
`;

const HowManyWillBeMin = styled.div`
  ${InterBoldWhite25px}
  position: absolute;
  width: 357px;
  top: 2501px;
  left: 16px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 52px;
  top: 0;
  left: 0;
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
  align-items: flex-start;
  overflow: hidden;
`;

const DesktopMenu = styled.div`
  width: 204px;
  position: relative;
  margin-top: -13.5px;
  display: flex;
  align-items: flex-start;
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

export default IPhone1313Pro1;
