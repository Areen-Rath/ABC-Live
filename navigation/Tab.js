import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Moneycontrol from '../screens/Moneycontrol';
import EconomicTimes from '../screens/EconomicTimes';
import BusinessStandard from '../screens/BusinessStandard';

const Navigator = createMaterialTopTabNavigator();

export default function Tab() {
    return (
        <Navigator.Navigator
            tabBarPosition="bottom"
            screenOptions = {{
                tabBarActiveTintColor: "lime",
                tabBarInactiveTintColor: "white",
                tabBarStyle: {
                    flex: 0.1,
                    backgroundColor: "black"
                },
                tabBarLabelStyle: {
                    fontSize: 10
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "lime",
                    height: 5
                }
            }}
        >
            <Navigator.Screen name="Economic Times" component={EconomicTimes} />
            <Navigator.Screen name="Moneycontrol" component={Moneycontrol} />
            <Navigator.Screen name="Business Standard" component={BusinessStandard} />
        </Navigator.Navigator>
    );
}