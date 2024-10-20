import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '@/constants/normalize'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

interface RatingProps {
    rating?: number;
}

const Rating = ({
    rating=0
}) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (    
            <View key={_}>
                {index < rating ? (
                    <AntDesign 
                        name='star' 
                        size={15} 
                        color={Colors.light.primary}
                    />
                ) : (
                    <AntDesign 
                        name='staro' 
                        size={15} 
                        color={Colors.light.primary}
                    />
                )}
            </View>
        )
      })}
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPixel(1),
        paddingVertical: heightPixel(5),
    },
})