import React from "react";
import styled from "styled-components";
import { H3, Link } from "../../styledMixins";
import "./DesktopNavbar.css";

function DesktopNavbar(props) {
  const { x3805C48449A948A3Bd8A12A1C45Fa08A1, cthulhuClubNft, place, mint, roadmap, faq } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-navbar screen">
        <X3805C48449A948A3BD8A12A1C45FA08A1 src={x3805C48449A948A3Bd8A12A1C45Fa08A1} />
        <CthulhuClubNFT>{cthulhuClubNft}</CthulhuClubNFT>
        <Right>
          <DesktopMenu>
            <TextLink>
              <Place>{place}</Place>
            </TextLink>
            <a href="https://mint.cthulhuclubnft.com" target="_blank">
              <TextLink1>
                <Mint>{mint}</Mint>
              </TextLink1>
            </a>
            <TextLink2>
              <Roadmap>{roadmap}</Roadmap>
            </TextLink2>
            <TextLink3>
              <FAQ>{faq}</FAQ>
            </TextLink3>
          </DesktopMenu>
        </Right>
      </div>
    </div>
  );
}

const X3805C48449A948A3BD8A12A1C45FA08A1 = styled.img`
  width: 62px;
  height: 79px;
  margin-left: 4px;
  margin-top: 4.61px;
  object-fit: cover;
`;

const CthulhuClubNFT = styled.div`
  ${H3}
  width: 279px;
  min-height: 43px;
  margin-left: 33px;
  margin-top: 31px;
  font-weight: 700;
  color: var(--light-background);
  line-height: 36px;
  white-space: nowrap;
`;

const Right = styled.div`
  width: 351px;
  margin-left: 209px;
  margin-top: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DesktopMenu = styled.div`
  width: 351px;
  display: flex;
`;

const TextLink = styled.div`
  width: 71px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const Place = styled.div`
  ${Link}
  min-height: 28px;
  min-width: 51px;
  font-weight: 600;
  color: var(--light-background);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const TextLink1 = styled.div`
  width: 59px;
  height: 48px;
  margin-left: 21px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
`;

const Mint = styled.div`
  ${Link}
  min-height: 28px;
  min-width: 39px;
  font-weight: 600;
  color: var(--light-background);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const TextLink2 = styled.div`
  width: 102px;
  height: 48px;
  margin-left: 21px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const Roadmap = styled.div`
  ${Link}
  min-height: 28px;
  min-width: 82px;
  font-weight: 600;
  color: var(--light-background);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

const TextLink3 = styled.div`
  width: 56px;
  height: 48px;
  margin-left: 21px;
  display: flex;
  padding: 0 10px;
  align-items: center;
`;

const FAQ = styled.div`
  ${Link}
  min-height: 28px;
  min-width: 36px;
  font-weight: 600;
  color: var(--light-background);
  text-align: center;
  line-height: 28px;
  white-space: nowrap;
`;

export default DesktopNavbar;
