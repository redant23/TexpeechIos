import React from 'react';
import { Switch, Image, Text, View } from 'react-native';
import styles from './Styles.js';

export default class ChatVoiceToggleBox extends React.Component {

  render() {

    return (
      <View style={styles.voiceModeToggleBox}>
        <Image style={styles.toggleMicIcon} source={require('../../Sources/Images/icon-mic-g.png')} />
        <Text style={styles.toggleBoxText}>Mode</Text>
        <Switch thumbTintColor={'#3023AE'} onTintColor={'#C86DD7'} tintColor={'#C86DD7'} value={this.props.toggleValue} onValueChange={(val) => { this.props.toggleValueChange(val); }}></Switch>
      </View>
    );
  }
}
