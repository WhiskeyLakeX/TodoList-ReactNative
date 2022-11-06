/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {COLOR_CONFIG} from './src/config';
import {getWindowWidth, getWindowHeight} from './src/styles/Layout/layout';
import TaskItemList from './src/screens/TaskItemList';
import TopNavigationBar from './src/component/common/TopNavigationBar';

const {BACKGROUND_LIGHT, SCREEN_TEXT_GENERAL} = COLOR_CONFIG;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: BACKGROUND_LIGHT,
    color: SCREEN_TEXT_GENERAL,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.appContainer}>
        <TopNavigationBar />
        <TaskItemList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: getWindowHeight(),
    width: getWindowWidth(),

    flexDirection: 'column',
  },
  appTitle: {
    marginBottom: 20,
    color: 'black',
  },
});

export default App;
