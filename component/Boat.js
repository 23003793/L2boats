import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ title, name, description, icon_name, image }) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={styles.row}>
                {icon_name && (
                    <Icon
                        name={icon_name}
                        size={30}
                        color="black"
                        style={styles.icon}
                    />
                )}
                <View style={styles.textContainer}>
                    {name && <Text style={styles.name}>{name}</Text>}
                    {description && <Text style={styles.description}>{description}</Text>}
                </View>
            </View>
            {image && (
                <Image
                    source={image}  // Use the image prop passed down from the parent
                    style={styles.image}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,        // Optional: Adds a border around the component for better visibility
        borderColor: '#ccc',   // Optional: Light gray border color
        borderRadius: 8,       // Optional: Rounded corners
        marginBottom: 15,      // Space between each Boat component
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1, // Ensures the text container takes up the remaining space
    },
    name: {
        fontSize: 24,
        color: 'black',
    },
    description: {
        fontSize: 16,
        color: 'black',
    },
    image: {
        width: 350,
        height: 300,
        borderRadius: 8, // Optional: Rounded corners for the image
    },
});

export default Boat;











