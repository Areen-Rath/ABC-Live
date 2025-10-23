import { useContext } from "react";
import { Text, View, Image } from "react-native";
import { AppContext } from "../ts/context";

export default function Header({ title }: { title: string }) {
    const context = useContext(AppContext);
    const date = context.date;
    const light = context.light;

    return (
        <View style={{flex: 0.1, flexDirection: "row"}}>
            <Image
                style={{marginLeft: "2%", width: 50, height: 50, borderRadius: 25}}
                source={require('../../assets/logo.png')}
            />
            <Text
                style={{
                    marginLeft: "8.5%",
                    textAlign: "center",
                    color: light ? "#779ac9" : "#96c3ff"
                }}
            >
                {`ABC LIVE\n📰 THE NEWS HEADLINES🗞️\n${title}`}
            </Text>
            <Text
                style={{
                    marginLeft: "8.5%",
                    color: light ? "#779ac9" : "#96c3ff",
                    textAlign: "right"
                }}
            >
                {
                    date.slice(0, 3) + "\n"
                    + date.slice(4, 10) + "\n"
                    + date.slice(11, 15)
                }
            </Text>
        </View>
    );
}