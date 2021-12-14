import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function MailTittle(props) {
    const [data] = [props.data[0]];

    return(
        <View style={styles.container}>
            <Image style={styles.senderImg} source={{uri: data.picture}}/>
            <View style={styles.fromto}>
                <Text style = {styles.fromText}>{data.from}</Text>
                <Text style = {styles.toText}>Para: {data.to}</Text>
            </View>
            <View style = {styles.timeContainer}>
                <Text style = {styles.timeText}>{data.time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      height: 70,
      padding: 15,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    senderImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    fromto:{
        marginLeft: 10,
    },
    fromText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    toText: {
        fontSize: 14,
        marginTop: 4,
    },
    timeContainer:{
        flex: 1,
        alignItems: 'flex-end',
    },
    timeText: {
        marginTop: 3,
    },
});
  