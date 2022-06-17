import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../constants/GloablStyles";
import { ThemeContext } from "../context/ThemeContext";


export default function Button({ title, onPress, isBlue, isGrey }) {
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity style={isBlue ? styles.btnBlue : isGrey ? styles.btnGray : theme === "light" ? styles.btnLight : styles.btnDark} onPress={onPress}>
            <Text style={isBlue || isGrey ? styles.smallTextLight : theme === "dark" ? styles.smallTextLight : styles.smallTextDark} >{title}</Text>
        </TouchableOpacity>
    )
}
