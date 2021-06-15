import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Home Screen renderd by React-Native</Text>
      </View>
    );
}

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color : 'black',
    fontSize:25
  }
});


// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
