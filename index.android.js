/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
   ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
 },
map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class snapmap extends Component {
    state = {
        lat : 37.78825,
        long : -122.4324
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                position = position.coords;
                var initialPosition = JSON.stringify(position)
                console.log( JSON.stringify( position ) );
                this.setState(
                {
                    lat : position.latitude,
                    long : position.longitude
                } );
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 3000}
        );
    }

    render() {

        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.lat,
                        longitude: this.state.long,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                </MapView>
            </View>
        );
    }
}

AppRegistry.registerComponent('snapmap', () => snapmap);
