import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://placekitten.com/200/200' }} 
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.title}>Sobre Mim</Text>

          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Nome completo:</Text>
            <Text style={styles.infoValue}>Lucas Zanini Minussi</Text> 
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>E-mail:</Text>
            <Text style={styles.infoValue}>185371@upf.br</Text> 
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Descrição:</Text>
            <Text style={styles.description}>
              Meu nome é Lucas Zanini Minussi, tenho 19 anos, estou cursando Ciência da Computação na UPF e trabalho como monitor de turma no programa tempo integral como monitor de oficina de matemática, onde tenho que dar aula para as crianças do 6º ano de algumas escolas públicas de Passo Fundo. Eu gosto de jogar video game, tocar violão e dar um role de carro.
            </Text> 
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8d5ba', 
  },
  contentContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', 
  },
  infoBlock: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000', 
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000', 
    marginTop: 10,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
