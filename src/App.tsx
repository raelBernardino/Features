import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { Welcome } from './components';
import { featureIndexState, featuresListState } from './recoil/atoms'

const App = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(featureIndexState);
  const [featuresList, setFeaturesList] = useRecoilState(featuresListState)

  const CurrentComponent = styled(featuresList[currentIndex])`
  `

  return (
    <div>
      <CurrentComponent />
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>next</button>
    </div>
  );
};

export default App;