import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import ProgressSidebar from '../components/ProgressSidebar'

function FirebasePage() {
    const { t } = useTranslation(['pages'])
    const sidebarItems = t('firebase.sidebar.items', { returnObjects: true })

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

            {/* 主要內容Layout */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{
                    maxWidth: '1100px',
                    display: 'flex',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* 左側邊欄 */}
                    <ProgressSidebar
                        title={t('firebase.sidebar.title')}
                        items={sidebarItems}
                        activeIndex={0}
                        whyTitle={t('firebase.sidebar.why_title')}
                        whyDesc={t('firebase.sidebar.why_desc')}
                    />

                    {/* 右側主內容 */}
                    <div style={{ flex: 1, maxWidth: '750px' }}>
                        <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                            {/* 步驟 1 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'rgba(232, 92, 74, 0.05)',
                                        border: '1px solid var(--shu)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--shu)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>01</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('firebase.steps.1.title')}</h3>
                                        <p style={{ color: 'var(--text-ishi)', lineHeight: 1.8 }}>{t('firebase.steps.1.desc')}</p>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '3.75rem' }}>
                                    <a
                                        href="https://console.firebase.google.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ background: 'var(--shu)', borderColor: 'var(--shu)' }}
                                    >
                                        {t('firebase.steps.1.button')}
                                    </a>
                                </div>
                            </div>

                            {/* 步驟 2 */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'rgba(232, 92, 74, 0.05)',
                                        border: '1px solid var(--shu)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--shu)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>02</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('firebase.steps.2.title')}</h3>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '3.75rem' }}>
                                    <ul style={{ color: 'var(--text-nezumi)', display: 'grid', gap: '0.75rem', paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                                        {Array.isArray(step2List) && step2List.map((item, index) => (
                                            <li key={index}>
                                                <Trans i18nKey={`firebase.steps.2.list.${index}`} ns="pages">
                                                    {item}
                                                </Trans>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 配置提示 */}
                            <div className="info-box" style={{
                                margin: '2rem 0 2.5rem 3.75rem',
                                background: 'var(--fuji-soft)',
                                borderColor: 'var(--fuji)',
                                padding: '1.25rem 1.5rem'
                            }}>
                                <div className="info-box-title" style={{ color: 'var(--fuji)', marginBottom: '0.5rem' }}>
                                    {t('firebase.config_info.title')}
                                </div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-nezumi)', marginBottom: '1rem' }}>
                                    {t('firebase.config_info.desc')}
                                </p>
                                <code style={{
                                    background: 'var(--bg-yoru)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '6px',
                                    color: 'var(--asagi)',
                                    fontSize: '0.9rem'
                                }}>src/firebase.js</code>
                            </div>

                            {/* 步驟 3 */}
                            <div className="step-section" style={{ marginBottom: '3.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'rgba(232, 92, 74, 0.05)',
                                        border: '1px solid var(--shu)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--shu)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>03</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('firebase.steps.3.title')}</h3>
                                        <p style={{ color: 'var(--text-ishi)', lineHeight: 1.6 }}>{t('firebase.steps.3.desc')}</p>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '3.75rem' }}>
                                    <div style={{
                                        background: 'var(--bg-yoru)',
                                        padding: '1.25rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border-kasumi)',
                                        color: 'var(--text-yuki)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        position: 'relative'
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
                                        >
                                            <Copy size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 導航按鈕 */}
                            <div style={{
                                marginTop: '4rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '2.5rem',
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
                </div>
            </section>
        </>
    )
}

export default FirebasePage
