import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';

export default function Emails({navigation}) {
  const [emails, setEmails] = useState([]);
  
  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
      const emails = await response.json();
      setEmails(emails);
    }
    getData();
  }, []);

  function renderItem({item}){
    return <TouchableOpacity style={styles.mail} onPress={() => navigation.navigate('MailScreen', {id: item.id})}>
    <View style={styles.mailheader}>
      <View style={styles.mailheaderesquerda}>
        <Image style={styles.senderImg} source={{uri: item.picture}}/>
        <View style={styles.mailinfo}>
          <Text style = {styles.destinatario}>{item.to}</Text>
          <Text style = {styles.titulo}>{item.tittle}</Text>
          <Text>{item.summary}</Text>
        </View>
      </View>
      <View style = {styles.mailheaderdireita}>
        <Text>{item.time}</Text>
        <Icon name={item.star ? "star" : "staro"} size={24} color={item.star ? "yellow" : "black"}/>
      </View>
    </View>
  </TouchableOpacity>
  }

  return(
        <View style={styles.container}>
          <StatusBar style = "auto"/>
          <View>
            <FlatList
              data={emails}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator = {false}
            />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mail: {
      height: 80,
    },
    mailheader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 15,
    },
    senderImg: {
      height: 60,
      width: 60,
      borderRadius: 30,
    },
    mailheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    mailheaderdireita:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    destinatario: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    titulo: {
      fontSize: 16,
    },
    mailinfo: {
      marginLeft: 15,
    },
  });
  