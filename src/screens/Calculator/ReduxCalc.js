import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../../constants/GloablStyles'
import Button from '../../components/Button'
import { colors } from '../../constants/colors'
import { moderateScale, scale } from 'react-native-size-matters'
import { connect } from 'react-redux'
import { clear, eraseNumber, getResult, handleNumberPress, handleOperationPressed } from '../../redux/actions';






export class ReduxCalc extends Component {

    data = [
        {
            title: 'C',
            operation: () => this.props.clear(),
            isGrey: true
        }, {
            title: '%',
            operation: () => this.props.handleOperationPressed("%"),
            isGrey: true
        },
        {
            title: "⌫",
            operation: () => this.props.eraseNumber(this.props.firstNumber.slice(0, -1)),
            isGrey: true
        },
        {
            title: "÷",
            operation: () => this.props.handleOperationPressed("/"),
            isBlue: true
        },
        {
            title: '7',
            operation: () => this.props.handleNumberPress("7"),

        }, {
            title: '8',
            operation: () => this.props.handleNumberPress("8"),

        },
        {
            title: "9",
            operation: () => this.props.handleNumberPress("9"),
        },
        {
            title: "×",
            operation: () => this.props.handleOperationPressed("*"),
            isBlue: true
        },
        {
            title: '6',
            operation: () => this.props.handleNumberPress("6"),
        }, {
            title: '5',
            operation: () => this.props.handleNumberPress("5"),
        },
        {
            title: "4",
            operation: () => this.props.handleNumberPress("4")
        },
        {
            title: "-",
            operation: () => this.props.handleOperationPressed("-"),
            isBlue: true
        },
        {
            title: '1',
            operation: () => this.props.handleNumberPress("1"),
        }, {
            title: '2',
            operation: () => this.props.handleNumberPress("2"),
        },
        {
            title: "3",
            operation: () => this.props.handleNumberPress("3")
        },
        {
            title: "+",
            operation: () => this.props.handleOperationPressed("+"),
            isBlue: true
        },
        {
            title: '0',
            operation: () => this.props.handleNumberPress("0"),
        }, {
            title: '00',
            operation: () => this.props.handleNumberPress("00"),
        },
        {
            title: ".",
            operation: () => this.props.handleNumberPress(".")
        },
        {
            title: "=",
            operation: () => this.getResult(),
            isBlue: true
        },

    ]

    // handleNumberPress = (buttonValue) => {
    // if (this.state.firstNumber.length < 10) {
    //     this.props.handleNumberPress({ firstNumber: this.state.firstNumber + buttonValue })
    // }
    // console.log
    // }

    // handleOperationPressed = (buttonValue) => {
    //     this.setState({ operation: buttonValue, secondNumber: this.state.firstNumber, firstNumber: '' })
    // }

    // clear = () => {
    //     this.setState({ operation: '', secondNumber: '', firstNumber: '', result: null })
    // }

    getResult = () => {
        // console.log(this.props.operation)
        // console.log(this.props.firstNumber)
        // console.log(this.props.secondNumber)
        switch (this.props.operation) {
            case "+":
                this.props.clear();
                let result = parseInt(this.props.firstNumber) + parseInt(this.props.secondNumber)
                this.props.getResult(result)
                // this.setState({ result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) })
                break;
            case "-":
                this.props.clear();
                this.props.getResult(parseInt(this.props.secondNumber) - parseInt(this.props.firstNumber))
                break;
            case "*":
                this.props.clear();
                this.props.getResult(parseInt(this.props.firstNumber) * parseInt(this.props.secondNumber))
                break;
            case "/":
                this.props.clear();
                this.props.getResult(parseInt(this.props.secondNumber) / parseInt(this.props.firstNumber))
                break;
            case "%":
                this.props.clear();
                this.props.getResult(parseInt(this.props.secondNumber) % parseInt(this.props.firstNumber))
                break;
            default:
                this.props.clear();
                this.props.getResult(0)
                break;
        }
    }


    firstNumberDisplay = () => {
        if (this.props.result !== null) {
            return <Text style={this.props.result < 99999 ? [styles.screenFirstNumber, { color: colors.result }] : [styles.screenFirstNumber, { fontSize: 30, color: colors.result }]}>{this.props.result?.toString()}</Text>
        }
        if (this.props.firstNumber && this.props.firstNumber.length < 6) {
            return <Text style={styles.screenFirstNumber}>{this.props.firstNumber}</Text>
        }
        if (this.props.firstNumber === "") {
            return <Text style={styles.screenFirstNumber}>{"0"}</Text>
        }
        // if (this.props.firstNumber.length > 5 && this.props.firstNumber.length < 8) {
        //     return <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>{this.props.firstNumber}</Text>
        // }
        if (this.props.firstNumber > 7) {
            return <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>{this.props.firstNumber}</Text>
        }
    }


    renderItem = (item) => (
        <Button title={item.title} isGrey={item.isGrey} isBlue={item.isBlue} onPress={item.operation} />
    )



    render() {
        return (
            <View style={styles.viewBottom}>
                <View style={{ height: moderateScale(120), width: "90%", justifyContent: 'flex-end', alignSelf: 'center' }}>
                    <Text style={styles.screenSecondNumber}>{this.props.secondNumber}{' '}<Text style={{ color: "purple", fontSize: scale(30), fontWeight: '500' }}>{this.props.operation}</Text>{'  '}{this.firstNumberDisplay()}</Text>
                </View>
                <View style={styles.row}>
                    {
                        this.data.map((item) => {
                            return this.renderItem(item)

                        })
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstNumber: state.calcReducer.firstNumber,
        secondNumber: state.calcReducer.secondNumber,
        operation: state.calcReducer.operation,
        result: state.calcReducer.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNumberPress: (buttonValue) => dispatch(handleNumberPress(buttonValue)),
        handleOperationPressed: (buttonValue) => dispatch(handleOperationPressed(buttonValue)),
        getResult: (result) => dispatch(getResult(result)),
        eraseNumber: (firstNumber) => dispatch(eraseNumber(firstNumber)),
        clear: () => dispatch(clear())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCalc)

