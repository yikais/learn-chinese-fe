import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import WordDisplay from '../components/WordDisplay';
import { WRITE_MODE, READ_MODE } from '../constants/Constants';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      serverResponse: [],
      revealWord: false,
      refreshing: false,
    }
  }

  getWordsFromApiAsync = async () => {
    try {
      this.setState({refreshing: true});
      let response = await fetch(
        'http://3.0.93.6:7000/getWord/randomN?numberToFetch=1&showPingYing=true&showCharacter=true&showMeaning=true&showExample=true&showNotes=true'
      );
      let responseJson = await response.json();
      this.setState({refreshing: false});
      this.setState({
        serverResponse: responseJson,
      })
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  } 

  componentDidMount() {
    this.getWordsFromApiAsync();
  }

  _onRefresh = () => {
    this.getWordsFromApiAsync();
  }

  generateRandomMode() {
    return Math.random() < 0.5 ? WRITE_MODE : READ_MODE;
  }

  handleClickCorrect() {
    this.getWordsFromApiAsync();
  }

  handleClickIncorrect() {
    this.getWordsFromApiAsync();
  }

  render() {
    const { serverResponse } = this.state;
    if (serverResponse.length <= 0) return null;

    return (
      <ScrollView 
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <WordDisplay 
          displayMode={this.generateRandomMode()} 
          id={serverResponse[0].id}
          pingYing={serverResponse[0].pingYing}
          meaning={serverResponse[0].meaning}
          notes={serverResponse[0].notes}
          character={serverResponse[0].character}
          examples={serverResponse[0].examples}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleClickCorrect()}
            style={styles.buttons}
          >
            <Text>I'm correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleClickIncorrect()}
            style={styles.buttons}
          >
            <Text>I'm wrong</Text>
          </TouchableOpacity>
        </View>
          
      </ScrollView>
    );
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
  displayWordContainer: {
    height: 300,
    alignItems: 'flex-start',
  },
  buttonContainer: {
    width: 400,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    borderRadius: 5,
    backgroundColor: '#ADD8E6',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
