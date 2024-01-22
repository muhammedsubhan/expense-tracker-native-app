import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from "@expo/vector-icons"
 
export default function App() {

  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpenseOverView() {
    return <BottomTabs.Navigator screenOptions={{
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:"white",
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
    }}>
      <BottomTabs.Screen name='RecentExpenses' component={RecentExpense} options={{
        title:"Recent Expenses",
        tabBarLabel:"Recents",
        tabBarIcon: ({color,size}) => {
          <Ionicons name='hourglass-outline' size={size} color={color}/>
        } 
      }}/>
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
        title:"All Expenses",
        tabBarLabel:"All",
        tabBarIcon: ({color,size}) => {
          <Ionicons name='calendar-outline' size={size} color={color}/>
        } 
      }}/>
    </BottomTabs.Navigator>
  }

  return (
   <>
   <StatusBar style="auto" />
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='ExpensesOverView' component={ExpenseOverView}
    options={{headerShown:false}}
    />
    <Stack.Screen name='ManageExpense' component={ManageExpense}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

