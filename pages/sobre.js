
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Toolbar from '../componentes/toolbar';
import { estilos } from '../style/global';

export default function Sobre({ navegar }) {
  function informacao(titulo, texto) {
    return (
      <View style={estilos.cartaoInfo} key={titulo}>
        <Text style={estilos.tituloInfo}>{titulo}</Text>
        <Text style={estilos.textoInfo}>{texto}</Text>
      </View>
    );
  }

  return (
    <View style={estilos.tela}>
      <Toolbar onHome={() => navegar('Home')} />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.etiqueta}>NOSSA EMPRESA</Text>

        <Text style={estilos.tituloPagina}>Sobre nós</Text>

        <Text style={estilos.descricao}>
          A Nexa Digital é uma empresa fictícia de tecnologia,
          criada para aproximar pessoas e soluções digitais.
          Este aplicativo foi desenvolvido como projeto
          acadêmico de dispositivos móveis.
        </Text>

        {informacao(
          'Nossa missão',
          'Tornar a tecnologia acessível e útil para todos.'
        )}

        {informacao(
          'Nossa visão',
          'Ser referência em inovação e experiência digital.'
        )}

        {informacao(
          'Nossos valores',
          'Ética, criatividade, colaboração e responsabilidade.'
        )}

        {informacao(
          'Empresa',
          'Nexa Digital — empresa fictícia de tecnologia.'
        )}

        <Text style={estilos.versao}>Versão 1.0.0</Text>
      </ScrollView>
    </View>
  );
}
