import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonCN from './locales/zh-CN/common.json';
import navCN from './locales/zh-CN/nav.json';
import authCN from './locales/zh-CN/auth.json';
import errorsCN from './locales/zh-CN/errors.json';
import pagesCN from './locales/zh-CN/pages.json';

import commonTW from './locales/zh-TW/common.json';
import navTW from './locales/zh-TW/nav.json';
import authTW from './locales/zh-TW/auth.json';
import errorsTW from './locales/zh-TW/errors.json';
import pagesTW from './locales/zh-TW/pages.json';

import commonEN from './locales/en/common.json';
import navEN from './locales/en/nav.json';
import authEN from './locales/en/auth.json';
import errorsEN from './locales/en/errors.json';
import pagesEN from './locales/en/pages.json';

import commonJA from './locales/ja/common.json';
import navJA from './locales/ja/nav.json';
import authJA from './locales/ja/auth.json';
import errorsJA from './locales/ja/errors.json';
import pagesJA from './locales/ja/pages.json';

import commonKO from './locales/ko/common.json';
import navKO from './locales/ko/nav.json';
import authKO from './locales/ko/auth.json';
import errorsKO from './locales/ko/errors.json';
import pagesKO from './locales/ko/pages.json';

const resources = {
    'zh-CN': {
        common: commonCN,
        nav: navCN,
        auth: authCN,
        errors: errorsCN,
        pages: pagesCN
    },
    'zh-TW': {
        common: commonTW,
        nav: navTW,
        auth: authTW,
        errors: errorsTW,
        pages: pagesTW
    },
    en: {
        common: commonEN,
        nav: navEN,
        auth: authEN,
        errors: errorsEN,
        pages: pagesEN
    },
    ja: {
        common: commonJA,
        nav: navJA,
        auth: authJA,
        errors: errorsJA,
        pages: pagesJA
    },
    ko: {
        common: commonKO,
        nav: navKO,
        auth: authKO,
        errors: errorsKO,
        pages: pagesKO
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'zh-CN',
        ns: ['common', 'nav', 'auth', 'errors', 'pages'],
        defaultNS: 'common',
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export default i18n;
