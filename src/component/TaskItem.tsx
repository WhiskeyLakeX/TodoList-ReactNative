import React, {ReactElement, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {COLOR_CONFIG} from '../config';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  TASK_ITEM_CONTAINER_BACKGROUND,
  TASK_ITEM_SHADOW,
  SCREEN_TEXT_GENERAL,
  ICON_GENERAL,
} = COLOR_CONFIG;

const TaskItem = (): ReactElement => {
  const configField = {
    textInputPlaceholder: 'Enter the new task...',
  };

  const [taskInput, setTaskInput] = useState<String>('');

  return (
    <View style={styles.taskItemContainer}>
      <TouchableNativeFeedback>
        <TextInput
          style={styles.textInput}
          placeholder={configField.textInputPlaceholder}
          onChangeText={textInput => {
            setTaskInput(textInput);
          }}
        />
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Icon name="ellipsis-vertical" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: TASK_ITEM_CONTAINER_BACKGROUND,
    height: 45,

    borderRadius: 8,

    shadowColor: TASK_ITEM_SHADOW,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInput: {
    color: SCREEN_TEXT_GENERAL,
  },

  icon: {
    color: ICON_GENERAL,
    fontSize: 30,
  },
});

export default TaskItem;
