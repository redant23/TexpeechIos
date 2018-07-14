import React from 'react';
import { Modal, TextInput, YellowBox, ToastAndroid, Platform, TouchableHighlight, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import Intro from '../Intro/Intro.js';
import Chat from '../Chat/Chat.js';
import firebase from '../../Settings/Firebase.js';

export default class IntroModal extends React.Component {

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              marginBottom: 24,
            }}>닉네임 입력</Text>
            <TextInput
              style={{
                width: 200,
                height: 32,
                padding: 0,
                paddingLeft: 8,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#9d9d9d',
                borderRadius: 4,
              }}
              value={this.props.text}
              onChangeText={(text) => {
                this.props.usernameInput(text)
              }}
              placeholder={'대화명을 입력하세요'}>
            </TextInput>
            {
              this.props.username &&
              <TouchableHighlight
                style={{
                  marginTop: 16,
                  width: 200,
                  height: 32,
                  padding: 8,
                  backgroundColor: '#C86DD7',
                  borderWidth: 1,
                  borderColor: '#9d9d9d',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.setModalVisible();
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                  }}>입력완료</Text>
              </TouchableHighlight>
            }
          </View>
        </View>
      </Modal>
    );
  }
};

