import { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../ui/Header";
import { AppContext } from "../ts/context";

export default function Help() {
    const context = useContext(AppContext);
    const light = context.light;

    return (
        <View style={{flex: 1, backgroundColor: light ? "#fafafa" : "#292929"}}>
            <Header title="Help" />
            <ScrollView style={{flex: 0.9}}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: light ? "#779ac9" : "#96c3ff"
                    }}
                >
                    The Interface
                </Text>
                <Text style={{fontSize: 15, color: light ? "black" : "white"}}>
                    When opening the app, the app fetches news from its sources which requires Internet
                    connection. The faster the network speed, the faster it would take to load data. During
                    this period, the screen remains blank.
                    {"\n"}
                    After loading is complete, you're presented with headlines in the form of cards shown in
                    the image above. Each headline card is a button that links each headline to its source page.
                    To read more about a headline, you can click on the card which would redirect you to its page.
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: "bold",
                        color: light ? "#779ac9" : "#96c3ff"
                    }}
                >
                    Updating News
                </Text>
                <Text style={{fontSize: 15, color: light ? "black" : "white"}}>
                    The app uses pull-to-refresh mechanism to update the news. Simply go up to the beginning, and pull
                    down to refresh and update the news.
                    {"\n"}
                    NOTE: Pull-to-refresh updates the news for all screens.
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: "bold",
                        color: light ? "#779ac9" : "#96c3ff"
                    }}
                >
                    Sources of News
                </Text>
                <Text style={{fontSize: 15, color: light ? "black" : "white"}}>
                    The app provides a compilation of top financial news headlines from Economic Times, Moneycontrol
                    and Business Line.
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: "bold",
                        color: light ? "#779ac9" : "#96c3ff"
                    }}
                >
                    Support
                </Text>
                <Text style={{fontSize: 15, color: light ? "black" : "white"}}>
                    In case there is an issue with the app, for example, a news screen being blank despite having good
                    Internet connection, or if there is a suggestion to make the app better, you can mail to:
                    {"\n"}
                    areenrath0805@gmail.com
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 20,
                        color: light ? "#779ac9" : "#96c3ff",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    ABC Live v6.1
                </Text>
            </ScrollView>
        </View>
    );
}