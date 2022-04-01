import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';


function Button({ title, color, underlayColor, onPress }) {
    return (
        <TouchableHighlight activeOpacity={1} style={[styles.button, { backgroundColor: color }]} onPress={onPress} underlayColor={underlayColor} >
            <AppText style={styles.text}>{ title }</AppText>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default Button;