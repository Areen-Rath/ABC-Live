import { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { EconomicTimes, Moneycontrol, BusinessLine } from "../screens/NewsScreens";
import { AppContext } from "../ts/context";

const Navigator = createMaterialTopTabNavigator();

export default function Tab() {
    const light = useContext(AppContext).light;

    return (
        <Navigator.Navigator
            tabBarPosition="bottom"
            screenOptions = {{
                tabBarActiveTintColor: light ? "#779ac9" : "#96c3ff",
                tabBarInactiveTintColor: light ? "black" : "white",
                tabBarStyle: {
                    flex: 0.1,
                    backgroundColor: light ? "#fafafa" : "#292929",
                    // elevation (for android) and shadowOpacity (for iOS)
                    // removes the shadow of the tab navigator on the screen.
                    elevation: 0,
                    shadowOpacity: 0
                },
                tabBarLabelStyle: {
                    fontSize: 11.5
                },
                tabBarIndicatorStyle: {
                    backgroundColor: light ? "#779ac9" : "#96c3ff",
                    height: 5
                }
            }}
        >
            <Navigator.Screen name="Economic Times" component={EconomicTimes} />
            <Navigator.Screen name="Moneycontrol" component={Moneycontrol} />
            <Navigator.Screen name="Business Line" component={BusinessLine} />
        </Navigator.Navigator>
    );
}