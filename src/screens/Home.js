import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { MyData } from '../datamodel/mydata';
import RenderTodoItem from '../components/RenderTodoItem'; 

const screenWidth = Dimensions.get('window').width;

export const Home = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 
  const [todoList, setTodoList] = useState([]);
  const [expandedItems, setExpandedItems] = useState(new Array(todoList.length).fill(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await MyData.getTodos();
        setTodoList(todos);
        setExpandedItems(new Array(todos.length).fill(false));
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
  
    fetchData(); 
  
    
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
  
    return unsubscribe;
  }, [isFocused]);

  const toggleExpand = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  const markAsComplete = async (index) => {
    try {
      await MyData.markTodoComplete(index);
      const updatedTodos = [...todoList];
      updatedTodos[index].completed = true; 
      setTodoList(updatedTodos);
    } catch (error) {
      console.error("Error marking todo as complete:", error);
      
    }
  };

  const deleteTodo = async (index) => {
    try {
      await MyData.deleteTodo(index);
      const updatedTodos = [...todoList];
      updatedTodos.splice(index, 1);
      setTodoList(updatedTodos);
      setExpandedItems(expandedItems.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting todo:", error); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo List</Text>
        <View style={styles.headerLine}></View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={todoList}
          renderItem={({ item, index }) => (
            <RenderTodoItem
              item={item}
              index={index}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
              markAsComplete={markAsComplete}
              deleteTodo={deleteTodo}
              screenWidth={screenWidth} 
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBar}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add New Todo")}
        >
          <Ionicons name="add-circle" size={24} color="#00008B" style={styles.icon} />
          <Text style={styles.buttonText}>ADD NEW TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    height: 120,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerLine: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 5,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 1,
    paddingHorizontal: 20,
  },
  todoItem: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoText: {
    color: '#000',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  todoDescription: {
    color: '#000',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEEB',
    width: '90%',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 30,
    margin: 17,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
