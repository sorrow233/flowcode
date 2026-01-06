import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

function DomainPage() {
    const { t } = useTranslation(['pages'])

    const providers = [
        {
            icon: '🏷️',
            name: t('domain.providers.0.name'),
            tag: t('domain.providers.0.tag'),
            desc: t('domain.providers.0.desc'),
            featured: true,
            url: 'https://www.spaceship.com/'
        },
        {
            icon: '⚡',
            name: t('domain.providers.1.name'),
            tag: t('domain.providers.1.tag'),
            desc: t('domain.providers.1.desc'),
            featured: false,
            url: 'https://www.namecheap.com/'
        },
        {
            icon: '☁️',
            name: t('domain.providers.2.name'),
            tag: t('domain.providers.2.tag'),
            desc: t('domain.providers.2.desc'),
            featured: false,
            url: 'https://www.cloudflare.com/products/registrar/'
        }
    ]

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--sakura)'
                        }}>{t('domain.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('domain.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('domain.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('domain.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        <h3 style={{
                            fontSize: '1.2rem',
                            marginBottom: '0.5rem',
                            fontWeight: 500
                        }}>{t('domain.providers_title')}</h3>
                        <p style={{
                            color: 'var(--text-ishi)',
                            marginBottom: '0.5rem'
                        }}>
                            {t('domain.providers_desc')}
                        </p>
                        <p style={{
                            fontSize: '0.8rem',
                            color: 'var(--asagi)',
                            marginBottom: '1.5rem',
                            opacity: 0.8
                        }}>
                            {t('domain.disclaimer')}
                        </p>

                        {/* 提供商卡片 */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {providers.map(provider => (
                                <a
                                    key={provider.name}
                                    href={provider.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="surface-card"
                                    style={{
                                        padding: '1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        border: provider.featured
                                            ? '1px solid var(--asagi-soft)'
                                            : '1px solid var(--border-kasumi)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--asagi)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = provider.featured ? 'var(--asagi-soft)' : 'var(--border-kasumi)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ fontSize: '1.75rem' }}>{provider.icon}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.25rem'
                                        }}>
                                            <h4 style={{
                                                color: 'var(--text-yuki)',
                                                fontSize: '1rem',
                                                margin: 0
                                            }}>{provider.name}</h4>
                                            {provider.tag && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    padding: '0.2rem 0.5rem',
                                                    background: 'var(--asagi-soft)',
                                                    color: 'var(--asagi)',
                                                    borderRadius: 'var(--radius-full)'
                                                }}>{provider.tag}</span>
                                            )}
                                        </div>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-ishi)',
                                            margin: 0
                                        }}>{provider.desc}</p>
                                    </div>
                                    <div style={{ color: 'var(--text-ishi)', fontSize: '0.8rem' }}>↗</div>
                                </a>
                            ))}
                        </div>

                        {/* 連結提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--asagi)',
                            background: 'var(--asagi-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--asagi)' }}>
                                {t('domain.connect_info.title')}
                            </div>
                            <p style={{
                                color: 'var(--text-nezumi)',
                                marginBottom: 0
                            }}>
                                <Trans i18nKey="domain.connect_info.desc" ns="pages" />
                            </p>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/firebase" className="btn btn-secondary">
                                {t('domain.nav.firebase')}
                            </Link>
                            <Link to="/success" className="btn btn-primary">
                                {t('domain.nav.success')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DomainPage
