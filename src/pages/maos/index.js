import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Maos() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Imagem */}
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          resizeMode="contain" // Isso fará com que a imagem se ajuste à tela sem ser cortada
        />

        {/* Texto descritivo */}
        <Text style={styles.description}>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que o conteúdo seja rolável
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f5", // Cor de fundo da tela
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // A largura da imagem será a largura da tela
    height: undefined, // Permite que a altura seja proporcional à largura
    aspectRatio: 1.5, // Define a proporção da imagem para evitar cortes (ajuste conforme necessário)
    marginBottom: 20, // Espaço entre a imagem e o texto
  },
  description: {
    fontSize: 18, // Tamanho do texto descritivo
    color: "#333", // Cor do texto
    textAlign: "center", // Alinha o texto ao centro
  },
});
