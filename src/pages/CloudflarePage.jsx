import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { useStepProgress } from '../utils/useStepProgress'

function CloudflarePage() {
    const { t } = useTranslation(['pages'])
    const [activeIndex, setActiveIndex] = useStepProgress('cloudflare', 0)
    const sidebarItems = t('cloudflare.sidebar.items', { returnObjects: true })

    const handleCopy = () => {
        navigator.clipboard.writeText(t('cloudflare.steps.3.text'))
        toast.success(t('vision.generator.copy_toast'))
        setActiveIndex(2)
    }

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--fuji)'
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
                        title={t('cloudflare.sidebar.title')}
                        items={sidebarItems}
                        activeIndex={activeIndex}
                        whyTitle={t('cloudflare.sidebar.why_title')}
                        whyDesc={t('cloudflare.sidebar.why_desc')}
                    />

                    {/* 右側主內容 */}
                    <div style={{ flex: 1, maxWidth: '750px' }}>
                        <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                            {/* 第一步：註冊 */}
                            <div className="step-section" style={{ marginBottom: '3.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--fuji-soft)',
                                        border: '1px solid var(--fuji)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--fuji)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>01</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t('cloudflare.steps.1.title')}</h3>
                                        <p style={{ color: 'var(--text-nezumi)', lineHeight: 1.6 }}>{t('cloudflare.steps.1.desc')}</p>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '3.75rem' }}>
                                    <a
                                        href="https://dash.cloudflare.com/sign-up"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        {t('cloudflare.steps.1.button')}
                                    </a>
                                </div>
                            </div>

                            {/* 第二步：API Token */}
                            <div className="step-section" style={{ marginBottom: '3.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--fuji-soft)',
                                        border: '1px solid var(--fuji)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--fuji)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>02</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t('cloudflare.steps.2.title')}</h3>
                                        <p style={{ color: 'var(--text-nezumi)', lineHeight: 1.6 }}>{t('cloudflare.steps.2.desc')}</p>
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '3.75rem' }}>
                                    <ul style={{
                                        color: 'var(--text-nezumi)',
                                        display: 'grid',
                                        gap: '0.75rem',
                                        paddingLeft: '1.2rem',
                                        fontSize: '0.95rem'
                                    }}>
                                        {t('cloudflare.steps.2.list', { returnObjects: true }).map((_, index) => (
                                            <li key={index}>
                                                <Trans
                                                    i18nKey={`cloudflare.steps.2.list.${index}`}
                                                    ns="pages"
                                                    components={[<strong key="0" />]}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 第三步：AI 指令 */}
                            <div className="step-section" style={{ marginBottom: '3.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--fuji-soft)',
                                        border: '1px solid var(--fuji)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--fuji)',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>03</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t('cloudflare.steps.3.title')}</h3>
                                        <p style={{ color: 'var(--text-nezumi)', lineHeight: 1.6 }}>{t('cloudflare.steps.3.desc')}</p>
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
                                        >
                                            <Copy size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 警告區域 */}
                            <div className="info-box" style={{
                                marginTop: '1.5rem',
                                background: 'rgba(232, 92, 74, 0.05)',
                                borderColor: 'var(--shu)',
                                padding: '1.5rem 2rem'
                            }}>
                                <div className="info-box-title" style={{ color: 'var(--shu)', marginBottom: '0.75rem' }}>
                                    {t('cloudflare.warning.title')}
                                </div>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-nezumi)', margin: 0 }}>
                                    <Trans i18nKey="cloudflare.warning.text_1" ns="pages" components={[<strong key="0" />]} />
                                </p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-ishi)', marginTop: '0.5rem', margin: 0 }}>
                                    <Trans i18nKey="cloudflare.warning.text_2" ns="pages" components={[<br key="0" />]} />
                                </p>
                            </div>

                            {/* 導航按鈕 */}
                            <div style={{
                                marginTop: '4rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '2.5rem',
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
                </div>
            </section>
        </>
    )
}

export default CloudflarePage
