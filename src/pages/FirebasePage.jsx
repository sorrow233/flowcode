import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

function FirebasePage() {
    const { t } = useTranslation(['pages'])

    const handleCopy = () => {
        navigator.clipboard.writeText(t('firebase.steps.3.text'))
        toast.success(t('vision.generator.copy_toast'))
    }

    const step2List = t('firebase.steps.2.list', { returnObjects: true })

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--shu)'
                        }}>{t('firebase.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('firebase.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('firebase.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('firebase.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        {/* 步驟 1 */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--shu)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>1</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('firebase.steps.1.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1.5rem',
                                paddingLeft: '2.5rem',
                                lineHeight: 1.8
                            }}>
                                {t('firebase.steps.1.desc')}
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <a
                                    href="https://console.firebase.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                    style={{
                                        borderColor: 'var(--shu)',
                                        color: 'var(--shu)',
                                        boxShadow: '0 0 15px var(--shu-soft)'
                                    }}
                                >
                                    {t('firebase.steps.1.button')}
                                </a>
                            </div>
                        </div>

                        {/* 步驟 2 */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--shu)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>2</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('firebase.steps.2.title')}</h3>
                            </div>

                            <ul style={{
                                paddingLeft: '4rem',
                                color: 'var(--text-nezumi)',
                                lineHeight: 2
                            }}>
                                {Array.isArray(step2List) && step2List.map((item, index) => (
                                    <li key={index}>
                                        <Trans i18nKey={`firebase.steps.2.list.${index}`} ns="pages">
                                            {item}
                                        </Trans>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 配置提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--fuji)',
                            background: 'var(--fuji-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--fuji)' }}>
                                {t('firebase.config_info.title')}
                            </div>
                            <p style={{
                                marginBottom: '0.75rem',
                                color: 'var(--text-nezumi)'
                            }}>
                                {t('firebase.config_info.desc')}
                            </p>
                            <div style={{
                                background: 'var(--bg-yoru)',
                                padding: '0.6rem 1rem',
                                borderRadius: '6px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                color: 'var(--asagi)',
                                display: 'inline-block'
                            }}>
                                src/firebase.js
                            </div>
                        </div>

                        {/* 步驟 3 */}
                        <div style={{ marginTop: '2.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--shu)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>3</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('firebase.steps.3.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                {t('firebase.steps.3.desc')}
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <div style={{
                                    background: 'var(--bg-kuro)',
                                    padding: '1.25rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-kasumi)',
                                    color: 'var(--text-yuki)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    position: 'relative',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
                                }}>
                                    {t('firebase.steps.3.text')}
                                    <button
                                        onClick={handleCopy}
                                        title={t('vision.generator.copy_toast')}
                                        style={{
                                            position: 'absolute',
                                            top: '0.8rem',
                                            right: '0.8rem',
                                            background: 'var(--bg-sumi)',
                                            border: '1px solid var(--border-kasumi)',
                                            color: 'var(--text-nezumi)',
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--asagi)'
                                            e.currentTarget.style.borderColor = 'var(--asagi)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-nezumi)'
                                            e.currentTarget.style.borderColor = 'var(--border-kasumi)'
                                        }}
                                    >
                                        <Copy size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/cloudflare" className="btn btn-secondary">
                                {t('firebase.nav.cloudflare')}
                            </Link>
                            <Link to="/domain" className="btn btn-primary">
                                {t('firebase.nav.domain')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirebasePage
