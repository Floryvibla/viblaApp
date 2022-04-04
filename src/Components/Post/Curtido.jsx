import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import NoLike from "../../Assets/saudacão/wakanda_curtido.svg"

export default function App() {

  const ex= `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
  <style type="text/css">
  .st0{fill:none;stroke:#A58537;stroke-width:0.8;stroke-miterlimit:10;}
  </style>
  <g>
  <g>
    <path class="st0" d="M3.73,9.17c1.39,0.43,1.3,0.63,2.11,1.24c1.33-0.5,2.88-1.09,4.19-1.58C8.75,8.35,7.71,7.95,7.37,7.8
      c-0.94-0.41,0-2.7-0.68-3.36c-0.68-0.66-0.57-1.31-1.3-1.42c-0.68-0.1-0.78,0.26-0.99,0.2C4.19,3.17,3.05,2.9,3.05,3.92
      c0,0.31,0.12,0.25-0.31,0.36c-0.42,0.1-0.68,0.78-0.51,1.24C2.34,5.97,1.68,5.5,1.8,6.53c0.05,0.31-0.68,0.05-0.26,0.97
      C1.96,8.41,2.63,8.92,3.73,9.17z"/>
    <path class="st0" d="M16.42,11.25c-0.54-0.21-1.33-0.5-2.22-0.84c-0.78,0.65-2.61,2.16-4.19,3.42c2.65,2.12,4.66,3.69,8.02,2.96
      C19.13,16.34,18.61,12.01,16.42,11.25z"/>
  </g>
  <path class="st0" d="M18.44,7.51c-0.42,0.92-1.09,1.42-2.18,1.68c-1.99,0.54-6.19,4.97-8.83,6.6c-1.09,0.66-3.9,1.67-5.45,1.01
    C0.89,16.33,1.41,12,3.6,11.24c2.13-0.81,8.1-3.04,9.04-3.44c0.93-0.41,0.01-2.7,0.68-3.36c0.68-0.66,0.57-1.31,1.3-1.42
    c0.68-0.1,0.78,0.26,0.99,0.21c0.21-0.05,1.34-0.31,1.34,0.71c0,0.31-0.12,0.25,0.31,0.36c0.32,0.08,0.62,0.56,0.55,1
    c-0.27,0.85,0.48,0.07,0.39,1.26C18.13,6.84,18.86,6.59,18.44,7.51z"/>
  </g>
  </svg>
  `

  return (
    <View style={styles.container}>
      <SvgUri
        width="100%"
        height="100%"
        uri="https://svgshare.com/i/fHj.svg"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});