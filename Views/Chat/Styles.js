import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBarBoxWrap: {
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
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

  },
  headerBarText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  scrollContainer: {
    backgroundColor: '#f1f1f1',
  },
  voiceModeToggleBox: {
    position: 'absolute',
    right: 20,
    top: 94,
    width: 140,
    height: 36,
    backgroundColor: '#fff',
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleBoxText: {
    marginLeft: 8,
    marginRight: 8,
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
    fontSize: 14,
  },
  yourMsgsWrap: {
    flex: 1,
    marginBottom: 4,
  },
  myMsgsWrap: {
    flex: 1,
    marginBottom: 4,
  },
  chatVoiceBox: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A4FC6',
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
    borderColor: '#ddd',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  chatInputSendIcon: {
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
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxWidth: 180,
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
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxWidth: 200,
  },
  leftMsgContainerMsgs: {
  },
  leftMsgContainerModeDates: {
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
  },
  msgDate: {
  },
  yourMsgMicIconWrap: {

  },
  yourMsgDate: {
    marginLeft: 4,
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