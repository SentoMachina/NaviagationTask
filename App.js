import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator,
          createStackNavigator, } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Details')}
      >
      <Text> Go to Details </Text>         
      </TouchableOpacity>
    </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Details')}
      >
      <Text> Go to Details </Text>         
      </TouchableOpacity>
    </View>
  );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});
export default createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})