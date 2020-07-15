import React from "react";
import {Image, View, StyleSheet, Text, Platform} from "react-native";
import star from '../common/img/star.png';

const OnePhoto = (props) => {
    return (
        <View style={styles.area}>
            <Image style={styles.image} source={props.source}/>
            {props.text === 'xps'
                ? <Image style={styles.star} source={star}/>
                : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    area: {
        marginTop: -1,
        marginBottom: 3,
        alignItems: "center",

    },
    image: {
        width: 124,
        height: 124,
        ...Platform.select({
            android: {
                width: 134,
                height: 134,
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
        position: "relative",
        height: 15,
        width: 15,
        marginTop: -20,
        marginRight: -100,
        ...Platform.select({
            android: {
                marginTop: -20,
                marginRight: -115,
            }
        })
    }
});

export default OnePhoto;