import React from 'react';
import { StyleSheet, View, NativeAppEventEmitter, NativeModules, NativeEventEmitter } from 'react-native';
import Intro from './Views/Intro/Intro.js';
import Chat from './Views/Chat/Chat.js';
import IntroModal from './Views/Modal/IntroModal.js';
import PropTypes from 'prop-types';

import firebase from './Settings/Firebase.js';

var _ = require('lodash');
var SpeechToText = require('react-native-speech-to-text-ios');
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var voiceModeOn = new Sound('voice-mode-on.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    return;
  }
});

import Tts from 'react-native-tts';


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

        // SpeechToText.finishRecognition();
        // if (this.subscription != null) {
        //   console.warn('deleteSubscription')
        //   this.subscription.remove();
        //   this.subscription = null;
        //   Tts.speak('마음껏 즐겨');
        // }

        // console.warn('voicemodeOn')
        let voicePrintTarget = renderData[renderData.length - 1];
        if (voicePrintTarget.type === 'Msg') {
          // console.warn('MsgType')
          let textTerm = voicePrintTarget.nickname.length * 300 + 500;
          let recordStartTerm = textTerm + voicePrintTarget.message.text.length * 500 + 500;


          Tts.speak(`${voicePrintTarget.nickname}님이 말하길,`);
          Tts.speak(voicePrintTarget.message.text);

          setTimeout(() => {
            // SpeechToText.finishRecognition();
            // if (this.subscription != null) {
            //   this.subscription.remove();
            //   this.subscription = null;
            // }

            voiceModeOn.play();
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
            this.setState({
              sttCount: 0,
            });
          }, recordStartTerm + 1000);

        } else if (voicePrintTarget.type === 'join') {

          let textTerm = voicePrintTarget.nickname.length * 100 + 500;
          Tts.speak(`${voicePrintTarget.nickname}님이 입장하십니다.`);
          setTimeout(() => {
            //   SpeechToText.finishRecognition();
            //   if (this.subscription != null) {
            //     this.subscription.remove();
            //     this.subscription = null;
            //   }


            voiceModeOn.play();


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
          }, textTerm + 2500);
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
      console.warn('deleteSubscription')
      this.subscription.remove();
      this.subscription = null;
    }
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

  onSpeak() {
    // STT Event Listener
    this.subscription = NativeAppEventEmitter.addListener(
      'SpeechToText',
      (result) => {
        if (result.error) {
          console.warn(JSON.stringify(result.error));
        } else {
          if (result.bestTranscription.formattedString.includes(' 전송')) {
            let sttResult = result.bestTranscription.formattedString.slice(0, -2);
            let debounceAction = _.debounce(() => { this.sttAction(sttResult); }, 500, {
              leading: false, trailing: true
            });
            debounceAction();
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

  updateToggleValue(val) {
    if (val) {
      // STT Event Start
      this.setState({
        voiceMode: true,
      })
      // SpeechToText.finishRecognition();
      // if (this.subscription != null) {
      //   this.subscription.remove();
      //   this.subscription = null;
      // }


      voiceModeOn.play();
      setTimeout(() => { Tts.speak('보이스 모드가 작동되었습니다. 말을 시작하려면 음성모드 사용중 을 탭 하세요') }, 500);


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
      // SpeechToText.startRecognition("ko-KR");

    } else {




      voiceModeOn.play();


      this.setState({
        sttResults: null,
        voiceMode: false,
      })
    }
    this.setState({
      toggleValue: val
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
    eventRef.update(eventData)
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
              this.usernameInput(text)
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
              this.onSpeak()
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


// App.propTypes = {
//   props: PropTypes.string
// }

// type Props = {};

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Text style={styles.instructions}>Hello, Android by Redant</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

App.propTypes = {

};