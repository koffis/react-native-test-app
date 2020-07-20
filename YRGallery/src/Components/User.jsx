import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import {connect} from "react-redux";
import {getUser, getUserPhotos} from "../Redux/user-reducer";
import Preloader from "../common/Preloader";
import OnePhoto from "./OnePhoto";

class User extends React.Component {
    componentDidMount() {
        const {name} = this.props.route.params;
        this.props.getUser(name);
        this.props.getUserPhotos(name);
    }

    render() {
        if (!this.props.userData || !this.props.photos) {
            return (
                <Preloader/>
            );
        }
        let photosArray = this.props.photos.map(p => <TouchableOpacity key={p.id} onPress={() => this.props.navigation.navigate('UserPhoto', {
            source: {uri: `${p.urls.regular}`},
            userImage: {uri: `${p.user.profile_image.medium}`},
            name: p.user.username,
            text: p.alt_description,
            likes: p.likes,
            time: p.created_at
        })}>
            <OnePhoto text={p.user.username} source={{uri: `${p.urls.regular}`}}/>
        </TouchableOpacity>);
        return (
            <ScrollView>
                <View style={styles.area}>
                    <View style={styles.userInfo}>
                        <View style={styles.imageBorder}>
                            <Image style={styles.userImage} source={{uri: this.props.userData.profile_image.large}}/>
                        </View>
                        <View style={styles.follow}>
                            <View style={styles.follower}>
                                <Text style={styles.followCount}>{this.props.userData.total_photos}</Text>
                                <Text style={styles.followCount}>Photos</Text>
                            </View>
                            <View style={styles.follower}>
                                <Text style={styles.followCount}>{this.props.userData.followers_count}</Text>
                                <Text style={styles.followCount}>Followers</Text>
                            </View>
                            <View style={styles.follower}>
                                <Text style={styles.followCount}>{this.props.userData.following_count}</Text>
                                <Text style={styles.followCount}>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contacts}>
                        <Text style={styles.bio}>{this.props.userData.name}</Text>
                        <Text style={styles.description}>{this.props.userData.bio}</Text>
                    </View>
                    <View style={styles.photoList}>
                        {photosArray}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#000'
    },
    userInfo: {
        marginTop: 15,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        backgroundColor: '#000000',

    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    contacts: {
        borderBottomWidth: 1,
        borderColor: '#737475',
        marginTop: 15
    },
    imageBorder: {
        width: 110,
        height: 110,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 55,
        borderWidth: 1,
        borderColor: '#fff'
    },
    follow: {
        width: '69%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    follower: {
        paddingLeft: 7,
        alignItems: 'center'
    },

    followCount: {
        fontSize: 16,
        color: '#fff'
    },
    bio: {
        marginRight: '2%',
        color: '#fff',
        alignSelf: 'flex-end',
        fontSize: 17,
        fontWeight: '600'
    },
    description: {
        marginHorizontal: 15,
        marginTop: 15,
        color: '#fff',
        marginBottom: 15
    },
    photoList: {
        marginTop: 1,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

const mapStateToProps = (state) => ({
    userData: state.user.userData,
    photos: state.user.photos
});

export default connect(mapStateToProps, {getUser, getUserPhotos})(User);