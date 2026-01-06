import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { version } from '../../../../package.json'

const HeroSection = () => {
    const { t } = useTranslation()

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* 墨暈背景 */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80vw',
                maxWidth: '800px',
                height: '400px',
                background: 'radial-gradient(ellipse at center, var(--shu-glow) 0%, transparent 70%)',
                filter: 'blur(60px)',
                opacity: 0.4,
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>

                {/* 狀態標籤 */}
                <div className="animate-enter" style={{ marginBottom: '2rem' }}>
                    <span className="scroll-title" style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-nezumi)',
                        letterSpacing: '0.15em'
                    }}>
                        {t('hero.system_online')}
                    </span>
                </div>

                {/* 主標題 - 書法風格 */}
                <h1 className="animate-enter delay-100 calligraphy-title" style={{
                    fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{
                        display: 'block',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(0, 0, 0, 0.15)',
                        fontFamily: 'var(--font-mincho)'
                    }}>
                        {t('hero.title_flow')}
                    </span>
                    <span className="text-gradient-shu" style={{
                        display: 'block',
                        fontWeight: 500,
                        fontFamily: 'var(--font-gothic)'
                    }}>
                        {t('hero.title_code')}
                    </span>
                </h1>

                {/* 副標題 */}
                <p className="animate-enter delay-200" style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: 'var(--text-nezumi)',
                    maxWidth: '500px',
                    margin: '2rem auto 3rem',
                    lineHeight: 1.8,
                    fontFamily: 'var(--font-gothic)'
                }}>
                    {t('hero.subtitle')}
                    <br />
                    <span style={{ color: 'var(--text-ishi)', fontSize: '0.9em' }}>
                        {t('hero.subtitle_sub')}
                    </span>
                </p>

                {/* CTA 按鈕 */}
                <div className="animate-enter delay-300" style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/download" className="btn btn-primary" style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1rem'
                    }}>
                        {t('hero.cta_start')}
                    </Link>
                    <a
                        href="https://github.com/sorrow233/flowcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ padding: '1rem 2rem' }}
                    >
                        {t('hero.cta_github')}
                    </a>
                </div>
            </div>

            {/* 裝飾元素 */}
            <div style={{
                position: 'absolute',
                bottom: '8%',
                right: '8%',
                textAlign: 'right',
                fontFamily: 'var(--font-mincho)',
                fontSize: '0.8rem',
                color: 'var(--text-ishi)',
                opacity: 0.4
            }}>
                <div>{t('home.version', { version })}</div>
                <div>{t('home.stable')}</div>
            </div>

            {/* 左側裝飾 */}
            <div style={{
                position: 'absolute',
                bottom: '8%',
                left: '8%',
                fontFamily: 'var(--font-mincho)',
                fontSize: '2rem',
                color: 'var(--text-ishi)',
                opacity: 0.15,
                writingMode: 'vertical-rl'
            }}>
                {t('home.flowing_code')}
            </div>
        </section>
    )
}

export default HeroSection
