import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, } from '../styles/AppStyles';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

const HomeScreen = () => {
    //Initial Targets
    const initialTodos =[{
        title: "Buy a new Laptop",
        date: "Tues, 24 Nov. 2021 16:22:11 GMT",
        key: "1"
    },
    {
        title: "Buy a House",
        date: "Tues, 24 Nov. 2021 13:22:11 GMT",
        key: "2"
    },
    {
        title: "Buy a Benz",
        date: "Tues, 24 Nov. 2021 19:12:11 GMT",
        key: "3"
    }
]

const [todos, setTodos] = useState(initialTodos);
//clearing all targets
const handleClearTodos = () =>{
    setTodos([])
}

//modal visibility
const [modalVisible, setModalVisible] = useState(false)

//Input Value
const [todoInputValue, setTodoInputValue] = useState();

//adding targets
const handleAddTodo = (todo) =>{
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
}
const [todoToBeEdited, setTodoToBeEdited] = useState(null);
//Editting Targets
const handleTriggerEdit = (item) =>{
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title)
}

const handleEditTodo = (editedTodo) =>{
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoToBeEdited(null)
    setModalVisible(false)
}

return (
        <Container>
            <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems todos={todos} setTodos={setTodos} 
                handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal 
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
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



export default HomeScreen
