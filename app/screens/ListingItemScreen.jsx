import colors from '../config/colors';
import {StyleSheet, View, Image} from 'react-native';
import AppText from '../components/AppText';


function ListingItemScreen({ image, title, price }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{price}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 220
    },
    details: {
        paddingHorizontal: 15,
        paddingVertical: 18
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ListingItemScreen;