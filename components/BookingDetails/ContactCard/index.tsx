import { StyleSheet, Image, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import user from "@/assets/images/individual.png";
import { heightPixel, widthPixel } from '@/constants/normalize';
import { ThemedText } from '@/components/ThemedText';
import Rating from '../Rating';
import IconButton from '@/components/IconButton';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { LeafletView } from 'react-native-leaflet-view';
import Button from '@/components/Button';

const ContactCard = () => {
    return (
        <ThemedView
            lightColor={Colors.light.inputBackground}
            darkColor={Colors.dark.navButtonBackground}
            style={styles.container}
        >
            <View style={styles.row}>
                <View style={styles.user}>
                    <Image
                        source={user}
                        style={styles.img}
                    />
                    <View>
                        <ThemedText style={styles.name} type="defaultSemiBold">John Doe</ThemedText>
                        <Rating rating={1} />
                    </View>
                </View>
                <View style={styles.rightRow}>
                    <IconButton lightColor={Colors.light.green} darkColor={Colors.dark.green} style={styles.btn}>
                        <Ionicons
                            name="call-outline"
                            size={widthPixel(20)}
                            color="#FFFFFF"
                        />
                    </IconButton>
                    <IconButton lightColor={Colors.light.blue} darkColor={Colors.dark.blue} style={styles.btn}>
                        <Feather
                            name="message-circle"
                            size={widthPixel(20)}
                            color="#FFFFFF"
                        />
                    </IconButton>
                </View>
            </View>
            <View style={styles.map}>
                <LeafletView
                    renderLoading={()=><ActivityIndicator color={Colors.light.primary} />}
                    zoom={13}
                    mapCenterPosition={{
                        lat: 5.6037,
                        lng: -0.1870,
                    }}
                />
            </View>
        </ThemedView>
    )
}

export default ContactCard

const styles = StyleSheet.create({
    container: {
        padding: widthPixel(16),
        borderRadius: widthPixel(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
        gap: widthPixel(8),
        alignItems: 'center',
    },
    name: {
        fontSize: widthPixel(16),
    },
    rightRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(8),
    },
    img: { 
        width: widthPixel(50), 
        height: widthPixel(50),
        borderRadius: widthPixel(25),
    },
    icon: {
        width: widthPixel(30),
        height: widthPixel(30),
    },
    btn: {
        width: widthPixel(35),
        height: widthPixel(35),
        borderRadius: widthPixel(10),
    },
    map: {
        height: heightPixel(150),
        marginTop: widthPixel(16),
        borderRadius: widthPixel(10),
        overflow: 'hidden',
    }
})