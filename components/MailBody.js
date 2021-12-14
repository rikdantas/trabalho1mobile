import React from 'react';
import { StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';


export default function MailTittle(props) {
    const [data] = [props.data[0]];

    return(
        <WebView style = {styles.container}
            source = {{ html: '<h1 style="font-size:46"><justify>'+data.body+'</justify></h1>' }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 12,
    },
});
  