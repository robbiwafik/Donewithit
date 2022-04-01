import colors from '../config/colors';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';


function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.labels}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: colors.white
    },
    image: {
        width: '100%',
        height: 200
    },
    labels: {
        padding: 20
    },
    title: {
        fontSize: 16,
        marginBottom: 8
    },
    subTitle: {
        fontWeight: 'bold',
        color: colors.secondary,
        fontSize: 15
    }
});

export default Card;