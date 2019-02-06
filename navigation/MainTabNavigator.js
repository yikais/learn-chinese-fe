import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddWordScreen from '../screens/AddWordScreen';
import TestMeScreen from '../screens/TestMeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  // Home: TestMeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const AddWordStack = createStackNavigator({
  AddWord: AddWordScreen,
});

AddWordStack.navigationOptions = {
  tabBarLabel: 'Add Word',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  ),
};

const TestMeStack = createStackNavigator({
  TestMe: TestMeScreen,
});

TestMeStack.navigationOptions = {
  tabBarLabel: 'Test Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AddWordStack,
  TestMeStack,
});
