import {StyleSheet, useColorScheme} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
// import {RootNavigationProp} from '../navigation/Root';
import _Onboarding from 'react-native-onboarding-swiper';
// import {useNavigation} from '@react-navigation/native';

export function Onboarding() {
  const isDarkMode = useColorScheme() === 'dark';
  // const navigation = useNavigation<RootNavigationProp>();

  return (
    <_Onboarding
      bottomBarHighlight={false}
      // onSkip={() => navigation.replace('CreateWallet')}
      // onDone={() => navigation.replace('CreateWallet')}
      pages={[
        {
          backgroundColor: isDarkMode ? '#000' : '#fff',
          image: (
            <LottieView
              source={require('../animations/onboarding/1.lottie')}
              style={styles.lottie}
              autoPlay
              loop
            />
          ),
          title: 'Empowering Your Bitcoin Journey',
          subtitle: '',
        },
        {
          backgroundColor: isDarkMode ? '#000' : '#fff',
          image: (
            <LottieView
              source={require('../animations/onboarding/2.lottie')}
              style={styles.lottie}
              autoPlay
              loop
            />
          ),
          title: 'Lightning Fast Transactions',
          subtitle: '',
        },
        {
          backgroundColor: isDarkMode ? '#000' : '#fff',
          image: (
            <LottieView
              source={require('../animations/onboarding/3.lottie')}
              style={styles.lottie}
              autoPlay
              loop
            />
          ),
          title: 'Your All-in-One Bitcoin Wallet',
          subtitle: '',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    height: 208,
    width: 208,
  },
});
