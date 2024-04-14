import { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Alert } from 'react-native'; // Import Alert from react-native
import { useNavigation } from "@react-navigation/native";
import { MyData } from '../datamodel/mydata';
import { Title } from '../components/Title';
import { Textbox } from '../components/Textbox';
import { Button } from '../components/Button';

export const NewTodo = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const cancelHandler = () => {
    navigation.goBack();
  };

  const saveHandler = async () => {
    
    if (!title.trim() || !description.trim()) { 
      return; 
    }
    
    const newTodo = { title, description };
    await MyData.addTodo(newTodo);
    setTitle('');
    setDescription('');
    Alert.alert('Todo Added Successfully');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 70}
    >
      {/* Integration of the Title component with the title "Add New Todo" */}
      <Title title="Add New Todo" /> 
      
      <View style={styles.contentContainer}>
        {/* Integration of the Textbox component */}
        <Textbox
          title="Title"
          placeholder="Name your new Todo"
          value={title}
          onChangeText={setTitle}
        />
        <Textbox
          title="Description"
          placeholder="Description"
          multiline={true}
          numberOfLines={3}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      
      <View style={styles.footer}>
        {/* Integration of the Button component */}
        <Button onPress={cancelHandler} text="Back" iconName="arrow-left" />
        <Button onPress={saveHandler} text="Save" iconName="save" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    width: '100%',
  },
});
