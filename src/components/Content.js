import { StyleSheet, View, Text } from 'react-native';

export const Content = ({ todoList }) => {
  return (
    <View style={styles.content}>
      {todoList.map((task, index) => (
        <View key={index} style={styles.todoItem}>
          <Text style={styles.todoText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
