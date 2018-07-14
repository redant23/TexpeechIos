import React from 'react';
import { Text, TextInput, View, Image, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import styles from './Styles.js';

export default class ChatInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    }
  }


  onPressButton() {
    let tempText = this.state.text;
    this.props.sendMyMsg(tempText);
    this.setState({
      text: null
    });
  }

  textInputChange(text) {
    if (!text) {
      this.setState({
        text: null
      });
    } else {
      this.setState({
        text: text
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.chatInputBoxWrap} behavior="height">
        <Image style={styles.chatInputIcon} source={require('../../Sources/Images/icon-cam.png')} />
        <Image style={styles.chatInputIcon} source={require('../../Sources/Images/icon-gallery.png')} />
        <TextInput style={styles.chatInputBox} value={this.state.text} onChangeText={this.textInputChange.bind(this)} placeholder={'메시지를 입력하세요'}></TextInput>
        {
          this.state.text &&
          <TouchableHighlight onPress={this.onPressButton.bind(this)}>
            <Image style={styles.chatInputSendIcon} source={require('../../Sources/Images/icon-send.png')} />
          </TouchableHighlight>
        }
      </KeyboardAvoidingView>
    );
  }
}