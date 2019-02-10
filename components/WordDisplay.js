import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WRITE_MODE, READ_MODE } from '../constants/Constants'; 

export default class WordDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      revealAnswer: false,
    }
  }

  handleClickReveal = () => {
    this.setState({
      revealAnswer: !this.state.revealAnswer
    })
  }

  renderWriteView = () => {
    return (
      <View style={styles.displayWordContainer}>
        <Text style={styles.title}>WRITE THE WORD</Text>

        <Text>ID: {this.props.id}</Text>
        <Text>Ping Ying: {this.props.pingYing}</Text>
        <Text>Meaning: {this.props.meaning}</Text>
        <Text>
          {this.props.notes !== '' && this.props.notes}
        </Text>
        <TouchableOpacity
          onPress={() => this.handleClickReveal()}
          style={styles.revealBtn}
        >
          <Text>{this.state.revealAnswer ? 'Hide' : 'Reveal'}</Text>
        </TouchableOpacity>

        {this.state.revealAnswer && 
        <View>
          <Text style={styles.character}>{this.props.character}</Text>
          <Text>{JSON.stringify(this.props.examples)}</Text>
        </View>}
      </View>
    )
  }

  renderReadView = () => {
    return (
      <View style={styles.displayWordContainer}>
        <Text style={styles.title}>WHAT IS THIS WORD?</Text>
        <Text style={styles.character}>{this.props.character}</Text>

        <TouchableOpacity
          onPress={() => this.handleClickReveal()}
          style={styles.revealBtn}
        >
          <Text>{this.state.revealAnswer ? 'Hide' : 'Reveal'}</Text>
        </TouchableOpacity>

        {this.state.revealAnswer && 
        <View>
          <Text>ID: {this.props.id}</Text>
          <Text>Ping Ying: {this.props.pingYing}</Text>
          <Text>Meaning: {this.props.meaning}</Text>
          <Text>
            {this.props.notes !== '' && this.props.notes}
          </Text>
          <Text>{JSON.stringify(this.props.examples)}</Text>
        </View>}
      </View>
    )
  }

  render() {
    const {
      displayMode
    } = this.props;
    return (
      <View style={styles.container}>
        {displayMode === WRITE_MODE && this.renderWriteView()}
        {(displayMode === READ_MODE) && this.renderReadView()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  displayWordContainer: {
    width: 400,
    height: 650,
    overflow: 'scroll',
  },
  title: {
    fontSize: 24, 
    alignSelf: 'center',
    paddingBottom: 16,
  },
  revealBtn: {
    borderRadius: 5,
    backgroundColor: '#ADD8E6',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  character: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 42,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
});