import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function MailTittle(props) {
    const [data] = [props.data[0]];

    return(
        <View style={styles.header}>
            <Text style = {styles.tittleText}>{data.tittle}</Text>
            <Icon name={data.star ? "star" : "staro"} size={26} color={data.star ? "yellow" : "black"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
      height: 80,
      padding: 15,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tittleText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
});
  