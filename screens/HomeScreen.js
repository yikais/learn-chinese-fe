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
import { Button } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          large
          loadingRight
          onPress={this.handlePressAddWord}
          buttonStyle={styles.buttons}
          title='Add A New Word'
        />
        <Button
          large
          loadingRight
          onPress={this.handlePressRandomNWords}
          buttonStyle={styles.buttons}
          title='Random Words Test'
        />
        <Button
          large
          loadingRight
          onPress={this.handlePressLastNWords}
          buttonStyle={styles.buttons}
          title='Last N Words Test'
        />
      </View>
    );
  }

  handlePressAddWord = () => {
    console.log('Add word pressed')
  }

  handlePressRandomNWords = () => {
    console.log('Random N words pressed');
  }

  handlePressLastNWords = () => {
    console.log('Last N words pressed');
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
  buttons: {
    borderRadius: 5,
  },
});
