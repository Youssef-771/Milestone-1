import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Title } from '../components/Title';
import { Content } from '../components/Content';

export const Home = () => {
  const navigation = useNavigation();
  const todoList = ["Buy bread", "Buy cheese", "Submit assignment"];

  const gotoNewTodoHandler = () => {
    navigation.navigate("Add New Todo");
  };

  return (
    <View style={styles.container}>
      <Title title="My Todo List" />
      <Content todoList={todoList} />
      <View style={styles.footer}>
        <View style={styles.footerBar}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={gotoNewTodoHandler}
        >
          <Ionicons name="add-circle" size={24} color="#00008B" style={styles.icon} />
          <Text style={styles.buttonText}>ADD NEW TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  icon: {
    marginRight: 5,
  },
});
