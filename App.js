import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from "react"
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {fetchSessions} from './constants/api'

export default function App() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async ()=> {
      setIsLoading(true)
      const data = await fetchSessions();
    setTimeout(() => {setIsLoading(false); setSessions(data)}, 2000);
    })()
  }, [])
  if (isLoading) {
    return <View  style={styles.container}>
      <ActivityIndicator   color="green" size="large" style={{opacity: 1}} animating={true}/>
    </View>
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
