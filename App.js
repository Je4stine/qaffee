import { StatusBar } from 'expo-status-bar';
import React,{ useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './App/Navigation';
import { AppProvider } from './App/Context/AppContext';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'PoppinsB': require('./App/Assets/Fonts/Poppins-Bold.ttf'),
    'Poppins': require('./App/Assets/Fonts/Poppins-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
    <View style={styles.container}  onLayout={onLayoutRootView}>
      <MainStack/>
      <StatusBar style="auto" />
    </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
