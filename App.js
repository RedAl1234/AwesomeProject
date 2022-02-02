import React, { Component } from 'react'; 
import { Text, View } from 'react-native';


class SayHello extends Component {
  render() {

    return (
      <View>
        <Text>Hello, {this.props.name} 3!</Text>
      </View>
    );

  }
}

class HelloWorldApp extends Component {
  render() {
    
  let name = "Ahmed";
  
  return (
    <View>
      <SayHello name="Ahmed"/>
      <SayHello name="Mike"/>
      <SayHello name="World"/>
      <SayHello name="Ash"/>
      <SayHello name="Bob"/>
      <SayHello name="MJ"/>
    </View> 
  );
}
}

export default HelloWorldApp;
