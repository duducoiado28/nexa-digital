
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { CORES, estilos } from '../style/global';

const USUARIO_CORRETO = 'aluno';
const SENHA_CORRETA = '123456';

export default function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function entrar() {
    if (usuario.trim() === '') {
      setMensagem('Informe o usuário.');
      return;
    }

    if (senha === '') {
      setMensagem('Informe a senha.');
      return;
    }

    if (
      usuario.trim() === USUARIO_CORRETO &&
      senha === SENHA_CORRETA
    ) {
      setMensagem('');
      onEntrar();
    } else {
      setMensagem('Usuário ou senha inválidos.');
    }
  }

  function limpar() {
    setUsuario('');
    setSenha('');
    setMensagem('');
  }

  function botao(titulo, acao, secundario = false) {
    return (
      <TouchableOpacity
        key={titulo}
        style={[
          estilos.botao,
          secundario && estilos.botaoSecundario,
        ]}
        onPress={acao}
        activeOpacity={0.8}
      >
        <Text
          style={[
            estilos.textoBotao,
            secundario && estilos.textoBotaoSecundario,
          ]}
        >
          {titulo}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={estilos.loginContainer}>
      <View style={estilos.logo}>
        <Text style={estilos.logoTexto}>N</Text>
      </View>

      <Text style={estilos.tituloLogin}>Nexa Digital</Text>
      <Text style={estilos.subtitulo}>
        Sua jornada começa aqui.
      </Text>

      <View style={estilos.cartaoLogin}>
        <Text style={estilos.tituloCartao}>
          Acesse sua conta
        </Text>

        <Text style={estilos.rotulo}>Usuário</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#98A2B3"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={estilos.rotulo}>Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#98A2B3"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {mensagem !== '' && (
          <Text style={estilos.erro}>{mensagem}</Text>
        )}

        {botao('Entrar →', entrar)}
        {botao('Limpar campos', limpar, true)}

        <Text style={estilos.ajuda}>
          Acesso demonstrativo para fins acadêmicos.
        </Text>
      </View>

      <Text style={estilos.rodape}>
        Projeto acadêmico • Versão 1.0
      </Text>
    </View>
  );
}
