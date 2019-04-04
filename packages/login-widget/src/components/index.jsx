import React from 'react';

import { View, PrimaryButton } from '@copa/ui';

import s from './styles.scss';

const App = () => (
  <div><PrimaryButton> here here from new scope </PrimaryButton>
          <View className={s.view}>I am just j  </View>
</div>
);

export default App;
