import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Button from '../components/Button';

function WelcomeScreen({ onPress }) {
    return (
        <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logo}>
                <Image style={styles.logoIcon} source={require('../assets/logo-red.png')} />
                <AppText style={styles.logoText}>Sell what you don't need</AppText>
            </View>
            <View style={styles.button}>
                <Button title={'login'} color={colors.primary} underlayColor={colors.primaryDark} onPress={onPress}/>
                <Button title={'Register'} color={colors.secondary} underlayColor={colors.secondaryDark} onPress={onPress} />
            </View>
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
    logoText: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 20
    },
    button: {
        height: 110,
        marginBottom: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default WelcomeScreen;