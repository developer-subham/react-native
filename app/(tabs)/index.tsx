import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#0c1420',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <Text style={{
        color: 'white',
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

    </View>
  );
}