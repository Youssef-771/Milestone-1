import { StyleSheet, View, Text } from 'react-native';

export const Title = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.headerLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50, 
    height: 110, 
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
});
