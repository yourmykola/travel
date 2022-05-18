import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from '../assets/images/person.png';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';

const Home = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Lato_700Bold,
        Lato_400Regular
    });

    
    if (!fontsLoaded) {
        return null;
    }

    const renderDiscoverItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', {
                    item: item
                })}
            >
                <ImageBackground
                    source={item.image}
                    style={styles.discoverItem}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    const renderActivityItem = ({item}) => {
        return (
            <View style={[styles.activityItemWrapper, {marginLeft: item.id == 'activities-1' ? 20 : 0}]}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        );
    }

    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={[styles.learnMoreItem, {marginLeft: item.id == 'learnMore-1' ? 20 : 0}]}
                imageStyle={styles.learnMoreImage}
            >
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather //іконка меню
                            name='menu' 
                            size={32} 
                            color={colors.black} 
                            style={styles.menuIcon} 
                        />  
                        <Image 
                            source = {profile}
                            style={styles.profileImage} 
                        />
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoryText,{color: colors.orange}]}>All</Text>
                        <Text style={styles.discoverCategoryText}>Destinations</Text>
                        <Text style={styles.discoverCategoryText}>Cities</Text>
                        <Text style={styles.discoverCategoryText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivityItem}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Learn More */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <View style={styles.learnMoreItemsWrapper}>
                        <FlatList
                            data={learnMoreData}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    menuIcon: {
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    discoverWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 32,

    },
    discoverCategoriesWrapper: {
        flexDirection: 'row',
        marginTop: 20
    },
    discoverCategoryText: {
        marginRight: 30,
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        color: colors.gray
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: colors.white
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        color: colors.white
    },
    discoverItemsWrapper: {
        paddingVertical: 20
    },
    activitiesWrapper: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.black
    },
    activitiesItemsWrapper: {
        paddingVertical: 20
    },
    activityItemWrapper: {
        justifyContent: "flex-end",
        alignItems: 'center',
        marginRight: 20,
    },
    activityItemImage: {
        justifyContent: 'center',
        width: 36,
        height: 36
    },
    activityItemText: {
        marginTop: 5,
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        color: colors.gray
    },
    learnMoreWrapper: {
        marginTop: 10,
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.black
    },
    learnMoreItemsWrapper: {
        paddingVertical: 20
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    learnMoreImage: {
        borderRadius: 20,
    },
    learnMoreItemText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20
    },
});


export default Home;