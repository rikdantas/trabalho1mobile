import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import MailTittle from "../components/MailTittle";
import SenderInfo from "../components/SenderInfo";
import MailBody from "../components/MailBody";

export default function MailScreen({ route }){
    const [mail, setMail] = useState([]);
    const { id } = route.params;

    useEffect(function() {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/'+id)
            const mail = await response.json();
            setMail(mail);
        }
        getData();
    },[]);
    

    return(
        <View style = {styles.container}>
            <StatusBar style = "auto"/>
            <MailTittle data={[mail]}/>
            <SenderInfo data={[mail]}/>
            <MailBody data={[mail]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});