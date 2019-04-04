import React from 'react';

import { View, PrimaryButton } from '@copa/ui';

import s from './styles.scss';

const App = () => (
  <div>
    <PrimaryButton> here here </PrimaryButton>
    <View className={s.view}>I am just rendering</View>
  </div>
);

export default App;
