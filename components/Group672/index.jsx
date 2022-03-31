import React from "react";
import NFTList3 from "../NFTList3";
import styled from "styled-components";


function Group672(props) {
  const { nFTList1Props, nFTList2Props } = props;

  return (
    <Group67>
      <NFTList3 className={nFTList1Props.className} />
      <NFTList3 className={nFTList2Props.className} />
    </Group67>
  );
}

const Group67 = styled.div`
  position: absolute;
  height: 212px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 362px;
`;

export default Group672;
