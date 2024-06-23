import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { heightPixel, widthPixel } from '@/constants/normalize'
import AddCostItem from './AddCostitem'
import CostBreakdownTable from './CostBreakdownTable'

const CostBreakdown = () => {
    const [stage, setStage] = React.useState(0)
    return (
        <View style={styles.container}>
            <ThemedText style={styles.title}>Cost Breakdown</ThemedText>
            {
                stage === 0 &&
                <CostBreakdownTable onAddCostItem={()=>setStage(1)} />
            }
            {
                stage === 1 &&
                <AddCostItem onAdd={()=>setStage(0)} onClose={()=>setStage(0)} />
            }
        </View>
    )
}

export default CostBreakdown

const styles = StyleSheet.create({
    container: {
        marginTop: heightPixel(16),
    },
    title: {
        paddingHorizontal: widthPixel(16),
    },
})