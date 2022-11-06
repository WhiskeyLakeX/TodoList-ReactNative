import {StyleSheet} from 'react-native';
import {COLOR_CONFIG} from '../../config/index';

const {SCREEN_TEXT_TITLE} = COLOR_CONFIG;

export const styles = StyleSheet.create({
  // screenWrapper: {
  //   height: 580,
  // },
  screenTitle: {
    fontSize: 32,
    color: SCREEN_TEXT_TITLE,
  },
  screenContentContainer: {
    marginTop: 20,
  },
  addButton: {
    borderRadius: 45,
    backgroundColor: 'black',
    height: 55,
    width: 55,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
