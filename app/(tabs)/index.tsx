import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
 
export default function Home() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F2EAE0',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <Text style={{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
      }}>
        Hello Subham 🚀
      </Text>

      <Text style={{
        color: 'gray',
        fontSize: 18
      }}>
        Learning React Native 🔥
      </Text>

      <TouchableHighlight style={{
        backgroundColor: '#091413',
        height: 30,
        width: 80, 
        marginTop: 10,
        borderRadius: 8,
      }}>
        <Text style={{
          fontWeight: 'light',
          padding: 5,
          color: 'white',
          textAlign: 'center'
        }}>
          Click me
        </Text>
      </TouchableHighlight>

    </View>
  );
}