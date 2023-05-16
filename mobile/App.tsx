import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-white text-5xl'>Hello World</Text>
      <Text className='text-white text-2xl'>1:28:42 (youtube)</Text>
      <StatusBar/>
    </View>
  );
}

