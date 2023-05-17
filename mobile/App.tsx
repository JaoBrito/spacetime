import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-700">
      <Text className="text-6xl font-bold text-amber-300">Hold Brasil</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}