import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 230,
        height: 100,
        borderRadius: 3,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetails;