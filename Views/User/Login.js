import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, TextInput, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <ImageBackground source={require('../../Sources/Images/login-bg.png')} style={LoginStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={LoginStyles.tpIconWrap}>
          <Image source={require('../../Sources/Images/tp-icon-large.png')} style={LoginStyles.tpIcon} />
        </View>
        <View style={LoginStyles.loginPasswordSection}>
          <Text style={LoginStyles.lpText}>이메일</Text>
          <View style={LoginStyles.inputBoxwrap}>
            <TextInput autoCapitalize={'none'} keyboardType={'email-address'} placeholder={'email@example.com'} style={LoginStyles.inputBox}></TextInput>
          </View>
        </View>
        <View style={LoginStyles.loginPasswordSection}>
          <Text style={LoginStyles.lpText} >비밀번호</Text>
          <View style={LoginStyles.inputBoxwrap}>
            <TextInput placeholder={'6자 이상'} secureTextEntry={true} style={LoginStyles.inputBox}></TextInput>
          </View>
        </View>
        <View style={LoginStyles.btnSection}>
          <TouchableHighlight style={LoginStyles.loginBtn}>
            <Text>로그인</Text>
          </TouchableHighlight>
        </View>
        <View style={LoginStyles.linkSection}>
          <Text style={{ color: '#fff', opacity: 0.9, }}>비밀번호를 잊으셨나요?</Text>
          <Text style={LoginStyles.linkTextBlank}> | </Text>
          <Text style={{ color: '#fff', opacity: 0.9, }}>아직 회원이 아니신가요?</Text>
        </View>
        <View style={LoginStyles.fbBtnSection}>
          <TouchableHighlight style={LoginStyles.fbLoginBtn}>
            <Text style={{ color: '#fff', opacity: 0.9, fontWeight: 'bold', }}>페북으로 로그인</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  };
};

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tpIconWrap: {
    flex: 6,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tpIcon: {
    width: 200,
    height: 150,
  },
  loginPasswordSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkSection: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  fbBtnSection: {
    flex: 6,
  },
  lpText: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontWeight: 'bold',
    opacity: 0.9,
  },
  linkTextBlank: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    opacity: 0.8,
  },
  inputBoxwrap: {
    flexDirection: 'row',
  },
  inputBox: {
    width: 300,
    height: 40,
    padding: 0,
    marginTop: 4,
    paddingLeft: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(220,220,220,0.3)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  loginBtn: {
    width: 300,
    height: 40,
    padding: 0,
    paddingLeft: 8,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbLoginBtn: {
    width: 300,
    height: 40,
    padding: 0,
    paddingLeft: 8,
    backgroundColor: '#3b5998',
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#29487d',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: '#C86DD7',
  }
});

