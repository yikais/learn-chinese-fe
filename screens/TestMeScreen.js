import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class TestMeScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Me',
  };

  getWordsFromApiAsync = async () => {
    try {
      let response = await fetch(
        'http://3.0.93.6:7000/getWord/randomN?numberToFetch=10&showPingYing=true&showCharacter=true&showMeaning=true&showExample=false&showNotes=true'
      );
      let responseJson = await response.json();
      console.log('response', responseJson)
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  handlePressRandom = () => {
    console.log('handle Press Random clicked')
    this.getWordsFromApiAsync()
  }

  handlePressLast = () => {
    console.log('handle press Last clicked')
  }

  componentDidMount() {
    console.log('mounted in testme')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Select testing method</Text>
        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            title='Random N'
            onPress={this.handlePressRandom}
          />
          <Button
            style={styles.button}
            title='Last N'
            onPress={this.handlePressLast}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="ID"
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'column',
  },
  btnContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 150,
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    height: 60,
  },
});
