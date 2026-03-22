import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Home() {
  const router = useRouter();
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
        Hello World
      </Text>

      <Text style={{
        color: 'gray',
        fontSize: 18
      }}>
        This app created by Subham
      </Text>

      <TouchableHighlight style={{
        backgroundColor: '#091413',
        height: 30,
        width: 80, 
        marginTop: 10,
        borderRadius: 8,
      }}
        onPress={()=> router.push('/input')}
      >
        <Text style={{
          fontWeight: 'light',
          padding: 5,
          color: 'white',
          textAlign: 'center'
        }}>
          Let's Go
        </Text>
      </TouchableHighlight>

    </View>
  );
}