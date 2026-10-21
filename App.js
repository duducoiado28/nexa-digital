
import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';

import Navegation from './navegation/navegation';
import { CORES, estilos } from './style/global';

export default function App() {
  const [tela, setTela] = useState('Login');

  return (
    <View style={estilos.tela}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={CORES.principal}
      />

      <Navegation
        tela={tela}
        setTela={setTela}
      />
    </View>
  );
}
