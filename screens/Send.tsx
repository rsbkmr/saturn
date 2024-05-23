import {
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {
  ArrowLeftIcon,
  BoltIcon,
  Cog6ToothIcon,
} from 'react-native-heroicons/solid';
import React, {useEffect, useState} from 'react';
import {RootNavigationList, RootNavigationProp} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import bip21 from 'bip21';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootNavigationList, 'Send'>;

export function Send({route}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<RootNavigationProp>();
  const [amount, setAmount] = useState<string>('');
  const [address, setAddress] = useState('');
  const [invoice, setInvoice] = useState('');

  useEffect(() => {
    try {
      const decoded = bip21.decode(route.params.addressOrInvoice);
      console.log(decoded);
      if (decoded.address) {
        setAddress(decoded.address);
      }
      if (decoded.options.amount) {
        setAmount(decoded.options.amount.toString());
      }
      // @ts-ignore
      if (decoded.options.lightning) {
        // @ts-ignore
        setInvoice(decoded.options.lightning);
      }
    } catch (error) {
      Alert.alert('Invalid QR Code');
    }

    console.log('send', route.params.addressOrInvoice);
  }, [route.params.addressOrInvoice]);

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-black">
      <View className="flex-row items-center justify-between mb-4">
        <Pressable
          className="active:opacity-50"
          onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={isDarkMode ? '#f5f5f5' : '#171717'} />
        </Pressable>
        <Pressable className="active:opacity-50">
          <Cog6ToothIcon size={24} color={isDarkMode ? '#f5f5f5' : '#171717'} />
        </Pressable>
      </View>
      <View className="rounded">
        <Text className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          To:{' '}
          {invoice ? (
            <>
              {invoice.slice(0, 4)}...{invoice.slice(-4)}
            </>
          ) : (
            <>
              {address.slice(0, 4)}...{address.slice(-4)}
            </>
          )}
        </Text>
      </View>
      <View className="flex-row items-center justify-center flex-1">
        <BoltIcon size={28} color={isDarkMode ? '#fde047' : '#eab308'} />
        <TextInput
          placeholder="0"
          className="p-1 m-0 text-4xl font-black text-neutral-900 dark:text-neutral-100"
          inputMode="numeric"
          value={amount}
          autoFocus
          onChangeText={_amount => setAmount(_amount.replace(/[^0-9]/g, ''))}
          placeholderTextColor={isDarkMode ? '#3f3f46' : '#d4d4d4'}
        />
      </View>
      <View>
        <Pressable className="items-center justify-center flex-grow p-4 bg-blue-500 rounded-full active:opacity-50 dark:bg-blue-300">
          <Text className="text-base font-bold text-center text-white dark:text-black">
            Pay
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
