import { useContext } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import Card from "./Card";
import { AppContext } from "../ts/context";

export default function NewsList({ data }: { data: object[] }) {
    const context = useContext(AppContext);
    const { light, ET, MC, BL } = context;
    const fetchAll = context.fetchAll;
    
    return (
        <View style={{flex: 0.9}}>
            <FlatList
                data={data}
                renderItem={({ item }: { item: object }) => <Card news={item as object[]} />}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={
                            // Loading icon should disappear only after news from all websites is fetched.
                            (ET.length > 0 &&
                            MC.length > 0 &&
                            BL.length > 0)
                                ? false
                                : true
                        }
                        onRefresh={() => {
                            fetchAll();
                        }}
                        colors={[light ? "#779ac9" : "#96c3ff"]}
                        tintColor={light ? "#779ac9" : "#96c3ff"}
                        progressBackgroundColor={light ? "#fafafa" : "#292929"}
                    />
                }
            />
        </View>
    );
}