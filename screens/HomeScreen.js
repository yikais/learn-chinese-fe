import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      serverResponse: [],
      revealWord: false,
    }
  }

  async componentDidMount() {
    try {
      let response = await fetch('http://3.0.93.6:7000/getWord/randomN?numberToFetch=1&showPingYing=true&showCharacter=true&showMeaning=true&showExample=true&showNotes=true');
      let responseJson = await response.json();
      this.setState({
        serverResponse: responseJson,
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log('12121', this.state.serverResponse);
    console.log('this.state.revealWord', this.state.revealWord)
    const { serverResponse } = this.state;
    if (serverResponse.length <= 0) return null;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>ID: {serverResponse[0].id}</Text>
        <Text>PingYing: {serverResponse[0].pingYing}</Text>
        <Text>Meaning: {serverResponse[0].meaning}</Text>
        <Text>Notes: {serverResponse[0].notes}</Text>
        {this.state.revealWord && <Text>Correct Word is: {serverResponse[0].character}</Text>}
        <TouchableOpacity 
          onPress={() => this.handleClickReveal()}
          style={styles.revealBtn}
        >
          <Text>
            Reveal
          </Text>
        </TouchableOpacity>
        <Button
          large
          loadingRight
          onPress={this.handleClickCorrect}
          buttonStyle={styles.buttons}
          title='I was correct'
        />
        <Button
          large
          loadingRight
          onPress={this.handleClickIncorrect}
          buttonStyle={styles.buttons}
          title='I was wrong'
        />
      </ScrollView>
    );
  }

  handleClickReveal() {
    console.log('in')
    this.setState({
      revealWord: !this.state.revealWord,
    })
    console.log('this.state.revealWord 2', this.state.revealWord)
  }

  handleClickCorrect() {

  }

  handleClickIncorrect() {

  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  revealBtn: {
    borderRadius: 5,
    backgroundColor: '#ADD8E6',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
