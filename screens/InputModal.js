import React, { useState } from "react";
import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from '../styles/AppStyles'
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const InputModal = ({
  modalVisible,
  setModalVisible,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  targetValue,
  setTargetValue,
  amountValue,
  setAmountValue,
  durationValue,
  setDurationValue,
 
  handleEditTodo,
  todos,
 
}) => {

  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        target: targetValue,
        amount: amountValue,
        duration: durationValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      });
    } else {
      handleEditTodo({
        target: targetValue,
        amount: amountValue,
        duration: durationValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    } 
    setTargetValue("");
    setAmountValue("");
    setDurationValue("");
  };

  const handleCloseModal = () => {
   
    setTargetValue("");
    setAmountValue("");
    setDurationValue("");
    setModalVisible(false);
    setTodoToBeEdited(null);
  };

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={40} color={colors.white} />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle style={{color: 'white'}}>Set  Target</HeaderTitle>
              <AntDesign name="edit" size={40} color={colors.tertiary} />
            </ModalIcon>
          {/* Input field to receive users targets */}
            {/* <StyledInput
              placeholder="Set a Target"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            /> */}
            <StyledInput value={targetValue} 
            placeholder="Set a target"
                autoFocus={true} 
                onSubmitEditing={handleSubmit}
                placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              onChangeText={(text) => setTargetValue(text)}
              
    
            />
            <StyledInput value={amountValue} 
            placeholder="Add a Target Amount"
             autoFocus={true}
             onSubmitEditing={handleSubmit}
             placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              keyboardType = 'numeric'
              onChangeText={(text) => setAmountValue(text)}
            />
            <StyledInput value={durationValue} 
            placeholder="Set duration"
              autoFocus={true}
              onSubmitEditing={handleSubmit}
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              onChangeText={(text) => setDurationValue(text)}
         
            />
            
            <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color={colors.white}>
                <AntDesign name="close" size={28} color={colors.secondary} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={colors.tertiary}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
