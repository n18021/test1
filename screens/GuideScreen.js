import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

export default class App extends Component<{}> {
  _onPressButton() {
    Alert.alert('実装されてません!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
           <Text>恋愛相談所</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
           <Text>デートプラン</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
           <Text>おすすめコーディネート</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
           <Text>告白・プロポーズ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    width: 250,
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
});

