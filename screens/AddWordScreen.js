import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class AddWordsScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Word',
  };

  handlePressAddWord = () => {
    console.log('add word pressed')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Enter the word to add</Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Chinese Character"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          large
          loadingRight
          onPress={this.handlePressAddWord}
          title='Add Word'
        />
        <Text style={styles.response}>
          The responses go here
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    height: 60,
  },
  response: {
    paddingTop: 20,
  }
});
