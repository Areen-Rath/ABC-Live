import { useState, useEffect } from "react";
import * as StatusBar from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Drawer from "./src/navigation/Drawer";
import { AppContext } from "./src/ts/context";
import { fetchNews, fetchTheme } from "./src/ts/processes";
import { BasicContext } from "./src/ts/interfaces";

export default function App() {
  // Initializing "light" state to null to prevent rendering before theme is fetched from
  // local storage.
  const [light, setTheme] = useState<boolean | null>(null);

  const [date, setDate] = useState(new Date().toDateString());
  const [ET, setET] = useState<object[]>([]);
  const [MC, setMC] = useState<object[]>([]);
  const [BL, setBL] = useState<object[]>([]);

  const fetchAll = () => {
    // Date is changed in case the user opens the app without quitting it on a different date.
    setDate(new Date().toDateString());

    fetchNews("https://abc-live-api.vercel.app/economic_times", setET);
    fetchNews("https://abc-live-api.vercel.app/moneycontrol", setMC);
    fetchNews("https://abc-live-api.vercel.app/business_line", setBL);
  }
  
  // Theme, date and latest news are fetched upon opening the app.
  useEffect(() => {
    fetchTheme(setTheme);
    fetchAll();
    StatusBar.setStatusBarStyle(light ? "dark" : "light");
    NavigationBar.setButtonStyleAsync(light ? "dark" : "light");
  }, [setTheme]);

  // Context enables components other than the main App component to access/alter data.
  // This includes accessing news, date and theme; and using methods to update them.
  const context: BasicContext = {
    date: date,
    setDate: setDate,
    light: light,
    setTheme: setTheme,
    ET: ET,
    MC: MC,
    BL: BL,
    fetchAll: fetchAll
  }

  // Render only after the current theme is fetched.
  if (light !== null) {
    return (
      <AppContext.Provider value={context}>
        <SafeAreaView style={{flex: 1, backgroundColor: light ? "#fafafa" : "#292929"}}>
          <Drawer light={light} />
        </SafeAreaView>
      </AppContext.Provider>
    );
  }
}