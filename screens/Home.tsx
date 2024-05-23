import {Pressable, Text, View, useColorScheme} from 'react-native';
import {BoltIcon} from 'react-native-heroicons/solid';
import {Cog6ToothIcon} from 'react-native-heroicons/solid';
import {QrCodeIcon} from 'react-native-heroicons/solid';
import React from 'react';
import {RootNavigationProp} from '../navigation/Root';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ViewfinderCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../Store';

export function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<RootNavigationProp>();
  const {state} = useStore();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-black">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Saturn
        </Text>
        <Pressable
          className="active:opacity-50"
          // onPress={() => navigation.navigate('Send')}
        >
          <Cog6ToothIcon size={24} color={isDarkMode ? '#f5f5f5' : '#171717'} />
        </Pressable>
      </View>
      <View className="justify-center flex-1">
        <View className="flex-row items-center justify-center gap-1">
          <BoltIcon size={44} color={isDarkMode ? '#fde047' : '#eab308'} />
          <Text className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
            {state.balance}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center gap-4">
        <Pressable
          className="items-center justify-center flex-shrink px-5 py-4 rounded-full bg-neutral-100 active:opacity-50 dark:bg-neutral-900"
          // onPress={() => navigation.navigate('Receive')}
        >
          <QrCodeIcon size={24} color={isDarkMode ? '#f5f5f5' : '#171717'} />
        </Pressable>
        <Pressable
          className="flex-row items-center justify-center flex-grow p-4 rounded-full bg-neutral-100 active:opacity-50 dark:bg-neutral-900"
          onPress={() => {
            navigation.navigate('Scan');
          }}>
          <ViewfinderCircleIcon
            size={24}
            color={isDarkMode ? '#f5f5f5' : '#171717'}
          />
          <Text className="ml-2 text-lg font-bold text-center text-black dark:text-white">
            Send
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
