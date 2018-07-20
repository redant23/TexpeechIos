# **Texpeech**

# Introduction

**Texpeech**는 음성 또는 텍스트로만 소통가능한 상황의 사용자를 소통 가능하게 해주는 메신저 앱입니다.

![ScreenShot](https://lh3.googleusercontent.com/TlIZ_fXG9MjKd7Pa0j_xOezRumUsCf5kgSByircsIyQBJrCRAECoAJJa72aWfsMQmSR0i7KLrfHP_BZK6ylWIxJiEcSlFslQRt6k4e4h5mvLODxQ7A2xwO6G8lXuUnkuKR9Rtq0N5bXC4mptrpKTc806NMXWfwNJ2lU0k2EgDtZC9fxLKgZf_hlurVikQ6CsK7t0vnPgJi7UK90gWhHvTKOP_eiOap5R7sy8Rkup-1KD2IY66-YuvXKNv8LIDB04G-KeNlLkKdpj7CMs_GE1jIzSwNlh-pUYaM9Q1pvwI5X4gg_7fMI8UjRLiaeNs8T9OM9Va73CC-e9FYNes3JE-2Nb1tz6v7CwJS0KgaJXTsIsaCHOxA-wI_MnEVr9_o_uuQT5__VusBUaZu8G0ONfYUaCbx8TKMvFeOhWMKnMyKYaB_jiPChrV9WfoFIiSCUUeUZbgbFHPQm7bJE8GldH1b_-OexTJwJmA78qnU0XS2n2HqfuUIm-HUWKxYQHLhFYnrKDrHIDIKvRiTycVAf0pCLqxWOjkrKsDlDWQ7niJEPQyqyYTfPTrEic3kyZkn4Emts8tv_4xYwkMJ88M2k1Gse1XqH4RbxD-mw5-GLc)
![ScreenShot](https://lh3.googleusercontent.com/BvhZeDifvblgubKfHYKLmutR34AroKu7oJlXwYb2jerNNjXn11u3a4Gck58peZGnAwULZBSvzEhgRpUj-aed9WzfZTW4zF0QQosS_soUVQHpp75avNqUK527gK2KT6cUfzgXaTpiIfWRiIdxMnCSXpSWbalhxkZ-MdgyqwnJHBxnd9aegDkCHo7mGY0qv19V6MsV3_YoqltkHnTMEXsUz7tRnFkd4rcHkBFYaHwoU6JlyU-wcjz2Wk8CadeN2MTM0_g0QVYwXt8eGTIrBhxVvGlSS2_zZfr3IXYRf3vhA1mx6E6vpaMQfPACHrEHMmHcZt79Ije4eR1-8p7W_qGha28CC_ZbHwzGuWopgb1wunYVjt4lfSUN0cHHdNmDfSNdeX2QVAZoiQ2QNwbbVDNtyh-hObcx72UYZO-w5JhsrfyDUVRsGjk92K9uqEGXin3AjVduNHELyHHeFOXNcWSVXlpdR-pVUM3J0ygvC1WH-_HFSjVgY9TnK-pQUmM4cMHXAdBoAgjJdjGc052CbHSTN6tiG-V61Oe62nOzpMppargdkI1lnBndefDnjVXzTYpJ1S81MzBnLsoI16WrJvd55rdromHcspu8Jg5XRjtb)
![ScreenShot](https://lh3.googleusercontent.com/K6Ej7rhvjKQEIqyws_p60Dp6C57c1tig1dZCb8kABkeKHU9LfRm5ngDB-YicLqnwMHdBSisUof5aWIzFSH7gcAgXk9F4VWnxJ5hH8ggh1aERDL-vh2nc1kC6NkzUgpaNCPu3gxsanbKJm5H8nRR0LLBchJbNvn-tMYWhRO1bKCt5d9ha4uGif8hUjc95zCf4mkpEkbwSPeUN1gZwZ43z2QnoSIzUNMpdU_K6f8YU0KX8Kvwo2yrMhWVP__Ge1eE8s5foOMFfnYJ2JMhhIgeo88-bCgKmme5Bg3rmjDhLko1RiuCPCvFfAzIA6q6ee2iJe3qUyiBeSMmAvOhMDkGDpzDQ0tnGOBx0nMRZ86GLBdPNo8VEBoVCT-KysDqoRz6Pyg645GUKRbWbCUgIb1IcPGTFsWZ4ZWAdCLjzDThsNovOJ85vHmlWkGLqFljhhQ3adusywwD0RTmwondr1Hpz5l_YWO15B95daWsnpWOs-8Q0K-FZkF1bDCzjbznO1hQ4jAveA7zHDogmMZJVODOn6d52e3lXpzvY2zbczqRGw9lwZqi3znNsKK74z6Frs1Yk_aHvgdwwh6IxmJMSIxOQ7-u5pBeMNuA4tmMZE8om)

## Requirements


- React Native iOS App
- Firebase realtime Database 사용
- TTS(Text To Speech), STT(Speech To Text) API 사용
- react-native-firebase, react-native-sound, react-native-speech-to-text-ios, react-native-tts, react-native-contacts


## Prerequisites

Xcode 설치 및 환경구성
npm 설치 및 Xcode와 연결
react-native 설치 & react-native api 설치 및 연결

## Installation

### Client
```
git clone https://github.com/redant23/TexpeechIos
cd TexpeechIos
react-native run-ios

```

## Features

- email, name, phonenumber을 가져와 로그인 구현
- 실시간 Chat
- 음성으로 메시지를 전송하고 상대방은 텍스트로 확인 가능
- 음성모드일 경우 상대방의 메시지 및 접속정보를 음성으로 확인 가능
- 사용자의 폰 주소록 데이터 수집


## Client-Side

- React Native 로 구현
- React Native Firebase를 활용하여 DB 서버구축


## Project Control

- Git을 활용하여 기능 및 보완이 될 때마다 커밋하여 관리
- Trello 스케쥴 관리 및 Task 정리


## Things to do

추운 겨울 길에서 카톡하려니 손이 너무 시려운데 대화상대는 전화를 못하는 상황, 
'음성과 텍스트를 자유롭게 변환할 수 있는 메신저가 있다면 어떨까?'라는 생각으로 시작된 Texpeech Project.
리액트 네이티브를 기반으로 혼자서 2주간 진행하였습니다.

3일가량을 안드로이드로 진행하다가 환경세팅이 너무 힘들어 iOS로 변경해서 계속 진행하였습니다.
배우지 않은 부분에 대해서 막힐 때, 구글링으로 결과를 찾지 못했을 때, 수도 없이 포기하고 싶었으나 
처음 음성인식이 되어 콘솔창에 메시지가 출력 되었을 때의 기분이 너무 좋아 계속 진행했습니다.

아직은 얼추 시현 정도만 가능하지만 틈틈이 보완하여 꼭 출시할 계획입니다.
UX적으로나 개발적으로 부족함이 많지만 잘 다듬으면 사람들이 한번쯤은 써보지 않을까 싶네요.


Special thanks to [Ken Huh](https://github.com/Ken123777)
