import { StyleSheet, Platform } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { colors } from './colors';

export const styles = StyleSheet.create({
    btnBlue: {
        width: moderateScale(72),
        height: moderateScale(72),
        borderRadius: 24,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        margin: moderateScale(8),
    },
    btnDark: {
        width: moderateScale(72),
        height: moderateScale(72),
        borderRadius: 24,
        backgroundColor: colors.btnDark,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        margin: 8,
    },
    btnLight: {
        width: moderateScale(72),
        height: moderateScale(72),
        borderRadius: 24,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnGray: {
        width: moderateScale(72),
        height: moderateScale(72),
        borderRadius: 24,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        backgroundColor: colors.btnGrey,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    }, smallTextLight: {
        fontSize: scale(32),
        color: colors.white
    },
    smallTextDark: {
        fontSize: scale(32),
        color: colors.dark
    },
    //keyboard
    row: {
        maxWidth: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    viewBottom: {
        position: 'absolute',
        bottom: Platform.OS === "ios" ? 50 : 20
    },
    screenFirstNumber: {
        fontSize: scale(50),
        color: colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    },
    screenSecondNumber: {
        fontSize: scale(40),
        color: colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }
});
