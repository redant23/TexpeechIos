import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Button, Text, View } from 'react-native';
import styles from './ListStyles/ListStyles.js';
import ListHeaderBar from './ListHeaderBar.js';

export default class ChatList extends React.Component {

  scrollToEnd() {
    // setTimeout(this.refs.scrollView.scrollToEnd, 50);
  }

  componentDidUpdate() {
    // this.scrollToEnd();
  }

  render() {
    let renderData = null;
    if (this.props.MyMsgs) {
      renderData = <ChatRightMsgs msgDatas={this.props.MyMsgs} />
    } else if (this.props.username) {
      renderData = <ChatNotice username={this.props.username} />
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ListHeaderBar selectedTab={this.props.selectedTab} />
        <ScrollView
          style={styles.scrollContainer}
          ref="scrollView"
        // onLayout={() => this.scrollToEnd()}
        >
          <Text>ChatListChatListChatListChatListChatListChatListChatListChatList
          ChatListChatListChatListChatListChatListChatListChatListChatListChatList
          ChatListChatListChatListChatListChatList
          </Text>
        </ScrollView >
      </View>
    );
  }
}

module.exports = ChatList;

