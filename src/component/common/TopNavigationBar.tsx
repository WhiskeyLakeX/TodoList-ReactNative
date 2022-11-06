import React, {ReactElement, useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR_CONFIG} from '../../config';
import {getWindowWidth} from '../../styles/Layout/layout';

const {ICON_GENERAL, BORDER_TEXT_INPUT, INPUT_BACKGROUND} = COLOR_CONFIG;

const TopNavigationBar = (): ReactElement => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleSearchBox = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <View style={styles.topNavigationBarContainer}>
      <TouchableOpacity>
        <Icon name="list" style={styles.topNavigationBarIcon} />
      </TouchableOpacity>
      {isOpenSearch && (
        <TextInput style={styles.topNavigationBarSearchBox} autoFocus />
      )}
      <TouchableOpacity onPress={toggleSearchBox}>
        <Icon name="search" style={styles.topNavigationBarIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavigationBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginTop: 5,
  },
  topNavigationBarIcon: {
    color: ICON_GENERAL,
    fontSize: 30,
  },
  topNavigationBarSearchBox: {
    borderRadius: 8,
    backgroundColor: INPUT_BACKGROUND,
    borderColor: BORDER_TEXT_INPUT,
    width: getWindowWidth() - 120,
    height: 35,
  },
});
export default TopNavigationBar;
