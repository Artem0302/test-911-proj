import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './translations';

export const languageLabels = {
  en: 'En',
} as const;

export const languages = Object.keys(
  languageLabels,
) as (keyof typeof languageLabels)[];

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en,
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
