import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';

const height = Dimensions.get("window").height;
const wudth = Dimensions.get("window").width;

export const Details = ({ route, navigation }) => {
    const {item} = route.params;
    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular
    });
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={item.imageBig} 
                style={styles.BackgroundImage}>
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.locationWrapper}>
                            <Entypo name="location-pin" size={24} color={colors.white} />
                            <Text style={styles.locationText}>{item.location}</Text> 
                        </View>
                    </View>
                </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={colors.orange} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.decriptionTitle}>Description</Text>
                    <Text style={styles.decriptionText}>{item.description}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}> /person</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.rating}</Text>
                            <Text style={styles.infoSubText}> /5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.duration}</Text>
                            <Text style={styles.infoSubText}> /hours</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    BackgroundImage: {
        height: height * 0.5,
        width: wudth,
        justifyContent: 'flex-end'
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25
    },
    titlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,

    },
    itemTitle: {
        fontFamily: 'Lato_700Bold',
        color: colors.white,
        fontSize: 32,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'Lato_700Bold',
        color: colors.white,
        fontSize: 16
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -20,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.04,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    decriptionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.black
    },
    decriptionText: {
        marginTop: 20,
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        color: colors.darkGray,
        height: 85,
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    infoItem: {

    },
    infoTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 12,
        color: colors.gray
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    infoText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.orange
    },
    infoSubText : {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        color: colors.gray
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: colors.white
    },
});

