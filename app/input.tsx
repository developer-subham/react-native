import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';

export default function input() {
    const router = useRouter();

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20, 
            backgroundColor: '#F2EAE0'
        }}>
            <View style={{
                borderRadius: 10,
                padding: 20,
                backgroundColor: '#FF5F00',
                width: 300
            }}>
                <Text style={{
                    fontWeight:'bold',
                    color: 'white',
                    paddingLeft: 3
                }}>
                    Name
                </Text>
                <TextInput 
                    placeholder="Enter your name"
                    style={{
                        padding: 5,
                        color: 'white',
                        fontSize: 16
                    }}></TextInput>
                <Text style={{
                    fontWeight:'bold',
                    color: 'white',
                    paddingLeft: 3
                }}>
                    Email
                </Text>
                <TextInput 
                    placeholder="Enter your Email"
                    style={{
                        padding: 5,
                        color: 'white',
                        fontSize: 16
                    }}>
                </TextInput>

                <TouchableHighlight style={{
                    backgroundColor: '#003049',
                    borderRadius: 10,
                    height: 45, 
                    width: "auto"

                }}
                onPress={() => Alert.alert('Thanks for submitting your information')}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        padding: 10,
                        fontSize: 18
                    }}>Submit</Text>
                </TouchableHighlight>
            </View>
            <View>
                <Text onPress={() => router.push('/(tabs)')}>Go Back</Text>
            </View>
        </View>
    );
};