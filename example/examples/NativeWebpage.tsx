import React, {Component} from 'react';
import {View} from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {};

export default class NativeWebpage extends Component<Props, State> {
  state = {};

  /**
   * nativeEvent contains obj => {mimetype, file (base64), header:{}, method, url}
   * to save file offline use cache key
   * to load file from offline use offline key
   * return obj  => {mimetype, file (base64), url:url, cache:true/false, offline:true/false}
   * @param nativeEvent 
   * @returns 
   */
  onInterceptCallback = ({nativeEvent}) => {
    const {url, file, mimetype, method, header} = nativeEvent;
    console.log('url', url);
    if(url === "https://content.signpresenter.com/messages/13743/1/1638743404412.png"){
      return {mimetype, file:file,url:url, cache:true, offline:true};
    }
    return {mimetype, file:file,url:url, cache:false, offline:false};
  };

  render() {
    return (
      <View style={{height: 400}}>
        <WebView
          source={{uri: 'https://play.signpresenter.com/message?id=13743'}}
          style={{width: '100%', height: '100%'}}
          domStorageEnabled
          javaScriptEnabled
          onInterceptCallback={e => this.onInterceptCallback(e)}
        />
      </View>
    );
  }
}
