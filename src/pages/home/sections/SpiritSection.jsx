import React from 'react'
import { useTranslation } from 'react-i18next'

const SpiritSection = () => {
    const { t } = useTranslation()

    return (
        <section style={{
            borderTop: '1px solid var(--border-kasumi)',
            padding: '6rem 0',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '400px',
            justifyContent: 'center'
        }}>
            <div className="container" style={{ maxWidth: '700px', textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '3rem',
                    color: 'var(--text-ishi)',
                    opacity: 0.3,
                    marginBottom: '2rem'
                }}>
                    流
                </div>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-nezumi)',
                    lineHeight: 2,
                    fontFamily: 'var(--font-gothic)'
                }}>
                    {t('home.philosophy_quote').split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
                </p>
                <div style={{
                    marginTop: '2rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-ishi)'
                }}>
                    {t('home.philosophy_author')}
                </div>
            </div>

            {/* 內嵌式頁腳 - 改為相對定位 */}
            <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                opacity: 0.4,
                fontSize: '0.75rem',
                color: 'var(--text-ishi)'
            }}>
                <span>{t('home.copyright', { year: 2026, version: '2.1.5' })}</span>
                <a href="https://github.com/sorrow233/flowcode" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GitHub</a>
                <span>{t('home.built_with')}</span>
            </div>
        </section>
    )
}

export default SpiritSection
