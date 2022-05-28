import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

export default class EconomicTimes extends React.Component {
    constructor(){
        super();
        this.state = {
            date: new Date().toDateString(),
            response: []
        }
    }

    componentDidMount(){
        this.fetchNews();
    }

    fetchNews = async () => {
        this.setState({
            response: []
        });

        await fetch("https://abc-live-api.vercel.app/economic_times")
            .then(response => response.json())
            .then(responseJson => {
                let response = [];
                for(var i in responseJson.data){
                    response.push([
                        responseJson.data[i].title,
                        responseJson.data[i].link,
                        responseJson.data[i].img,
                        responseJson.data[i].desc
                    ]);
                }

                this.setState({
                    response: response
                });
            })
    }

    showNews = item => {
        return (
            <View>
                <Image
                style={{
                    paddingTop: -20,
                    alignSelf: "center",
                    width: 250,
                    height: 250,
                    resizeMode: 'contain'
                }}
                source={{uri: item.item[2]}}
                />
                <Text style={{
                    paddingTop: -40,
                    fontSize: 20,
                    color: "white"
                }}>
                    {item.item[0]}
                </Text>
                <Text style={{
                    paddingTop: 5,
                    fontSize: 14,
                    color: "white"
                }}>
                    {item.item[3]}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaProvider>
                <View style={{flex: 1, backgroundColor: "black"}}>
                    <Header
                        backgroundColor="black"
                        leftComponent={
                            <Image
                                style={{width: 40, height: 40}}
                                source={require('../assets/logo.png')}
                            />
                        }
                        centerComponent={
                            <Text style={{color: "white", textAlign: 'center'}}>
                                {"ABC LIVE\n📰 THE NEWS HEADLINES🗞️\nECONOMIC TIMES"}
                            </Text>
                        }
                        rightComponent={
                            <Text style={{color: "white", textAlign: 'right'}}>
                                {
                                    this.state.date.slice(0, 3) + "\n"
                                    + this.state.date.slice(4, 10) + "\n"
                                    + this.state.date.slice(11, 15)
                                }
                            </Text>
                        }
                    />
                    <View style={{flex: 0.9}}>
                        <View>
                        <FlatList
                            data={this.state.response}
                            renderItem={item => {
                                return (
                                    <TouchableOpacity 
                                        style={{
                                            marginBottom: 40,
                                            width: 350,
                                            height: 425,
                                            backgroundColor: "#333",
                                            borderRadius: 30,
                                            alignItems: 'center',
                                            alignSelf: 'center'
                                        }} 
                                        onPress={() => Linking.openURL(item.item[1])}
                                    >
                                        {this.showNews(item)}
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        </View>
                    </View>
                    <View style={{flex: 0.1, justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "white",
                                width: 100,
                                height: 25,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignSelf: 'center'
                            }}
                            onPress={() => this.fetchNews()}
                        >
                            <Text style={{textAlign: 'center'}}>Update News</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaProvider>
        );
    }
}