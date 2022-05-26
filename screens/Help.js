import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default class Help extends React.Component {
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
                    />
                    <ScrollView>
                        <View>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Starting the app and News Loading
                            </Text>
                            <Text style={{fontSize: 15, color: "white"}}>
                                When opening any screen at the start, there will be a black area on the screen for news.
                                This area will be empty at start because of loading of news. With good internet, it takes
                                maximum 4-5 seconds to load the news.
                            </Text>
                            <Text
                                style={{
                                    marginTop: 20,
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Updating News
                            </Text>
                            <Text style={{fontSize: 15, color: "white"}}>
                                Click on Update News button present at the bottom of the screen.
                            </Text>
                            <Text style={{fontSize: 15, color: "white"}}>
                                NOTE: Updating news is separate for the news by different websites.
                                To update the news of all the websites, go to every website news screen and update it.
                            </Text>
                            <Text
                                style={{
                                    marginTop: 20,
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Reading More about the News
                            </Text>
                            <Text style={{fontSize: 15, color: "white"}}>
                                To read more about the news, click on the news and it will take you to the webpage of
                                the news.
                            </Text>
                            <Text
                                style={{
                                    marginTop: 20,
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Sources of News
                            </Text>
                            <Text style={{fontSize: 15, color: "white"}}>
                                These news are taken from Moneycontrol, Economic Times and Business Standard.
                            </Text>
                        </View>
                        <Text
                            style={{
                                marginTop: 20,
                                fontSize: 20,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            ABC Live v3
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaProvider>
        );
    }
}