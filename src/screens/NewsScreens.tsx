import { useContext } from "react";
import { View } from "react-native";
import Header from "../ui/Header";
import NewsList from "../ui/NewsList";
import { AppContext } from "../ts/context";
import { Source } from "../ts/interfaces";

function NewsScreen({ src, title }: Source) {
    const context = useContext(AppContext);
    const light = context.light;
    const news = src;

    return (
        <View style={{flex: 1, backgroundColor: light ? "#fafafa" : "#292929"}}>
            <Header title={title} />
            <NewsList data={news} />
        </View>
    );
}

export function EconomicTimes() {
    const news = useContext(AppContext).ET;

    return <NewsScreen src={news} title="ECONOMIC TIMES" />
}

export function Moneycontrol() {
    const news = useContext(AppContext).MC;

    return <NewsScreen src={news} title="MONEYCONTROL" />
}

export function BusinessLine() {
    const news = useContext(AppContext).BL;

    return <NewsScreen src={news} title="BUSINESS LINE" />
}