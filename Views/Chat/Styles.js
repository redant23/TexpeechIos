import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBarContainer: {
    height: 75,
    backgroundColor: '#f1f1f1',
  },
  headerBarBox: {
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    marginBottom: 30,
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  withShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
  },
  headerBarLeftWrap: {
    flex: 1,
  },
  headerBarCenterWrap: {
    flex: 1,
    alignItems: 'center',

  },
  headerBarRightWrap: {
    flex: 1,
    alignItems: 'flex-end',

  },
  headerBarIcon: {
    width: 11,
    height: 18,
  },
  headerBarText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    backgroundColor: 'transparent',
    color: '#424242',
    fontWeight: 'normal',
  },
  scrollContainer: {
    backgroundColor: '#f1f1f1',
  },
  voiceModeToggleBox: {
    position: 'absolute',
    right: 20,
    top: 104,
    width: 140,
    height: 50,
    backgroundColor: '#fff',
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  toggleBoxText: {
    marginLeft: 8,
    marginRight: 8,
    color: '#50555C',
  },
  toggleMicIcon: {
    width: 13,
    height: 21,
    marginLeft: 8,
  },
  noticeWrap: {
    alignItems: 'center',
    marginBottom: 4,
  },
  font: {
    marginTop: 10,
    fontSize: 18,
    color: '#424242',
  },
  noticeDateFont: {
    marginTop: 0,
    fontSize: 12,
    color: '#AAA',
  },
  yourMsgsWrap: {
    flex: 1,
    marginBottom: 4,
  },
  myMsgsWrap: {
    flex: 1,
    marginBottom: 4,
  },
  voiceBoxIcon: {
    height: 53,
    width: 32,
  },
  chatVoiceBox: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  voiceBoxBg: {
    height: 72,
  },
  voiceBoxText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
    fontWeight: 'bold',
  },
  chatInputIcon: {
    width: 29,
    height: 29,
    flexDirection: 'row',
    marginLeft: 8,
  },
  chatInputBoxWrap: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  chatInputSendIcon: {
    width: 29,
    height: 29,
    marginRight: 8,
  },
  chatInputBox: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#979797',
    height: 29,
    flexDirection: 'row',
    flex: 1,
    padding: 0,
    paddingLeft: 8,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: '#C86DD7',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#929292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
  },
  nicknameText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  msgBox: {
    padding: 8,
    backgroundColor: '#fff',
    marginLeft: 8,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    maxWidth: 162,
  },

  myMsgBox: {
    padding: 8,
    backgroundColor: '#C86DD7',
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxWidth: 200,
  },
  leftMsgContainerMsgs: {
    flexDirection: 'column',
  },
  leftmsgBoxNewWrap: {
    flexDirection: 'row',
  },
  leftMsgContainerModeDates: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginLeft: 4,
  },
  myMsgContainer: {
    marginRight: 8,
    marginTop: 16,

  },
  micIcon: {
    width: 13,
    height: 21,
    marginLeft: 4,
  },
  msgFont: {
    fontSize: 16,
  },
  myMsgFont: {
    color: '#fff',
    fontSize: 16,
  },
  myMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 4,
  },
  msgDateWrap: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  msgDate: {
    color: '#AAA',
    fontSize: 12,
  },
  yourMsgMicIconWrap: {

  },
  yourMsgDate: {
    marginLeft: 4,
    color: '#AAA',
    fontSize: 12,
  },
  yourMsg: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 0,
    marginRight: 8,
  }
});

export default styles;