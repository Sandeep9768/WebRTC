// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import {
//   RTCPeerConnection,
//   RTCIceCandidate,
//   RTCSessionDescription,
//   RTCView,
//   MediaStream,
//   MediaStreamTrack,
//   mediaDevices,
//   registerGlobals
// } from 'react-native-webrtc';
// export default class App extends Component {
//   componentDidMount() {
//     const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
//     const pc = new RTCPeerConnection(configuration);
    
//     let isFront = true;
//     mediaDevices.enumerateDevices().then(sourceInfos => {
//       console.log(sourceInfos);
//       let videoSourceId;
//       for (let i = 0; i < sourceInfos.length; i++) {
//         const sourceInfo = sourceInfos[i];
//         if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
//           videoSourceId = sourceInfo.deviceId;
//         }
//       }
//       mediaDevices.getUserMedia({
//         audio: true,
//         video: {
//           mandatory: {
//             minWidth: 500, 
//             minHeight: 300,
//             minFrameRate: 30
//           },
//           facingMode: (isFront ? "user" : "environment"),
//           optional: (videoSourceId ? [{sourceId: videoSourceId}] : [])
//         }
//       })
//       .then(stream => {
//       })
//       .catch(error => {
//       });
//     });

// }
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }



import React from 'react'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>fefcesfvnsej bhvsv</Text>
    </View>
  )
}
