import React from "react";
import {View, Text, StyleSheet} from 'react-native';


export const Navbar = (props) => {
  return(
       <View style={styles.navbar}>
           <Text style={styles.text}>{props.title}</Text>
       </View>
  )
};

const styles = StyleSheet.create({
   navbar: {
       height: 70,
       alignItems: 'center',
       justifyContent: 'flex-end',
       backgroundColor: '#2460A7ff',
       paddingBottom: 10
   },
    text: {
        marginTop:15,
        color: 'white',
        fontSize: 20
    }
});