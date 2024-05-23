import * as Keychain from 'react-native-keychain';
import {FlatList, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootNavigationProp} from '../navigation/Root';
import {SafeAreaView} from 'react-native-safe-area-context';
import {generateEntropyMnemonic} from 'ldk-node-rn';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../Store';

export function CreateWallet() {
  const navigation = useNavigation<RootNavigationProp>();
  const [mnemonic, setMnemonic] = useState('');
  const {dispatch} = useStore();

  useEffect(() => {
    (async () => {
      const _mnemonic = await generateEntropyMnemonic();
      setMnemonic(_mnemonic);
    })();
  }, []);

  const onCreateWallet = async () => {
    dispatch({mnemonic});
    await Keychain.setGenericPassword('mnemonic', mnemonic);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-black">
      <View className="flex-1">
        <FlatList
          data={mnemonic.split(' ')}
          renderItem={({item, index}) => (
            <View className="flex-row pb-1">
              <Text className="text-2xl font-bold text-neutral-500">
                {index + 1}.{' '}
              </Text>
              <Text className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {item}
              </Text>
            </View>
          )}
        />
      </View>
      <View>
        <Pressable
          className="p-4 bg-blue-500 rounded-full active:opacity-50 dark:bg-blue-300"
          onPress={onCreateWallet}>
          <Text className="text-base font-bold text-center text-white dark:text-black">
            Create wallet
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
