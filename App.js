import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the app!</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Search"/>

        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
