import React, { useState } from "react";
import { View, Text, Image,
  ScrollView, StyleSheet, 
  TouchableOpacity } 
  from 'react-native';
// styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
} from '../styles/AppStyles'

import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItems = ({ todos, setTodos, handleTriggerEdit }) => {
  // List things
  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);

    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
      })
      .catch((error) => console.log(error));
  };

  // For styling currently swiped todo row
  const [swipedRow, setSwipedRow] = useState(null);

  return (
    <>
      {todos.length == 0 && <TodoText>You have no Target at the Moment</TodoText>}
      {todos.length != 0 && (
        <SwipeListView
          data={todos}
          renderItem={(data) => {
            const RowText =
              data.item.key == swipedRow ? SwipedTodoText : TodoText;
            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => {
                  handleTriggerEdit(data.item);
                }}
              >
                <>
                  <RowText>{data.item.target}</RowText>
                  <RowText>{data.item.amount}</RowText>
                  <RowText>{data.item.duration}</RowText>
                  <TodoDate>{data.item.date}</TodoDate>
                  {/* <RowText>{data.item.duration}</RowText>
                  <TodoDate>{data.item.date}</TodoDate> */}
                </>
              </ListView>
            );
          }}
          renderHiddenItem={(data, rowMap) => (
            <ListViewHidden>
              <HiddenButton
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
              >
                <Entypo name="trash" size={40} style={{marginTop: 20}} color="white"/>
              </HiddenButton>
            </ListViewHidden>
          )}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
          // Handling swiped todo row
          onRowOpen={(rowKey) => {
            setSwipedRow(rowKey);
          }}
          onRowClose={() => {
            setSwipedRow(null);
          }}
        />
      )}
    </>
  );
};

export default ListItems;
