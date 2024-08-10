import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { Colors } from '@/constants/Colors'
import { heightPixel, widthPixel } from '@/constants/normalize'
import user from "@/assets/images/individual.png";
import { ThemedText } from '../ThemedText'
import Thumbnails from './Thumbnails'
import { Media, MediaType } from '@/types'
import Actions from './Actions'

const IMAGES:Media[] = [
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '1',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '2',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '3',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '4',
    },
    {
        uri: 'https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: MediaType.IMAGE,
        id: '5',
    },
]

const Portfolio = () => {
  return (
    <ThemedView
        lightColor={Colors.light.inputBackground}
        darkColor={Colors.dark.navButtonBackground}
        style={styles.container}
    >
        <View style={styles.content}>
            <View style={styles.topContent}>
                <View style={styles.user}>
                    <Image
                        source={user}
                        style={styles.image}
                    />
                    <View>
                        <ThemedText 
                            type='title' 
                            style={styles.name}
                        >
                            John Doe
                        </ThemedText>
                        <ThemedText 
                            type='subtitle' 
                            style={styles.skills}
                        >
                            Carpenter, Electrician, Plumber
                        </ThemedText>
                    </View>
                </View>
                <ThemedText darkColor={Colors.dark.subText} lightColor={Colors.dark.subText} style={styles.createdAt}>
                    2 days ago
                </ThemedText>
            </View>
            <Thumbnails 
                data={IMAGES}
            />
            <View>
                <ThemedText 
                    darkColor={Colors.dark.text} 
                    lightColor={Colors.light.text} 
                    style={styles.description}
                >
                    Nisi eu culpa laborum aliqua aute culpa veniam id labore do qui eiusmod sit ea. Nulla eiusmod laborum commodo occaecat adipisicing enim occaecat irure id dolor laboris laborum tempor. Magna eu aliqua fugiat qui exercitation exercitation eu anim est fugiat. Commodo consequat pariatur aliquip non anim ipsum eiusmod. Deserunt ipsum excepteur fugiat et in.
                </ThemedText>
            </View>
        </View>
        <Actions />
    </ThemedView>
  )
}

export default Portfolio

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: widthPixel(16),
        paddingVertical: heightPixel(16),
        borderRadius: widthPixel(16),
        elevation: 2,
        shadowColor: Colors.light.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginBottom: widthPixel(16),
    },
    image: { 
        width: widthPixel(40), 
        height: widthPixel(40),
        borderRadius: widthPixel(20),
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(5),
        flex: 1,
    },
    name: {
        fontSize: widthPixel(16),
    },
    skills: {
        fontSize: widthPixel(12),
    },
    createdAt: {
        fontFamily: 'Regular',
        fontSize: widthPixel(12),
    },
    description: {
        fontFamily: 'Regular',
        fontSize: widthPixel(16),
        marginTop: widthPixel(5),
    },
    content: {
        flex: 1,
    },
    topContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})