import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Bracos() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Braços</Text>
            <Text style={styles.description}>Aqui está o conteúdo que descreve os braços.</Text>
            {/* Adicione mais conteúdo aqui, como imagens ou textos */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});
