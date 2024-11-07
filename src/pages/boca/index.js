import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function Boca() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    // Função para simular o carregamento de mais imagens (você pode adaptar para buscar de uma API)
    const loadImages = () => {
        const newImages = Array.from({ length: 10 }).map((_, index) => ({
            id: index + page * 10,
            uri: `https://picsum.photos/200/300?random=${index + page * 10}`
        }));
        setImages(prevImages => [...prevImages, ...newImages]);
        setPage(prevPage => prevPage + 1);
    };

    // Carregar as imagens iniciais
    useEffect(() => {
        loadImages();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boca!!!!</Text>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.uri }} style={styles.image} />
                )}
                onEndReached={loadImages}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
});
