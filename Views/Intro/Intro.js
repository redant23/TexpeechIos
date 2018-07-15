import React from 'react';
import { Image, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';


export default class Intro extends React.Component {

  startedApp() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../Sources/Images/voice-toggle.png')} />
        <Text style={styles.body}>대화 중 음성모드를 사용하면</Text>
        <Text style={styles.body}>화면을 보지 않고도</Text>
        <Text style={styles.body}>상대방의 메시지를 듣고</Text>
        <Text style={styles.body}>상대방에게 음성으로</Text>
        <Text style={styles.body}>메시지를 보낼 수 있습니다.</Text>
        <View style={{ backgroundColor: '#fff', padding: 50, height: 30 }} />
        <TouchableOpacity
          onPress={this.props.pageStateChange.bind(this, 'Chat')}
          accessibilityLabel="Get Started button"
        >
          <Text style={styles.btnTest}>
            시작하기
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  body: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
  },
  btnTest: {
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    color: '#fff',
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#424242',
  },
  img: {
    marginBottom: 20,
    marginTop: 80,
  },
});
