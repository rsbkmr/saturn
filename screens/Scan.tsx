import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from 'react-native-heroicons/solid';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {RootNavigationProp} from '../navigation/Root';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function Scan() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<RootNavigationProp>();
  const {hasPermission, requestPermission} = useCameraPermission();
  const [torch, setTorch] = useState(false);
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes[0].value) {
        navigation.navigate('Send', {addressOrInvoice: codes[0].value});
      }
    },
  });

  useEffect(() => {
    (async () => {
      if (hasPermission === false) {
        const result = await requestPermission();
        if (result === false) {
          Alert.alert(
            'Camera permission denied 😢. Go to settings to fix permission.',
          );
          Linking.openSettings();
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className="flex-1">
      {device ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            codeScanner={codeScanner}
            torch={torch ? 'on' : 'off'}
          />
          <View className="flex-1">
            <LottieView
              source={require('../animations/scan/scanner.lottie')}
              autoPlay
              loop
              className="-mt-3 h-[120%] w-full"
            />
          </View>
        </>
      ) : (
        <View
          className="items-center justify-center bg-white dark:bg-black"
          style={StyleSheet.absoluteFill}>
          <ExclamationTriangleIcon
            size={48}
            color={isDarkMode ? '#f5f5f5' : '#171717'}
          />
          <Text className="mt-5 text-base font-medium text-black dark:text-white">
            Camera not found.
          </Text>
        </View>
      )}

      <View className="flex-row items-center justify-between p-4 mt-auto rounded-t-3xl bg-neutral-100 dark:bg-neutral-900">
        <Pressable
          onPress={() => navigation.goBack()}
          className="active:opacity-50">
          <ArrowLeftIcon size={24} color={isDarkMode ? 'white' : 'black'} />
        </Pressable>
        <Pressable
          className="active:opacity-50"
          onPress={() => setTorch(!torch)}>
          <LightBulbIcon size={24} color={isDarkMode ? '#f5f5f5' : '#171717'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
