import { useContext } from "react";
import { View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import ThemeToggle from "./ThemeToggle";
import { AppContext } from "../ts/context";

export default function CustomSidebarMenu(props: DrawerContentComponentProps) {
    const light = useContext(AppContext).light;
    
    return (
        <View style={{flex: 1, backgroundColor: light ? "#fafafa" : "#292929"}}>
            <Image
                source={require("../../assets/icon.png")}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: "center",
                    marginTop: 50,
                    marginBottom: 30,
                    resizeMode: "contain",
                    borderRadius: 50
                }}
            />
            <View style={{alignItems: "center", marginBottom: 30}}>
                <ThemeToggle />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}