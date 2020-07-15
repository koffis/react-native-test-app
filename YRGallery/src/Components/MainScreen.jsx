import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView, Button, Text} from "react-native";
import {connect} from "react-redux";
import {getData} from "../Redux/app-reducer";
import Preloader from "../common/Preloader";
import OnePhoto from "./OnePhoto";
import Menu from "./Menu";
import {useDarkMode} from "react-native-dynamic";

class MainScreen extends React.Component {
    componentDidMount() {
        this.props.getData('latest');
    }

    render() {
        if (!this.props.data) {
            return (
                <Preloader/>
            );
        }

        let photosArray = this.props.data.map(p => <TouchableOpacity key={p.id} onPress={() => this.props.navigation.navigate('Photo', {
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
                <View>
                    <ScrollView>
                        <Menu/>
                        <View style={styles.mainArea}>
                            {photosArray}
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>This app was created for passing test
                                yaroslavkravch@gmail.com</Text>
                        </View>
                    </ScrollView>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    mainArea: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        flexDirection: "row",
        flexWrap: "wrap"
    },

    footer: {
        marginTop: -2,
        borderTopWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#484646'
    },
    footerText: {
        textAlign: 'center',
        color: '#fff'
    }
});

const mapStateToProps = (state) => ({
    data: state.app.data
});

export default connect(mapStateToProps, {getData})(MainScreen);