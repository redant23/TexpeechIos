import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './ChatStyles/ChatHeaderbarStyles.js';

export default class ChatHeaderBar extends React.Component {

  render() {

    return (
      <View>
        <View style={styles.headerBarContainer}>
          <View style={[styles.headerBarBox, styles.withShadow]}>
            <View style={styles.headerBarLeftWrap}>
              <Image style={styles.headerBarIcon} source={require('../../Sources/Images/icon-back.png')} />
            </View>
            <View style={styles.headerBarCenterWrap}>
              <Text style={styles.headerBarText}>Chat</Text>
            </View>
            <View style={styles.headerBarRightWrap}>
              <Text style={styles.headerBarText}>Setting</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}