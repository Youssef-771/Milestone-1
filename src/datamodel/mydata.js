import AsyncStorage from '@react-native-async-storage/async-storage'
const STORAGE_KEY = '@todoList';

export const MyData = {
  getTodos: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error getting todos from AsyncStorage:', error);
      return [];
    }
  },
  saveTodos: async (todos) => {
    try {
      const jsonValue = JSON.stringify(todos);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving todos to AsyncStorage:', error);
    }
  },
  addTodo: async (todo) => {
    try {
      const todos = await MyData.getTodos();
      todos.push({ ...todo, completed: false }); 
      await MyData.saveTodos(todos);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  },
  markTodoComplete: async (index) => {
    try {
      const todos = await MyData.getTodos();
      todos[index].completed = true;
      await MyData.saveTodos(todos);
    } catch (error) {
      console.error('Error marking todo as complete:', error);
    }
  },
  markTodoIncomplete: async (index) => {
    try {
      const todos = await MyData.getTodos();
      todos[index].completed = false;
      await MyData.saveTodos(todos);
    } catch (error) {
      console.error('Error marking todo as incomplete:', error);
    }
  },
  deleteTodo: async (index) => {
    try {
      const todos = await MyData.getTodos();
      todos.splice(index, 1);
      await MyData.saveTodos(todos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  },
};
