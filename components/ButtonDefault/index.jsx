import React from "react";
import styled from "styled-components";
import { Border1pxLightBackground, InterLightWhite26px } from "../../styledMixins";


function ButtonDefault(props) {
  const { chevronRight1, className } = props;

  return (
    <a href="mint.cthulhuclubnft.com" target="_blank">
      <ButtonDefault1 className={`button-default ${className || ""}`}>
        <DiscoverMore className="discover-more">Go to Mint Page</DiscoverMore>
        <ChevronRight1 className="chevron-right-1" src={chevronRight1} />
      </ButtonDefault1>
    </a>
  );
}

const ButtonDefault1 = styled.div`
  ${Border1pxLightBackground}
  position: absolute;
  width: 276px;
  height: 108px;
  top: 376px;
  left: 545px;
  display: flex;
  border-radius: 50px;
  cursor: pointer;

  &.button-default.button-default-1 {
    padding: 0 14px;
    justify-content: flex-end;
    align-items: center;
    min-width: 276px;
    width: unset;
  }
`;

const DiscoverMore = styled.div`
  ${InterLightWhite26px}
  margin-top: 33px;
  width: 196px;
  height: 42px;
  margin-left: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 41.6px;
  white-space: nowrap;
`;

const ChevronRight1 = styled.img`
  margin-top: 42px;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const DiscoverMore1 = styled.div`
  ${InterLightWhite26px}

  .button-default.button-default-1  & {
    min-height: 42px;
    min-width: 196px;
    margin-top: unset;
    width: unset;
    height: unset;
    margin-left: unset;
  }
`;

const ChevronRight11 = styled.img`
  .button-default.button-default-1 & {
    margin-top: unset;
  }
`;

export default ButtonDefault;
