import React, {useState} from "react";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import like from '../common/img/heart.png'
import star from '../common/img/star.png'

const Photo = (props) => {
    const {source} = props.route.params;/*JSON.stringify(source)*/
    const {userImage} = props.route.params;
    const {name} = props.route.params;
    const {text} = props.route.params;
    const {likes} = props.route.params;
    const {time} = props.route.params;

    const [count, setCount] = useState(likes);
    const [isLiked, changeLike] = useState(false);

    const onLike = () => {
        setCount(prevCount => prevCount + 1);
        changeLike(true)
    };
    const onUnlike = () => {
        setCount(prevCount => prevCount - 1);
        changeLike(false)
    };

    return (
        <View style={styles.mainArea}>
            <View style={styles.userInfo}>
                <Image style={styles.userImage} source={userImage}/>
                {name === 'xps'
                    ? <Text style={styles.username}>{name} <Image source={star} style={styles.star}/></Text>
                    : <Text style={styles.username}>{name}</Text>
                }
            </View>
            <Image style={styles.image} source={source}/>
            <Text style={styles.text}><Text style={styles.textUsername}>@{name}:</Text> {text}</Text>
            <View style={styles.likeBlock}>
                {isLiked === false
                    ? <TouchableOpacity style={styles.like} onPress={onLike}>
                        <View style={styles.unliked}>
                            <Image style={styles.likeIcon} source={like}/>
                            <Text style={styles.likeCount}>{count}</Text>
                        </View>
                    </TouchableOpacity>
                    : <TouchableOpacity style={styles.like} onPress={onUnlike}>
                        <View style={styles.liked}>
                            <Image style={styles.likeIcon} source={like}/>
                            <Text style={styles.likeCount}>{count}</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3c7d6ff'
    },
    text: {
        marginLeft: '2%',
        marginTop: '5%',
        alignSelf: 'flex-start',
        color: '#2460A7ff'
    },
    image: {
        borderRadius: 10,
        width: "100%",
        height: "60%"
    },
    userImage: {
        marginLeft: 10,
        borderRadius: 50,
        marginTop: -60,
        marginBottom: '3%',
        alignSelf: "flex-start",
        width: 50,
        height: 50
    },
    username: {
        fontSize: 18,
        color: '#2460A7ff',
        marginTop: -50,
        marginBottom: 30,
        marginLeft: "18%",
        alignSelf: 'flex-start'
    },
    like: {
        marginTop: 20,
        marginRight: 10,
        marginBottom: -40,
        alignSelf: 'center',
    },
    likeCount: {
        marginLeft: 2,
        alignSelf: 'center',
        color: 'black',
        fontWeight: '600',
    },
    textUsername: {
        fontWeight: "700"
    },
    likeIcon: {
        width: 28,
        height: 28
    },
    star: {
        width: 15,
        height: 15
    },
    liked: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#009ccb',
        shadowColor: "#07005c",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.73,
        shadowRadius: 16.00,
    },
    unliked: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginTop: 5,
    },
    likeBlock: {
        ...Platform.select({
            ios: {
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 1,
                width: "100%"
            }
        })
    }
});

export default Photo;