import React from 'react';
import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';
import {Pressable, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <RectButton
          onPress={() => {
            console.log('RectButton has been pressed!');
          }}>
          <View accessible accessibilityRole="button">
            <Text>I am a RectButton</Text>
          </View>
        </RectButton>
        <Pressable
          onPress={() => {
            console.log('Pressable has been pressed!');
          }}>
          <Text>I am a Pressable</Text>
        </Pressable>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
