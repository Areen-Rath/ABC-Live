import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

export default class BusinessStandard extends React.Component {
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

        await fetch("https://abc-live-api.vercel.app/business_standard")
            .then(response => response.json())
            .then(responseJson => {
                let response = [];
                for(var i in responseJson.data){
                    let title = responseJson.data[i].title;
                    title = title.replace(/\n/g, "");
                    title = title.replace(/\r/g, "");
                    title = title.replace(/\t/g, "");

                    response.push([
                        title,
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
                    marginTop: -20,
                    alignSelf: "center",
                    width: 300,
                    height: 300,
                    resizeMode: 'contain'
                }}
                source={{uri: item.item[2]}}
                />
                <Text style={{
                    marginTop: -40,
                    fontSize: 20,
                    color: "white"
                }}>
                    {item.item[0]}
                </Text>
                <Text style={{
                    marginTop: 10,
                    fontSize: 15,
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
                                {"ABC LIVE\n📰 THE NEWS HEADLINES🗞️"}
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
                    <View style={{flex: 0.8}}>
                        <View>
                        <FlatList
                            data={this.state.response}
                            renderItem={item => {
                                return (
                                    <TouchableOpacity 
                                        style={{
                                            marginBottom: 40,
                                            width: 350,
                                            height: 450,
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
                    <View style={{flex: 0.2, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: "white"}}>Compilation of Fin News Headlines</Text>
                        <TouchableOpacity
                            style={{
                                marginTop: 10,
                                backgroundColor: "white",
                                width: 100,
                                height: 30,
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