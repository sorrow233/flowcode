import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationZH from './locales/zh/translation.json';
import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';

const resources = {
    zh: {
        translation: translationZH,
    },
    en: {
        translation: translationEN,
    },
    ja: {
        translation: translationJA,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'zh',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
