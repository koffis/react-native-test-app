import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput} from "react-native";
import search from '../common/img/search.png';
import close from '../common/img/close.png'
import {connect} from "react-redux";
import {getData} from "../Redux/app-reducer";

const Menu = (props) => {
    useEffect(getData('latest'));
    const [isSearching, searchStatus] = useState(false);
    const [value, onChangeText] = useState(null);

    return (
        <View style={styles.menu}>
            {isSearching === false
                ? <View style={styles.quickSearch}>
                    <TouchableOpacity onPress={() => props.getData('order_by=latest')}>
                        <Text style={styles.menuItem}>Latest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.getData('order_by=popular')}>
                        <Text style={styles.menuItem}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.getData('order_by=oldest')}>
                        <Text style={styles.menuItem}>Oldest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => searchStatus(true)}>
                        <Image source={search} style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                : <View style={styles.searchPlace}>
                    <TouchableOpacity onPress={() => searchStatus(false)}>
                        <Image source={close} style={styles.icon}/>
                    </TouchableOpacity>
                    <TextInput onChangeText={text => onChangeText(text)} value={value} placeholder={' What are u searching?'}
                               style={styles.searchInput}/>
                    <TouchableOpacity onPress={() => props.getData(`query=${value}`)}>
                        <Image source={search} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
};

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#dcf5ff',
        borderColor: '#7d7f84',
        borderBottomWidth: 1,
        height: '2%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    menuItem: {
        fontSize: 18,
        color: '#007AFF',
    },
    icon: {
        width: 28,
        height: 28
    },
    quickSearch: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    searchInput: {

        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        height: 30
    },
    searchPlace: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => ({
   data: state.app.data
});

export default connect(mapStateToProps, {getData})(Menu);