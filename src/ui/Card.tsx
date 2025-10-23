import { useContext } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { AppContext } from "../ts/context";

export default function Card({ news }: { news: object[] }) {
    const light = useContext(AppContext).light;

    return (
        <TouchableOpacity 
            style={{
                marginBottom: 40,
                width: 350,
                height: 500,
                backgroundColor: light ? "#d7eaff" : "#3f526b",
                borderRadius: 30,
                alignItems: "center",
                alignSelf: "center"
            }} 
            onPress={() => Linking.openURL(news[1].toString())}
        >
            <View>
                <Image
                    style={{
                        paddingTop: -20,
                        alignSelf: "center",
                        width: 250,
                        height: 250,
                        resizeMode: "contain"
                    }}
                    source={{uri: news[2].toString()}}
                />
                <Text
                    style={{
                        paddingTop: -40,
                        fontSize: 20,
                        color: light ? "black" : "white"
                    }}
                >
                    {news[0].toString()}
                </Text>
                <Text
                    style={{
                        paddingTop: 5,
                        fontSize: 14,
                        color: light ? "black" : "white"
                    }}
                >
                    {news[0].toString()}
                </Text>
            </View>
        </TouchableOpacity>
    );
}