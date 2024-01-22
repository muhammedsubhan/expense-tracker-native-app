import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';

export default function App() {

  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpenseOverView() {
    return <BottomTabs.Navigator>
      <BottomTabs.Screen name='RecentExpenses' component={RecentExpense}/>
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses}/>
    </BottomTabs.Navigator>
  }

  return (
   <>
   <StatusBar style="auto" />
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='ExpensesOverView' component={ExpenseOverView}/>
    <Stack.Screen name='ManageExpense' component={ManageExpense}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

