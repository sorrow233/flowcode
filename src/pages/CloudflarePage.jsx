import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

function CloudflarePage() {
    const { t } = useTranslation(['pages'])

    const handleCopy = () => {
        navigator.clipboard.writeText(t('cloudflare.steps.3.text'))
        toast.success(t('vision.generator.copy_toast'))
    }

    const step2List = t('cloudflare.steps.2.list', { returnObjects: true })

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--kincha)'
                        }}>{t('cloudflare.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('cloudflare.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('cloudflare.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('cloudflare.subtitle')}
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
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>1</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('cloudflare.steps.1.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1.5rem',
                                paddingLeft: '2.5rem',
                                lineHeight: 1.8
                            }}>
                                {t('cloudflare.steps.1.desc')}
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <a
                                    href="https://dash.cloudflare.com/sign-up"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                >
                                    {t('cloudflare.steps.1.button')}
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
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>2</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('cloudflare.steps.2.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                {t('cloudflare.steps.2.desc')}
                            </p>

                            <ul style={{
                                paddingLeft: '4rem',
                                color: 'var(--text-nezumi)',
                                lineHeight: 2
                            }}>
                                {Array.isArray(step2List) && step2List.map((item, index) => (
                                    <li key={index}>
                                        <Trans i18nKey={`cloudflare.steps.2.list.${index}`} ns="pages">
                                            {item}
                                        </Trans>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 重要提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--shu)',
                            background: 'var(--shu-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--shu)' }}>
                                {t('cloudflare.warning.title')}
                            </div>
                            <p style={{
                                marginBottom: '0.5rem',
                                color: 'var(--text-nezumi)'
                            }}>
                                <Trans i18nKey="cloudflare.warning.text_1" ns="pages" />
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-ishi)',
                                marginBottom: 0
                            }}>
                                <Trans i18nKey="cloudflare.warning.text_2" ns="pages" />
                            </p>
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
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>3</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('cloudflare.steps.3.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                {t('cloudflare.steps.3.desc')}
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
                                    {t('cloudflare.steps.3.text')}
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
                            <Link to="/generation" className="btn btn-secondary">
                                {t('cloudflare.nav.generation')}
                            </Link>
                            <Link to="/firebase" className="btn btn-primary">
                                {t('cloudflare.nav.firebase')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CloudflarePage
