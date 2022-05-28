import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from './screens/Help';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import Tab from './navigation/Tab';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Business and Economy by Moneycontrol"
          screenOptions={{
            drawerActiveTintColor: "black",
            drawerActiveBackgroundColor: "white",
            drawerInactiveTintColor: "white",
            activeTintColor: "white",
            inactiveTintColor: "black",
            itemStyle: {marginVertical: 5}
          }}
          drawerContent={props => <CustomSidebarMenu {...props} />}
        >
          <Drawer.Screen
            name="News"
            component={Tab}
            options={{
              headerStyle: {
                backgroundColor: "black"
              },
              headerTintColor: "white"
            }} 
          />
          <Drawer.Screen
            name="Help"
            component={Help}
            options={{
              headerStyle: {
                backgroundColor: "black"
              },
              headerTintColor: "white"
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}