import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView'
import { heightPixel } from '@/constants/normalize'
import Button from '@/components/Button'
import ProgressBar from '@/components/ProgressBar'
import ProofOfIdentify from '@/components/ProofOfIdentify'
import RegisterSkills from '@/components/RegisterSkills'
import AddSkill from '@/components/RegisterSkills/components/AddSkill'
import BasicInformation from '@/components/BasicInformation'
import Success from '@/components/Success'
import { router } from 'expo-router'

const Register = () => {
  return (
    <ThemedSafeAreaView
      style={styles.containerStyle}
    >
      <ProgressBar progress={(3/3)*100} />
      {/* <BasicInformation /> */}
      {/* <ProofOfIdentify /> */}
      <RegisterSkills />
      <Button 
        label='Continue'
        onPress={() => router.push('(tabs)')}
        style={styles.btn}
      />
      {/* <AddSkill /> */}
      {/* <Success /> */}
    </ThemedSafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    btn: {
      marginBottom: heightPixel(20)
    }
})

export default Register;
