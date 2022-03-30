import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import colors from '../config/colors';


function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logo}>
                <Image style={styles.logoIcon} source={require('../assets/logo-red.png')} />
                <Text>Sell what you don't need</Text>
            </View>
            <View style={[ styles.button, styles.login ]} />
            <View style={[ styles.button, styles.register ]} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    logo: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        top: '10%'
    },
    logoIcon: {
        width: 100,
        height: 100
    },
    button: {
        width: '100%',
        height: 60
    },
    login: {
        backgroundColor: colors.primary
    },
    register: {
        backgroundColor: colors.secondary
    }
});

export default WelcomeScreen;