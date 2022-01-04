import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

export default class App extends React.Component {
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

    await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf8b306c9b674af1bcc4a1901fee6d34")
      .then(response => response.json())
      .then(responseJson => {
        let response = [];
        for(var i in responseJson.articles){
          response.push([responseJson.articles[i].title, responseJson.articles[i].url, responseJson.articles[i].urlToImage, responseJson.articles[i].content]);
        }

        this.setState({
          response: response
        });
      })
  }

  showNews = item => {
    var content

    item.item[3]
      ? content = item.item[3].split(" [")
      : undefined

    if(item.item[2]){
      return (
        <View>
          <Image
            style={{marginTop: -40, alignSelf: "center", width: 300, height: 300, resizeMode: 'contain'}}
            source={{uri: item.item[2]}}
          />
          <Text style={{marginTop: -40, fontSize: 20, color: "white"}}>{item.item[0]}</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: "white"}}>{content ? content[0] : undefined}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Image
            style={{marginTop: 30, alignSelf: "center", width: 150, height: 150, resizeMode: 'contain'}}
            source={require('./assets/logo.png')}
          />
          <Text style={{marginTop: 20, fontSize: 20, color: "white"}}>{item.item[0]}</Text>
          <Text style={{fontSize: 15, color: "white"}}>{content ? content[0] : undefined}</Text>
        </View>
      );
    }
  }

  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor="black"
            leftComponent={
              <Image
                style={{width: 40, height: 40}}
                source={require('./assets/logo.png')}
              />
            }
            centerComponent={<Text style={{color: "white", textAlign: 'center'}}>{"ABC LIVE\n📰 THE NEWS HEADLINES🗞️"}</Text>}
            rightComponent={<Text style={{color: "white", textAlign: 'right'}}>{this.state.date.slice(0, 3) + "\n" + this.state.date.slice(4, 10) + "\n" + this.state.date.slice(11, 15)}</Text>}
          />
          <View style={{flex: 0.8}}>
            <View>
              <FlatList
                data={this.state.response}
                renderItem={item => {
                  return (
                    <TouchableOpacity 
                      style={{marginBottom: 40, width: 350, height: 425, backgroundColor: "#333", borderRadius: 30, alignItems: 'center', alignSelf: 'center'}} 
                      onPress={() => Linking.openURL(item.item[1])}>
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
              backgroundColor: "white", width: 100, marginTop: 10, height: 30,
              alignSelf: 'center', justifyContent: 'center', borderRadius: 30}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});