import React, {Component} from 'react';
import {View} from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {};

export default class NativeWebpage extends Component<Props, State> {
  state = {};

  /**
   * nativeEvent contains obj => {mimetype, file (base64), header, method, url}
   * return obj  => {mimetype, file (base64)}
   * @param nativeEvent 
   * @returns 
   */
  onInterceptCallback = ({nativeEvent}) => {
    const {url, file, mimetype, method, header} = nativeEvent;
    if (url === 'https://finqy.ai/demoindex/css/style.css') {
      console.log('mimetype',mimetype, file === 'Ym9keXsKICAgIGJhY2tncm91bmQ6cmVkOwp9');
      return {
        mimetype: 'text/css',
        file:`data:text/css;Ym9keXsKICAgIGJhY2tncm91bmQ6cmVkOwp9`,
      };
    } else {
      return {mimetype, file:file};
    }
  };

  render() {
    return (
      <View style={{height: 400}}>
        <WebView
          source={{uri: 'https://finqy.ai'}}
          style={{width: '100%', height: '100%'}}
          onInterceptCallback={e => this.onInterceptCallback(e)}
        />
      </View>
    );
  }
}
