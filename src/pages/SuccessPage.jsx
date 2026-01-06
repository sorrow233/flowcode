import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

function SuccessPage() {
    const { t } = useTranslation(['pages'])

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header" style={{ paddingBottom: '3rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="animate-enter" style={{
                        fontSize: '4rem',
                        marginBottom: '1.5rem'
                    }}>
                        🎉
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-shu calligraphy-title" style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                    }}>
                        {t('success.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-nezumi)'
                    }}>
                        {t('success.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-1rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{
                        padding: '3rem',
                        textAlign: 'center'
                    }}>

                        <h2 style={{
                            fontSize: '1.6rem',
                            marginBottom: '1rem',
                            fontWeight: 500
                        }}>{t('success.canvas_title')}</h2>
                        <p style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-nezumi)',
                            maxWidth: '500px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.8
                        }}>
                            <Trans i18nKey="success.canvas_desc" ns="pages" />
                        </p>

                        {/* 兩步驟卡片 */}
                        <div className="steps-grid" style={{
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.25rem',
                            marginBottom: '2.5rem'
                        }}>
                            <div className="surface-card animate-float" style={{
                                padding: '1.75rem',
                                borderColor: 'var(--fuji-soft)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '0.75rem'
                                }}>🗣️</div>
                                <h3 style={{
                                    color: 'var(--text-yuki)',
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem'
                                }}>{t('success.steps.ask.title')}</h3>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    fontSize: '0.9rem',
                                    marginBottom: 0
                                }}>{t('success.steps.ask.desc')}</p>
                            </div>
                            <div className="surface-card animate-float delay-200" style={{
                                padding: '1.75rem',
                                borderColor: 'var(--asagi-soft)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '0.75rem'
                                }}>🔄</div>
                                <h3 style={{
                                    color: 'var(--text-yuki)',
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem'
                                }}>{t('success.steps.iterate.title')}</h3>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    fontSize: '0.9rem',
                                    marginBottom: 0
                                }}>{t('success.steps.iterate.desc')}</p>
                            </div>
                        </div>

                        {/* 勵志區塊 */}
                        <div style={{
                            padding: '2rem',
                            background: 'var(--bg-washi)',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'var(--grad-sunset)'
                            }} />
                            <div style={{
                                fontSize: '1.3rem',
                                color: 'var(--fuji)',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-mincho)'
                            }}>
                                {t('success.giant.title')}
                            </div>
                            <p style={{
                                marginBottom: '0.75rem',
                                fontSize: '1.05rem',
                                color: 'var(--text-yuki)'
                            }}>
                                <Trans i18nKey="success.giant.text_1" ns="pages" />
                            </p>
                            <p style={{
                                color: 'var(--text-nezumi)',
                                fontSize: '0.95rem',
                                marginBottom: 0
                            }}>
                                <Trans i18nKey="success.giant.text_2" ns="pages" />
                            </p>
                        </div>

                        {/* 免責聲明 */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px dashed var(--border-kasumi)',
                            background: 'rgba(0, 0, 0, 0.03)',
                            marginBottom: '2.5rem'
                        }}>
                            <div style={{
                                color: 'var(--text-ishi)',
                                fontSize: '0.85rem'
                            }}>
                                {t('success.disclaimer')}
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="https://antigravity.google/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                padding: '1.1rem 3rem',
                                fontSize: '1.1rem',
                                marginBottom: '1.5rem'
                            }}
                        >
                            {t('success.cta')}
                        </a>
                        <br />
                        <Link to="/domain" style={{
                            color: 'var(--text-ishi)',
                            fontSize: '0.9rem'
                        }}>
                            {t('success.back_domain')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* 結語 */}
            <section style={{
                padding: '4rem 0',
                textAlign: 'center'
            }}>
                <div style={{
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '2rem',
                    color: 'var(--text-ishi)',
                    opacity: 0.2
                }}>
                    流
                </div>
            </section>
        </>
    )
}

export default SuccessPage
