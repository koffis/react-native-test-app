import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView, Button, Text} from "react-native";
import {connect} from "react-redux";
import {getData} from "../Redux/app-reducer";
import Preloader from "../common/Preloader";
import OnePhoto from "./OnePhoto";
import Menu from "./Menu";

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
                <ScrollView>
                    <Menu/>
                    <View style={styles.mainArea}>
                        {photosArray}
                    </View>
                    <View style={styles.footer}>
                        <Text>This App was created for passing test</Text>
                        <Text>yaroslavkravch@gmail.com</Text>
                    </View>
                </ScrollView>

            )
        }
}

const styles = StyleSheet.create({
    mainArea: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#b3c7d6ff',
        flexDirection: "row",
        flexWrap: "wrap"
    },

    footer: {
        borderColor: "#7d7f84",
        borderTopWidth: 1,
        marginBottom: 11,
        alignItems:'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#85b3d1ff'
    }
});

const mapStateToProps = (state) => ({
    data: state.app.data
});

export default connect(mapStateToProps, {getData})(MainScreen);