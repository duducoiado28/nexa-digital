
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Toolbar from '../componentes/toolbar';
import { estilos } from '../style/global';

export default function Contato({ navegar }) {
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
        <Text style={estilos.etiqueta}>FALE CONOSCO</Text>

        <Text style={estilos.tituloPagina}>Contato</Text>

        <Text style={estilos.descricao}>
          Tem alguma dúvida ou sugestão? Conheça nossos
          canais de atendimento fictícios.
        </Text>

        {informacao('Telefone', '(11) 4000-1234')}

        {informacao(
          'E-mail',
          'contato@nexadigital.example'
        )}

        {informacao(
          'Endereço',
          'Rua da Inovação, 100 — São Paulo, SP'
        )}

        {informacao(
          'Horário de atendimento',
          'Segunda a sexta, das 9h às 18h.'
        )}
      </ScrollView>
    </View>
  );
}
