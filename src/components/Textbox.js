import { StyleSheet, View, Text, TextInput } from 'react-native';

export const Textbox = ({ title, placeholder, value, onChangeText }) => { 
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        style={[styles.input, title === "Description" && styles.multilineInput]}
        placeholder={placeholder}
        multiline={title === "Description"}
        numberOfLines={title === "Description" ? 3 : 1}
        value={value} 
        onChangeText={onChangeText} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});
