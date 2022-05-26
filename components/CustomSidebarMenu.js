import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default class CustomSidebarMenu extends React.Component {
    render(){
        let props = this.props;
        return (
            <View style={{flex: 1, backgroundColor: "black"}}>
                <Image
                    source={require('../assets/icon.png')}
                    style={styles.sideMenuIcon}
                />
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sideMenuIcon: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 60,
        marginBottom: 60,
        resizeMode: "contain"
    }
});