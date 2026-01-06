import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * SEOHead - Dynamic SEO meta tags component
 * Updates document title and meta description based on current language
 */
export default function SEOHead() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Update document title
        document.title = t('seo.title');

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', t('seo.description'));

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', t('seo.keywords'));

        // Update html lang attribute
        document.documentElement.lang = i18n.language;

        // Update Open Graph tags
        updateOGTag('og:title', t('seo.title'));
        updateOGTag('og:description', t('seo.description'));
        updateOGTag('og:locale', getOGLocale(i18n.language));
        updateOGTag('og:type', 'website');
        updateOGTag('og:site_name', 'FlowCode');

        // Update Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', t('seo.title'));
        updateMetaTag('twitter:description', t('seo.description'));

    }, [t, i18n.language]);

    return null; // This component doesn't render anything
}

function updateOGTag(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

function updateMetaTag(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

function getOGLocale(lang) {
    const localeMap = {
        'zh-CN': 'zh_CN',
        'zh-TW': 'zh_TW',
        'en': 'en_US',
        'ja': 'ja_JP',
        'ko': 'ko_KR'
    };
    return localeMap[lang] || 'en_US';
}
