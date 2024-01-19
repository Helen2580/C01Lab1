import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
  const [toDoLists, setToDoList] = useState(initialValues.map((value) => ({ id: uuidv4(), titles: value })));

  const addToDo = (newTitle) => {
    const newElement = { id: uuidv4(), titles: newTitle };
    setToDoList((prevTitle) => [...prevTitle, newElement]);
  };

  const removeToDo = (id) => {
    setToDoList(toDoLists.filter(toDo => toDo.id !== id));
  };

  return (
    <View style={styles.container}>
      {toDoLists.map((toDo) => (
        <View key={toDo.id} style={styles.todoItem}>
          <Text> {toDo.titles}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
          </View>
        </View>
      ))}
      <AddTask onAddTask={addToDo}/>
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;