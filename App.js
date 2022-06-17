import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Switch, View } from 'react-native'
import Calculator from './src/screens/Calculator/Calculator';
import { ThemeContext } from "./src/context/ThemeContext";
import { colors } from './src/constants/colors';
import Button from './src/components/Button';


export default class App extends Component {

  state = {
    theme: 'light'
  }


  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <SafeAreaView style={this.state.theme === 'light' ? styles.container : [styles.container, { backgroundColor: colors.dark }]}>
          <Switch
            value={this.state.theme === 'light'}
            onChange={() => this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })}
          />
          <Calculator />
        </SafeAreaView>
      </ThemeContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

