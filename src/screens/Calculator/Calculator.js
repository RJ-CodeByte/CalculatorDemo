import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../../constants/GloablStyles'
import Button from '../../components/Button'
import { colors } from '../../constants/colors'
import { moderateScale, scale } from 'react-native-size-matters'

export class Calculator extends Component {
    state = {
        firstNumber: '',
        secondNumber: '',
        operation: '',
        result: null,
    }

    handleNumberPress = (buttonValue) => {
        if (this.state.firstNumber.length < 10) {
            this.setState({ firstNumber: this.state.firstNumber + buttonValue })
        }
    }

    handleOperationPressed = (buttonValue) => {
        this.setState({ operation: buttonValue, secondNumber: this.state.firstNumber, firstNumber: '' })
    }

    clear = () => {
        this.setState({ operation: '', secondNumber: '', firstNumber: '', result: null })
    }

    getResult = () => {
        switch (this.state.operation) {
            case "+":
                this.clear();
                this.setState({ result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) })
                break;
            case "-":
                this.clear();
                this.setState({ result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber) })
                break;
            case "*":
                this.clear();
                this.setState({ result: parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber) })
                break;
            case "/":
                this.clear();
                this.setState({ result: parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber) })
                break;
            case "%":
                this.clear();
                this.setState({ result: parseInt(this.state.secondNumber) % parseInt(this.state.firstNumber) })
                break;
            default:
                this.clear();
                this.setState({ result: 0 })
                break;
        }
    }


    firstNumberDisplay = () => {
        if (this.state.result !== null) {
            return <Text style={this.state.result < 99999 ? [styles.screenFirstNumber, { color: colors.result }] : [styles.screenFirstNumber, { fontSize: 30, color: colors.result }]}>{this.state.result?.toString()}</Text>
        }
        if (this.state.firstNumber && this.state.firstNumber.length < 6) {
            return <Text style={styles.screenFirstNumber}>{this.state.firstNumber}</Text>
        }
        if (this.state.firstNumber === "") {
            return <Text style={styles.screenFirstNumber}>{"0"}</Text>
        }
        // if (this.state.firstNumber.length > 5 && this.state.firstNumber.length < 8) {
        //     return <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>{this.state.firstNumber}</Text>
        // }
        if (this.state.firstNumber > 7) {
            return <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>{this.state.firstNumber}</Text>
        }
    }


    render() {
        return (
            <View style={styles.viewBottom}>
                <View style={{ height: moderateScale(120), width: "90%", justifyContent: 'flex-end', alignSelf: 'center' }}>
                    <Text style={styles.screenSecondNumber}>{this.state.secondNumber}{' '}<Text style={{ color: "purple", fontSize: scale(30), fontWeight: '500' }}>{this.state.operation}</Text>{'  '}{this.firstNumberDisplay()}</Text>
                </View>
                <View style={styles.row}>
                    <Button title="C" isGrey onPress={this.clear} />
                    <Button title="%" isGrey onPress={() => this.handleOperationPressed("%")} />
                    <Button title="⌫" isGrey onPress={() => this.setState({ firstNumber: this.state.firstNumber.slice(0, -1) })} />
                    <Button title="÷" isBlue onPress={() => this.handleOperationPressed("/")} />
                </View>
                <View style={styles.row}>
                    <Button title="7" onPress={() => this.handleNumberPress("7")} />
                    <Button title="8" onPress={() => this.handleNumberPress("8")} />
                    <Button title="9" onPress={() => this.handleNumberPress("9")} />
                    <Button title="×" isBlue onPress={() => this.handleOperationPressed("*")} />
                </View>
                <View style={styles.row}>
                    <Button title="6" onPress={() => this.handleNumberPress("6")} />
                    <Button title="5" onPress={() => this.handleNumberPress("5")} />
                    <Button title="4" onPress={() => this.handleNumberPress("4")} />
                    <Button title="-" isBlue onPress={() => this.handleOperationPressed("-")} />
                </View>
                <View style={styles.row}>
                    <Button title="1" onPress={() => this.handleNumberPress("1")} />
                    <Button title="2" onPress={() => this.handleNumberPress("2")} />
                    <Button title="3" onPress={() => this.handleNumberPress("3")} />
                    <Button title="+" isBlue onPress={() => this.handleOperationPressed("+")} />
                </View>
                <View style={styles.row}>
                    <Button title="0" onPress={() => this.handleNumberPress("0")} />
                    <Button title="00" onPress={() => this.handleNumberPress("00")} />
                    <Button title="." onPress={() => this.handleNumberPress(".")} />
                    <Button title="=" isBlue onPress={() => this.getResult()} />
                </View>
            </View>
        )
    }
}

export default Calculator