import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const RenderTodoItem = ({ item, index, expandedItems, toggleExpand, markAsComplete, deleteTodo }) => {
  const isCompleted = item.completed;

  return (
    <View style={[styles.todoItem, { width: screenWidth - 40 }]}>
      <View style={styles.todoHeader}>
        <Text style={[styles.todoText]}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          {expandedItems[index] ? (
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Octicons name="triangle-up" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Octicons name="triangle-down" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {expandedItems[index] && (
        <>
          <Text style={styles.todoDescription}>{item.description}</Text>
          <View style={styles.actionButtonsContainer}>
            {!isCompleted && (
              <TouchableOpacity onPress={() => markAsComplete(index)}>
                <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => deleteTodo(index)} style={styles.trashButton}>
              <Ionicons name="trash-bin" size={24} color="red" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    color: '#000',
    marginRight: 10,
  },
  todoDescription: {
    color: '#000',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
  trashButton: {
    marginLeft: 'auto', 
  },
});

export default RenderTodoItem;
