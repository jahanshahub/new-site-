import React from "react";
import styled from "styled-components";
import { Border1pxLightBackground, InterLightWhite20px } from "../../styledMixins";


function ButtonDefault2(props) {
  const { chevronRight1, className } = props;

  return (
    <a href="mint.cthulhuclubnft.com" target="_blank">
      <ButtonDefault className={`button-default-2 ${className || ""}`}>
        <DiscoverMore className="discover-more-1">Go to Mint Page</DiscoverMore>
        <ChevronRight1 className="chevron-right-1-1" src={chevronRight1} />
      </ButtonDefault>
    </a>
  );
}

const ButtonDefault = styled.div`
  ${Border1pxLightBackground}
  position: absolute;
  width: 195px;
  height: 108px;
  top: 376px;
  left: 385px;
  display: flex;
  border-radius: 50px;
  cursor: pointer;

  &.button-default-2.button-default-3 {
    padding: 0 7px;
    justify-content: flex-end;
    align-items: center;
    min-width: 195px;
    width: unset;
  }
`;

const DiscoverMore = styled.div`
  ${InterLightWhite20px}
  margin-top: 38px;
  width: 122px;
  height: 32px;
  margin-left: 32px;
  text-align: center;
  letter-spacing: -2.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const ChevronRight1 = styled.img`
  margin-top: 42px;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const DiscoverMore1 = styled.div`
  ${InterLightWhite20px}

  .button-default-2.button-default-3  & {
    min-height: 32px;
    min-width: 122px;
    margin-top: unset;
    width: unset;
    height: unset;
    margin-left: unset;
  }
`;

const ChevronRight11 = styled.img`
  .button-default-2.button-default-3 & {
    margin-top: unset;
  }
`;

export default ButtonDefault2;
