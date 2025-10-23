import { useContext } from "react";
import * as StatusBar from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import Toggle from "react-native-toggle-element";
import Ionicons from "@react-native-vector-icons/ionicons";
import { AppContext } from "../ts/context";
import { switchTheme } from "../ts/processes";

export default function ThemeToggle() {
    const context = useContext(AppContext);
    const light = context.light;
    const setTheme = context.setTheme;

    return (
        <Toggle
            trackBarStyle={{
                // zIndex ensures toggle visibility.
                zIndex: -1,
                backgroundColor: "#96c3ff"
            }}
            thumbStyle={{
                backgroundColor: light ? "black" : "white"
            }}
            // Ignoring the case when "light" state is null upon initialization as
            // the toggle is rendered only after the "light" state is assigned a Boolean
            // value after fetching the theme from local storage.
            value={light!}
            onPress={(val: boolean | undefined) => {
                switchTheme(val, setTheme);
                StatusBar.setStatusBarStyle(val ? "dark" : "light");
                NavigationBar.setButtonStyleAsync(val ? "dark" : "light");
            }}
            leftComponent={
                <Ionicons name="moon" color={light ? "white" : "black"} size={20} />
            }
            rightComponent = {
                <Ionicons name="sunny" color={light ? "white" : "black"} size={20} />
            }
        />
    );
}