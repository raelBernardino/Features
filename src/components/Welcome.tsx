import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
  BasicColumnFlexContainer,
  BoldLargeHeader,
  SmallThinText
} from '../styled-components';

const WelcomeHeader = styled(BoldLargeHeader)`

`
const WelcomeContainer = styled(BasicColumnFlexContainer)`

`


const Welcome: React.FC = () => {

  return (
    <BasicColumnFlexContainer>
      <WelcomeHeader>REACT FEATURES</WelcomeHeader>
      <SmallThinText>WELCOME</SmallThinText>
    </BasicColumnFlexContainer>
  );
};

export default Welcome;