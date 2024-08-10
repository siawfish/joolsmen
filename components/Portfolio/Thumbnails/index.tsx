import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { heightPixel, widthPixel } from "@/constants/normalize";
import { Media } from "@/types";
import CustomImage from "@/components/CustomImage";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThumbnailsProps {
    readonly data: Media[];
    readonly onPress?: (id: string) => void;
    readonly onViewMore?: () => void;
}

const Thumbnails = ({
    data=[],
    onPress,
    onViewMore,
}:ThumbnailsProps) => {
    const backgroundColor = useThemeColor({ light: '', dark: '' }, 'background');
    return (
        <View style={styles.container}>
            {
                data?.[0] &&
                <CustomImage 
                    source={data?.[0]?.uri}
                    width='100%'
                    height={heightPixel(300)}
                    onPress={() => onPress?.(data?.[0]?.id as string)}
                />
            }
            {
                data?.length > 1 &&
                <View style={styles.stack}>
                    {
                        data?.[1] && (
                            <CustomImage 
                                source={data?.[1]?.uri}
                                width='100%'
                                height='100%'
                                onPress={() => onPress?.(data?.[1]?.id as string)}
                            />
                        )
                    }
                    {
                        data?.length > 2 && (
                            <View style={styles.relative}>
                                {
                                    data?.[2] && (
                                        <CustomImage 
                                            source={data?.[2]?.uri}
                                            width='100%'
                                            height='100%'
                                            onPress={() => onPress?.(data?.[2]?.id as string)}
                                        />
                                    )
                                }
                                {
                                    data?.length > 3 && (
                                        <TouchableOpacity 
                                            onPress={onViewMore}
                                            style={[styles.remaining, { backgroundColor }]}
                                        >
                                            <ThemedText type="title">
                                                +{data?.length - 3}
                                            </ThemedText>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        )
                    }
                </View>
            }
        </View>
    );
};

export default Thumbnails;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: heightPixel(200),
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 3,
        borderRadius: 5,
        overflow: "hidden",
        marginVertical: heightPixel(10),
    },
    stack: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        gap: 3,
    },
    relative: {
        position: "relative",
        flex: 1,
        height: "100%",
    },
    remaining: {
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: widthPixel(10),
        borderTopLeftRadius: 5,
    }
});
