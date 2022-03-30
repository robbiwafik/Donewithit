import { StyleSheet, View, Image, StatusBar } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen({ image }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <View style={[ styles.button, styles.close]} />
                <View style={[ styles.button, styles.delete]} />
            </View>
            <Image resizeMode='contain' style={styles.image} source={image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: StatusBar.currentHeight,
        paddingHorizontal: 20
    },
    button: {
        width: 50,
        height: 50
    },
    close: {
        backgroundColor: colors.primary
    },
    delete: {
        backgroundColor: colors.secondary
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});

export default ViewImageScreen;