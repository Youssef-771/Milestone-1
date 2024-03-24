import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const todoList = ["Buy bread", "Buy cheese", "Submit assignment"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo List</Text>
        <View style={styles.headerLine}></View>
      </View>
      <View style={styles.content}>
        {todoList.map((task, index) => (
          <View key={index} style={styles.todoItem}>
            <Text style={styles.todoText}>{task}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBar}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD NEW TODO</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
  footer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  footerBar: {
    backgroundColor: '#000',
    width: '90%', 
    height: 1, 
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#87CEEB',
    width: '90%', 
    paddingVertical: 12, 
    borderRadius: 5,
    marginBottom: 30, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, 
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
