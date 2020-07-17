import React, {useEffect} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {connect} from "react-redux";
import {getUser, getUserPhotos} from "../Redux/user-reducer";
import Preloader from "../common/Preloader";

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
        return (
            <View style={styles.area}>
                <View style={styles.userInfo}>
                    <View style={styles.imageBorder}>
                        <Image style={styles.userImage} source={{uri: this.props.userData.profile_image.large}}/>
                    </View>
                    <View style={styles.userInfoStats}>
                        <View style={styles.follow}>
                            <View style={styles.follower}>
                                <Text style={styles.followCount}>{this.props.userData.followers_count}</Text>
                                <Text style={styles.followCount}>Followers</Text>
                            </View>
                            <View style={styles.follower}>
                                <Text style={styles.followCount}>{this.props.userData.following_count}</Text>
                                <Text style={styles.followCount}>Following</Text>
                            </View>
                        </View>
                        <View style={styles.contacts}>
                            <Text style={styles.bio}>Name: {this.props.userData.name}</Text>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#000'
    },
    userInfo: {
        marginTop: 10,
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
    username: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 22
    },
    contacts: {
        marginTop: 15
    },
    imageBorder: {
        marginTop: 40,
        width: 110,
        height: 110,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 55,
        borderWidth: 1,
        borderColor: '#fff'
    },
    follow: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    follower: {
        paddingLeft: 7,
        alignItems: 'center'
    },
    userInfoStats: {
        width: '69%'
    },
    followCount: {
        fontSize: 16,
        color: '#fff'
    },
    bio: {
        color: '#fff'
    }
});

const mapStateToProps = (state) => ({
    userData: state.user.userData,
    photos: state.user.photos
});

export default connect(mapStateToProps, {getUser, getUserPhotos})(User);