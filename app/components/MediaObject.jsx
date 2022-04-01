import colors from '../config/colors';
import { StyleSheet, View, Image } from 'react-native';
import AppText from './AppText';


function MediaObject({ image, title, subTitle }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15
    },
    title: {
        fontSize: 16
    },
    subTitle: {
        color: colors.medium
    }
});


export default MediaObject;