import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/screens/Home';
import { NewTodo } from './src/screens/NewTodo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add New Todo" component={NewTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
