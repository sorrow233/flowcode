import React from 'react'
import { useTranslation } from 'react-i18next'
import { WashiCard } from '../../../components/ui/WashiCard'

const FeaturesSection = () => {
    const { t } = useTranslation()

    return (
        <section style={{
            padding: '6rem 0',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* 區域標題 */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    <h2 className="animate-enter" style={{
                        fontSize: '1.8rem',
                        fontWeight: 400,
                        color: 'var(--text-yuki)',
                        marginBottom: '0.5rem'
                    }}>
                        {t('home.steps_title')}
                    </h2>
                    <p style={{ color: 'var(--text-ishi)', fontSize: '0.95rem' }}>
                        {t('home.steps_desc')}
                    </p>
                </div>

                {/* Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1.25rem'
                }}>
                    {/* CSS for responsive grid */}
                    <style>{`
                        .grid-card { grid-column: span 12; }
                        @media (min-width: 768px) {
                            .grid-span-8 { grid-column: span 8 !important; }
                            .grid-span-6 { grid-column: span 6 !important; }
                            .grid-span-4 { grid-column: span 4 !important; }
                        }
                    `}</style>

                    {/* 大型特色卡片 */}
                    <WashiCard
                        className="grid-card grid-span-8"
                        style={{
                            padding: '2.5rem',
                            minHeight: '320px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end'
                        }}
                    >
                        {/* 背景裝飾 */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, var(--fuji-glow) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                            opacity: 0.5
                        }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 className="text-gradient-shu" style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                fontWeight: 500
                            }}>
                                {t('home.visual_intelligence_title')}
                            </h3>
                            <p style={{
                                fontSize: '1.1rem',
                                maxWidth: '400px',
                                color: 'var(--text-nezumi)',
                                marginBottom: 0
                            }}>
                                {t('home.visual_intelligence_desc')}
                            </p>
                        </div>
                    </WashiCard>

                    {/* 側邊卡片 */}
                    <WashiCard
                        className="grid-card grid-span-4"
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                            filter: 'grayscale(0.3)'
                        }}>🧠</div>
                        <h4 style={{
                            color: 'var(--text-yuki)',
                            fontSize: '1.2rem',
                            marginBottom: '0.5rem'
                        }}>
                            {t('home.cognitive_load_title')}
                        </h4>
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-ishi)',
                            marginBottom: 0
                        }}>
                            {t('home.cognitive_load_desc')}
                        </p>
                    </WashiCard>

                    {/* 模塊卡片行 */}
                    {[
                        { to: '/vision', num: '弐', title: t('home.vision_title'), desc: t('home.vision_desc'), icon: '👁️', color: 'var(--asagi)' },
                        { to: '/generation', num: '参', title: t('home.generation_title'), desc: t('home.generation_desc'), icon: '⚡', color: 'var(--fuji)' },
                        { to: '/cloudflare', num: '肆', title: t('home.deploy_title'), desc: t('home.deploy_desc'), icon: '☁️', color: 'var(--kincha)' },
                        { to: '/firebase', num: '伍', title: t('home.storage_title'), desc: t('home.storage_desc'), icon: '🔥', color: 'var(--shu)' }
                    ].map((card, i) => (
                        <WashiCard
                            key={card.to}
                            to={card.to}
                            className="grid-card grid-span-6"
                            style={{
                                padding: '1.75rem',
                                minHeight: '160px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start'
                            }}>
                                <span style={{
                                    fontSize: '1.5rem',
                                    filter: 'grayscale(0.2)'
                                }}>{card.icon}</span>
                                <span style={{
                                    fontFamily: 'var(--font-mincho)',
                                    fontSize: '0.8rem',
                                    color: card.color,
                                    opacity: 0.8
                                }}>{card.num}</span>
                            </div>
                            <div>
                                <h4 style={{
                                    fontSize: '1.3rem',
                                    color: 'var(--text-yuki)',
                                    marginBottom: '0.25rem'
                                }}>{card.title}</h4>
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-ishi)',
                                    marginBottom: 0
                                }}>{card.desc}</p>
                            </div>
                        </WashiCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
