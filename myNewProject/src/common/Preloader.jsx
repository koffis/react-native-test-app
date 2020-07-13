import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Preloader = () => {
  return(
      <View style={styles.mainArea}>
        <Text style={styles.text}>Wait please</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  mainArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  text:{
    color: 'blue'
  }
});

export default Preloader;