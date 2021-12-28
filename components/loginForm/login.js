import React from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

const login = () => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {require('../../images/elipse1.png')} resizeMode = 'contain'/>
            <Image style = {styles.image} source = {require('../../images/elipse2.png')} resizeMode = 'contain'/>

            <View style = {styles.viewTitle}>
                <Text style = {styles.title}>Welcome Back!</Text>
            </View>
            <View style = {styles.containerBorder}>
                <View style = {styles.border}>
                    <Image style = {styles.imageBorder} source = {require('../../images/undraw.png')} resizeMode = 'contain' />
                </View>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput style = {styles.emailInput} placeholder = 'Enter your email'/>
                <TextInput style = {styles.passwordInput} placeholder = 'Enter your password'/>
                <Text style = {styles.forgotPassword}>Forgot password</Text>
                <TouchableOpacity style = {styles.signInButton} >
                    <Text style = {styles.signInText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.tineAccount}>
                <Text style = {styles.text1}>Don't have an account ? </Text>
                <Text style = {styles.text2}>Sign up</Text>
            </View>
        </View>
    )
}
export default login;
