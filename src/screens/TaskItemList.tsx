import {View, TouchableOpacity} from 'react-native';
import React, {ReactElement} from 'react';
import TaskItem from '../component/TaskItem';
import TextGlobalMedium from '../styles/GlobalStyle/TextGlobalMedium';
import {styles} from '../styles/GlobalStyle/ScreenContentContainer';

const TaskItemList = (): ReactElement => {
  return (
    <View>
      <TextGlobalMedium style={styles.screenTitle}>Todo List</TextGlobalMedium>
      <View style={styles.screenContentContainer}>
        <TaskItem />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <TextGlobalMedium>Add task</TextGlobalMedium>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItemList;
