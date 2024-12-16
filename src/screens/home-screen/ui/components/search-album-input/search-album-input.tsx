import React from 'react';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, SafeAreaView} from 'react-native';
import {COLORS, DEVICE_WIDTH} from '@shared/constants';
import {Input} from '@shared/ui';
import SearchSvg from '../../assets/search.svg';
import styles from './search-album-input.stylest.ts';

interface SearchAlbumInput {
  value: string;
  setValue: (text: string) => void;
}

export function SearchAlbumInput({value, setValue}: SearchAlbumInput) {
  const {t} = useTranslation(['screens']);

  return (
    <SafeAreaView style={styles.input_container}>
      <Pressable style={styles.press_zone} onPress={() => Keyboard.dismiss()}>
        <Input
          startAdornment={
            <SearchSvg width={22} height={22} stroke={COLORS.gray} />
          }
          value={value}
          inputStyle={styles.input}
          onChange={setValue}
          width={DEVICE_WIDTH - 32}
          isBorder
          returnKeyType="search"
          placeholder={t('home-screen.search-albums')}
        />
      </Pressable>
    </SafeAreaView>
  );
}
