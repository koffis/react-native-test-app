import React from "react";
import {Image, View, StyleSheet, Text, Platform} from "react-native";
import star from '../common/img/star.png';

const OnePhoto = (props) => {
    return (
            <View style={styles.area}>
                <Image style={styles.image} source={props.source}/>
                { props.text === 'xps'
                    ? <Text style={styles.text}><Image style={styles.star} source={star}/><Text style={styles.sponsor}>sponsor</Text> {props.text}</Text>
                    : <Text style={styles.text}>{props.text}</Text>
                }
            </View>
    )
};

const styles = StyleSheet.create({
    area: {
        shadowColor: "#07005c",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        marginTop:20,
        alignItems: "center",
        marginBottom:20,
    },
    image: {
        borderRadius: 15,
        width: 150,
        height: 150,
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: '#224b86'
            }
        })
    },
    text: {
        color: "#1b3ea7"
    },
    sponsor: {
        color: "#e48f0b"
    },
    star: {
        height: 12,
        width: 12
    }
});

export default OnePhoto;