import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity, Button, Text, View } from 'react-native';
import styles from './ListStyles/ListStyles.js';
import ListHeaderBar from './ListHeaderBar.js';
import FriendListEntry from './FriendListEntry.js';


export default class FriendList extends React.Component {

  scrollToEnd() {

  }

  componentDidUpdate() {

  }

  render() {
    let renderData = null;
    var dummyData = [{
      userName: '홍길동',
      lastDate: '마지막 메시지의 날짜'
    }
    ];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ListHeaderBar selectedTab={this.props.selectedTab} />
        <ScrollView
          style={styles.scrollContainer}
          ref="scrollView"
        >
          {
            dummyData.map((data, idx) => {
              return <FriendListEntry
                key={idx}
                renderData={data}
                createRoom={(value) => {
                  console.warn(value);
                  this.props.createRoom();
                }}
              />
            })
          }
        </ScrollView >
      </View>
    );
  }
}

module.exports = FriendList;
