import {Pressable, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {RootNavigationProp} from '../navigation/Root';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function AddWallet() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-black">
      <View className="items-center justify-center flex-1">
        <LottieView
          source={require('../animations/onboarding/3.lottie')}
          className="h-48 w-52"
          autoPlay
          loop={false}
        />
        <Text className="text-3xl font-bold text-neutral-950 dark:text-neutral-50">
          Saturn
        </Text>
        <Text className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          A Bitcoin Wallet.
        </Text>
      </View>
      <View>
        <Pressable
          className="p-4 mb-2 rounded-full active:opacity-50"
          // onPress={() => navigation.navigate('RestoreWallet')}
        >
          <Text className="text-base font-bold text-center text-blue-500 dark:text-blue-300">
            Restore existing wallet
          </Text>
        </Pressable>
        <Pressable
          className="p-4 bg-blue-500 rounded-full active:opacity-50 dark:bg-blue-300"
          onPress={() => navigation.navigate('CreateWallet')}>
          <Text className="text-base font-bold text-center text-white dark:text-black">
            Create a new wallet
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
