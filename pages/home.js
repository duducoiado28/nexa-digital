
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Toolbar from '../componentes/toolbar';
import { estilos } from '../style/global';

export default function Home({ navegar, sair }) {
  function cartaoMenu(icone, titulo, descricao, destino) {
    return (
      <TouchableOpacity
        key={titulo}
        style={estilos.cartaoMenu}
        onPress={() => navegar(destino)}
        activeOpacity={0.8}
      >
        <Text style={estilos.menuIcone}>{icone}</Text>

        <View style={estilos.menuTexto}>
          <Text style={estilos.menuTitulo}>{titulo}</Text>
          <Text style={estilos.menuDescricao}>
            {descricao}
          </Text>
        </View>

        <Text style={estilos.seta}>›</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={estilos.tela}>
      <Toolbar onHome={() => navegar('Home')} />

      <ScrollView contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.etiqueta}>ÁREA DO USUÁRIO</Text>

        <Text style={estilos.tituloPagina}>
          Bem-vindo à Nexa!
        </Text>

        <Text style={estilos.descricao}>
          Conectamos pessoas, ideias e tecnologia para criar
          experiências digitais melhores.
        </Text>

        <View style={estilos.cartaoDestaque}>
          <Text style={estilos.numeroDestaque}>01</Text>

          <Text style={estilos.tituloDestaque}>
            Inovação em cada detalhe
          </Text>

          <Text style={estilos.descricaoDestaque}>
            Explore nossa empresa e conheça nossas soluções.
          </Text>
        </View>

        <Text style={estilos.tituloSecao}>
          Explore o aplicativo
        </Text>

        {cartaoMenu(
          'ⓘ',
          'Sobre nós',
          'Conheça a Nexa Digital',
          'Sobre'
        )}

        {cartaoMenu(
          '✉',
          'Contato',
          'Fale com nossa equipe',
          'Contato'
        )}

        <TouchableOpacity
          style={[
            estilos.botao,
            estilos.botaoSecundario,
          ]}
          onPress={sair}
          activeOpacity={0.8}
        >
          <Text
            style={[
              estilos.textoBotao,
              estilos.textoBotaoSecundario,
            ]}
          >
            Sair da conta
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
