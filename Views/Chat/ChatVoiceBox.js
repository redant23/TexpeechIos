import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './Styles.js';

export default class ChatVoiceBox extends React.Component {

  render() {
    return (
      <TouchableOpacity
        onPress={() => { this.props.onSpeak() }}
        accessibilityLabel="voiceon"
      >
        <View style={styles.chatVoiceBox}>
          <Image style={styles.voiceBoxIcon} source={require('../../Sources/Images/icon-mic-white-m.png')} />
          <Text style={styles.voiceBoxText}>음성모드 사용중</Text>
        </View>
      </TouchableOpacity>
    );
  }
}