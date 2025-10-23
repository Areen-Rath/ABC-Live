import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Help from "../screens/Help";
import CustomSidebarMenu from "../ui/CustomSidebarMenu";
import Tab from "./Tab";

const Navigator = createDrawerNavigator();

// State "light" is passed as boolean as it is rendered only after the theme is fetched.
export default function Drawer({ light }: { light: boolean }) {
    return (
        <NavigationContainer>
            <Navigator.Navigator
                screenOptions={{
                    drawerActiveTintColor: light ? "white" : "black",
                    drawerActiveBackgroundColor: "#96c3ff",
                    drawerInactiveTintColor: light ? "black" : "white"
                }}
                drawerContent={props => <CustomSidebarMenu {...props} />}
            >
                <Navigator.Screen
                    name="News"
                    component={Tab}
                    options={{
                        headerStyle: {
                            backgroundColor: light ? "#fafafa" : "#292929",
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        headerTintColor: light ? "black" : "white"
                    }}
                />
                <Navigator.Screen
                    name="Help"
                    component={Help}
                    options={{
                        headerStyle: {
                            backgroundColor: light ? "#fafafa" : "#292929",
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        headerTintColor: light ? "black" : "white"
                    }} 
                />
            </Navigator.Navigator>
        </NavigationContainer>
    );
}