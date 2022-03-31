import React from "react";
import styled from "styled-components";
import { InterLightWhite16px, InterNormalWhite80px, InterNormalWhite129px } from "../../styledMixins";


function Headline(props) {
  const { className } = props;

  return (
    <Headline1 className={`headline-1 ${className || ""}`}>
      <WelcomeToCthulhuClub className="welcome-to-cthulhu-club-1" id="welcome-to-cthulhu-club">
        Welcome to Cthulhu Club
      </WelcomeToCthulhuClub>
      <CthulhuWelcomesYou className="cthulhu-welcomes-you">
        Cthulhu welcomes you to the newest NFT craze in community building and passive income. Learn more about the
        Cthulhu Club and how you can join this exciting new community of Cthulhus!
      </CthulhuWelcomesYou>
      <Group48 className="group-48-1">
        <BuiltOn className="built-on-1">Built on</BuiltOn>
        <LogoBlack1 className="logo-black-1-1" src="/img/logo-black-1@2x.png" />
      </Group48>
    </Headline1>
  );
}

const Headline1 = styled.div`
  position: absolute;
  width: 670px;
  height: 320px;
  top: 439px;
  left: 343px;
  display: flex;
  flex-direction: column;

  &.headline-1.headline-2 {
    top: 346px;
    left: 252px;
  }

  &.headline-1.headline-3 {
    top: 346px;
    left: 252px;
    align-items: flex-start;
    min-height: 320px;
    height: unset;
  }

  &.headline-1.headline-4 {
    align-items: flex-start;
    min-height: 320px;
    height: unset;
  }
`;

const WelcomeToCthulhuClub = styled.div`
  ${InterNormalWhite80px}
  width: 634px;
  height: 198px;
  letter-spacing: 0;
`;

const CthulhuWelcomesYou = styled.p`
  ${InterLightWhite16px}
  height: 78px;
  margin-top: 50px;
  letter-spacing: 0;
  line-height: 25.6px;
`;

const Group48 = styled.div`
  width: 104.1208724975586px;
  height: 35.00011444091797px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const BuiltOn = styled.div`
  ${InterNormalWhite129px}
  width: 72.38948059082031px;
  height: 15.512031555175781px;
  letter-spacing: 0;
`;

const LogoBlack1 = styled.img`
  margin-left: -0.2px;
  width: 102.1208724975586px;
  height: 12.378173828125px;
  margin-top: 7px;
`;

const LogoBlack11 = styled.img`
  .headline-1.headline-2 & {
    width: 102.120849609375px;
  }
`;

const WelcomeToCthulhuClub1 = styled.div`
  ${InterNormalWhite80px}

  .headline-1.headline-3  & {
    min-height: 198px;
    height: unset;
  }
`;

const CthulhuWelcomesYou1 = styled.p`
  ${InterLightWhite16px}

  .headline-1.headline-3  & {
    width: 670px;
    min-height: 78px;
    height: unset;
  }
`;

const Group481 = styled.div`
  .headline-1.headline-3 & {
    width: 104px;
    align-items: flex-start;
    min-height: 35px;
    height: unset;
  }
`;

const BuiltOn1 = styled.div`
  ${InterNormalWhite129px}

  .headline-1.headline-3  & {
    width: 72px;
    min-height: 16px;
    height: unset;
  }
`;

const LogoBlack12 = styled.img`
  .headline-1.headline-3 & {
    width: 102px;
    height: 12px;
    margin-top: 7px;
    margin-left: -0.44px;
  }
`;

const WelcomeToCthulhuClub2 = styled.div`
  ${InterNormalWhite80px}

  .headline-1.headline-4  & {
    min-height: 198px;
    height: unset;
  }
`;

const CthulhuWelcomesYou2 = styled.p`
  ${InterLightWhite16px}

  .headline-1.headline-4  & {
    width: 670px;
    min-height: 78px;
    height: unset;
  }
`;

const Group482 = styled.div`
  .headline-1.headline-4 & {
    width: 104px;
    align-items: flex-start;
    min-height: 35px;
    height: unset;
  }
`;

const BuiltOn2 = styled.div`
  ${InterNormalWhite129px}

  .headline-1.headline-4  & {
    width: 72px;
    min-height: 16px;
    height: unset;
  }
`;

const LogoBlack13 = styled.img`
  .headline-1.headline-4 & {
    width: 102px;
    height: 12px;
    margin-top: 7px;
    margin-left: -0.44px;
  }
`;

export default Headline;
