import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [opacity, setOpacity] = useState(1)

  const addTask = () => {
    setTodos([...todos, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>Today's Tasks</Text>
          {todos.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task content={item} />
              </TouchableOpacity>
            )
          })}
          
      </View>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={text => setTask(text)} value={task} style={styles.input} placeholder="Write a task!"/>
        <TouchableOpacity style={styles.inputButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
    paddingHorizontal: 10
  },
  taskContainer: {
    flex: 6,
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  },  
  input: {
    height: 50,
    width: '75%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10
  },
  inputButton: {
    height: 50,
    padding: 10,
    backgroundColor: '#7DB9B6',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }

});
