import React from 'react';
import { StyleSheet, View, NativeAppEventEmitter, NativeModules, NativeEventEmitter } from 'react-native';
import Intro from './Views/Intro/Intro.js';
import Chat from './Views/Chat/Chat.js';
import IntroModal from './Views/Modal/IntroModal.js';
import PropTypes from 'prop-types';

import firebase from './Settings/Firebase.js';

import Tts from 'react-native-tts';
var _ = require('lodash');
var SpeechToText = require('react-native-speech-to-text-ios');
var Sound = require('react-native-sound');

Sound.setCategory('Playback');
var voiceModeOn = new Sound('mode-start.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    return;
  }
});
var voiceModeOff = new Sound('mode-end.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    return;
  }
});
var recOn = new Sound('rec-on.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    return;
  }
});
var sendSuccess = new Sound('send-success.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    return;
  }
});




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      eventNumber: 0,//firebase에서 시작할 때 불러오자.
      currentDatas: null,
      modalVisible: true,
      pageState: 'intro',
      toggleValue: false,
      myMsgs: null,
      sttResults: null,
      voiceMode: false,
      sttCount: 0,
    }
  }

  componentDidMount() {

    // TTS Event Language Setting
    Tts.setDefaultLanguage('ko-KR');

    // TTS Event Don't PopUp Log on Console
    const ee = new NativeEventEmitter(NativeModules.TextToSpeech);
    ee.addListener('tts-start', () => { });
    ee.addListener('tts-finish', () => { });
    ee.addListener('tts-cancel', () => { });

    // ** Chat Load Datas from Access Firebase  **
    var renderData;
    var latestEventNumber = 0;
    var eventRef = firebase.database().ref('event-datas');
    eventRef.on('value', (snapshot) => {
      renderData = snapshot.val();
      latestEventNumber = renderData.length - 1;
      if (this.state.voiceMode) {
        SpeechToText.finishRecognition();
        if (this.subscription != null) {
          this.subscription.remove();
          this.subscription = null;
        }
        let voicePrintTarget = renderData[renderData.length - 1];
        if (voicePrintTarget.type === 'Msg') {
          let textTerm = voicePrintTarget.nickname.length * 300;
          let recordStartTerm = textTerm + voicePrintTarget.message.text.length * 300;
          Tts.speak(`${voicePrintTarget.nickname}님 메세지,`);
          Tts.speak(voicePrintTarget.message.text);
          setTimeout(() => {
            recOn.play();
            this.setState({
              sttCount: 0,
            });
          }, recordStartTerm + 500);
        } else if (voicePrintTarget.type === 'join') {
          let textTerm = voicePrintTarget.nickname.length * 100 + 500;
          Tts.speak(`${voicePrintTarget.nickname}님 들어왔습니다.`);
          setTimeout(() => {
            SpeechToText.finishRecognition();
            if (this.subscription != null) {
              this.subscription.remove();
              this.subscription = null;
            }
            recOn.play();
            // STT Event Listener
            // this.subscription = NativeAppEventEmitter.addListener(
            //   'SpeechToText',
            //   (result) => {
            //     if (result.error) {
            //       console.warn(JSON.stringify(result.error));
            //     } else {
            //       if (result.bestTranscription.formattedString.includes(' 전송')) {
            //         let sttResult = result.bestTranscription.formattedString.slice(0, -2);
            //         let debounceAction = _.debounce(() => { this.sttAction(sttResult); }, 500, {
            //           leading: false, trailing: true
            //         });
            //         debounceAction();
            //       }
            //     }
            //   }
            // );
            // SpeechToText.startRecognition('ko-KR');
          }, textTerm + 500);
        }
      }
      this.setState({
        currentDatas: renderData,
        eventNumber: latestEventNumber,
      });
    });
  }

  componentWillUnmount() {
    if (this.subscription != null) {
      this.subscription.remove();
      this.subscription = null;
    }
  }

  onSpeak() {
    // STT Event Listener
    Tts.stop();
    this.subscription = NativeAppEventEmitter.addListener(
      'SpeechToText',
      (result) => {
        if (result.error) {
          // console.warn(JSON.stringify(result.error));
        } else {
          if (result.bestTranscription.formattedString.includes(' 전송')) {
            let sttResult = result.bestTranscription.formattedString.slice(0, -2);
            this.sttAction(sttResult);
          }
        }
      }
    );
    SpeechToText.startRecognition("ko-KR");
  }

  pageStateChange(pageName) {
    this.setState({
      pageState: pageName,
    });
  }

  sendMyMsg(text, mode) {
    if (!mode) {
      var eventData = {
        type: 'Msg',
        created_at: Date().toLocaleString().slice(4, 21),
        nickname: this.state.username,
        message: {
          text: text,
          on_voice_mode: false,
        }
      }
    } else {
      var eventData = {
        type: 'Msg',
        created_at: Date().toLocaleString().slice(4, 21),
        nickname: this.state.username,
        message: {
          text: text,
          on_voice_mode: true,
        }
      }
    }
    this.setState({
      myMsgs: eventData,
    })
    let eventNumber = this.state.eventNumber + 1;
    var eventRef = firebase.database().ref(`/event-datas/${eventNumber}`);
    eventRef.update(eventData);
    sendSuccess.play();
  }

  setModalVisible(visible) {
    let eventData = {
      type: 'join',
      created_at: Date().toLocaleString().slice(4, 21),
      nickname: this.state.username,
    }
    let eventNumber = this.state.eventNumber + 1;
    // ** Firebase User Join code **
    var eventRef = firebase.database().ref(`/event-datas/${eventNumber}`);
    eventRef.update(eventData);
    var userRef = firebase.database().ref(`/current-users/${eventNumber}`);
    userRef.update({ nickname: this.state.username });
    this.setState({
      modalVisible: visible,
    });
  }

  sttAction(sttResult) {
    if (!this.state.sttCount) {
      let sttCount = ++this.state.sttCount;
      this.setState({
        sttResults: sttResult,
        sttCount: sttCount,
      })
      this.sendMyMsg(sttResult, 'stt');
    }
    SpeechToText.finishRecognition();
    if (this.subscription != null) {
      this.subscription.remove();
      this.subscription = null;
    }
  }

  updateToggleValue(val) {
    if (val) {
      // STT Event Start
      this.setState({
        voiceMode: true,
      })
      SpeechToText.finishRecognition();
      if (this.subscription != null) {
        this.subscription.remove();
        this.subscription = null;
      }
      voiceModeOn.play();
      setTimeout(() => { Tts.speak("보이스 모드 작동. 아래 '음성모드 사용중'을 탭하고 말을 한 후 끝에 '전송'이라고 하면 전송됩니다.") }, 500);
    } else {
      Tts.stop();
      SpeechToText.finishRecognition();
      if (this.subscription != null) {
        this.subscription.remove();
        this.subscription = null;
      }
      voiceModeOff.play();
      this.setState({
        sttResults: null,
        voiceMode: false,
      })
    }
    this.setState({
      toggleValue: val
    });
  }

  usernameInput(username) {
    if (username) {
      this.setState({
        username: username
      })
    } else {
      this.setState({
        username: null
      })
    }
  }



  render() {
    return (
      <View style={appStyles.container}>
        {
          this.state.pageState === 'Chat' &&
          <IntroModal
            modalVisible={this.state.modalVisible}
            text={this.state.text}
            usernameInput={(text) => {
              this.usernameInput(text);
            }}
            username={this.state.username}
            setModalVisible={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
        }
        {
          this.state.pageState === 'intro' &&
          <Intro
            pageStateChange={(pageName) => {
              this.pageStateChange(pageName);
            }}
          />
        }
        {
          this.state.pageState === 'Chat' &&
          <Chat
            currentDatas={this.state.currentDatas}
            myMsgs={this.state.myMsgs}
            username={this.state.username}
            userDatas={this.state.users}
            msgDatas={this.state.messages}
            toggleValue={this.state.toggleValue}
            toggleValueChange={(val) => {
              this.updateToggleValue(val);
            }}
            sendMyMsg={(text) => {
              this.sendMyMsg(text);
            }}
            onSpeak={() => {
              this.onSpeak();
            }}
          />
        }
      </View>

    );
  }
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

App.propTypes = {

};
