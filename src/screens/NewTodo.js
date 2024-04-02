import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { Textbox } from '../components/Textbox';

export const NewTodo = () => {
  const navigation = useNavigation();

  const cancelHandler = () => {
    navigation.goBack();
  };

  const saveHandler = () => {
    // Save functionality will be implemented here
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 70}
    >
      <Title title="Add New Todo" />
      <View style={styles.contentContainer}>
        <Textbox title="Title" placeholder="Name your new Todo" />
        <Textbox title="Description" placeholder="Description" />
      </View>
      <View style={styles.footer}>
        <Button onPress={cancelHandler} text="Cancel" iconName="times" />
        <Button onPress={saveHandler} text="Save" iconName="save" />
      </View>
    </KeyboardAvoidingView>
  );
}

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
