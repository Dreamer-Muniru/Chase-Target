import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, } from '../styles/AppStyles';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';
// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

const AddTarget = () => {
    //Initial Targets
    const initialTodos = [];
    const [todos, setTodos] = useState(initialTodos);
  
//clearing all targets
const handleClearTodos = () =>{
    AsyncStorage.setItem("storeTodos", JSON.stringify([])).then(() =>{
        setTodos([])
    }).catch(error => console.log(error))
}

//modal visibility
const [modalVisible, setModalVisible] = useState(false)

//Input Value
// const [todoInputValue, setTodoInputValue] = useState();
const [TargetValue, setTargetValue] = useState();
const [AmountValue, setAmountValue] = useState();
const [DurationValue, setDurationValue] = useState();

//adding targets
 
const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];

    // Saving to async storage
    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };
const [todoToBeEdited, setTodoToBeEdited] = useState(null);
//Editting Targets
const handleTriggerEdit = (item) =>{
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTargetValue(item.target)
    setAmountValue(item.amount)
    setDurationValue(item.duration)
    
}

const handleEditTodo = (editedTodo) =>{
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);

    AsyncStorage.setItem("storeTodos", JSON.stringify(newTodos)).then(() =>{
        setTodos(newTodos)
        setModalVisible(false);
        setTodoToBeEdited(null)
    }).catch(error => console.log(error))
}



//
const [ready, setReady] = useState(false);

const loadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
//

return (
        <Container>
            <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems todos={todos} setTodos={setTodos} 
                handleTriggerEdit={handleTriggerEdit}
            />
             {/* <InputModal 
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleAddTodo={handleAddTodo}
                todoToBeEdited={todoToBeEdited}
                setTodoToBeEdited={setTodoToBeEdited}
                todos={todos}
                handleEditTodo={handleEditTodo}
            /> */}
            
            <InputModal 
                targetValue={TargetValue}
                setTargetValue={setTargetValue}
                amountValue={AmountValue}
                setAmountValue={setAmountValue}
                durationValue={DurationValue}
                setDurationValue={setDurationValue}

                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleAddTodo={handleAddTodo}
                todoToBeEdited={todoToBeEdited}
                setTodoToBeEdited={setTodoToBeEdited}
                todos={todos}
                handleEditTodo={handleEditTodo}
            />
            
           
                <StatusBar style="" />
            </>
        </Container>
    )
}



export default AddTarget
