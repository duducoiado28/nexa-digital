
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { estilos } from '../style/global';

export default function Toolbar({ onHome }) {
  return (
    <View style={estilos.toolbar}>
      <View>
        <Text style={estilos.marca}>NEXA DIGITAL</Text>
        <Text style={estilos.subMarca}>
          Tecnologia que conecta
        </Text>
      </View>

      <TouchableOpacity
        onPress={onHome}
        style={estilos.iconeHome}
        activeOpacity={0.8}
      >
        <Text style={estilos.iconeHomeTexto}>⌂</Text>
      </TouchableOpacity>
    </View>
  );
}
