import React, {Component} from 'react';
import {View} from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {};

export default class NativeWebpage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={{height: 400}}>
        <WebView
          source={{uri: 'https://finqy.ai'}}
          style={{width: '100%', height: '100%'}}
          onIntercept={e => {
            const {nativeEvent} = e;
            //delete nativeEvent.file;
            const {url, file, header} = nativeEvent
            console.log('onIntercept', url);
            if(url === "https://finqy.ai/demoindex/images/favicon.png"){
              return file;
            }
          }}
        />
      </View>
    );
  }
}
