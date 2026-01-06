import { Link } from 'react-router-dom'
import { Copy, Coffee } from 'lucide-react'
import { toast } from 'sonner'
import { useTranslation, Trans } from 'react-i18next'

function GenerationPage() {
    const { t } = useTranslation(['pages'])

    const handleCopy = () => {
        navigator.clipboard.writeText(t('generation.ai_cmd.text'))
        toast.success(t('vision.generator.copy_toast'))
    }

    const steps = t('generation.steps', { returnObjects: true })

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--kincha)'
                        }}>{t('generation.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('generation.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('generation.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('generation.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '750px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        {/* 步驟列表 */}
                        <div className="steps-list" style={{ marginBottom: '3rem' }}>
                            {Array.isArray(steps) && steps.map((step, index) => (
                                <div key={index} className="step-item" style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    marginBottom: '2rem'
                                }}>
                                    <div style={{
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--kincha)',
                                        opacity: 0.5,
                                        fontWeight: 600
                                    }}>
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.2rem',
                                            marginBottom: '0.5rem',
                                            color: 'var(--text-yuki)'
                                        }}>{step.title}</h3>
                                        <p style={{
                                            color: 'var(--text-nezumi)',
                                            marginBottom: 0,
                                            lineHeight: 1.6
                                        }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 休息卡片 */}
                        <div className="surface-card" style={{
                            padding: '1.5rem',
                            display: 'flex',
                            gap: '1.25rem',
                            alignItems: 'start',
                            backgroundColor: 'rgba(212, 163, 115, 0.05)',
                            borderColor: 'var(--kincha)',
                            marginBottom: '2.5rem'
                        }}>
                            <div style={{
                                color: 'var(--kincha)',
                                marginTop: '0.2rem'
                            }}>
                                <Coffee size={24} />
                            </div>
                            <div>
                                <h4 style={{
                                    color: 'var(--kincha)',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.1rem'
                                }}>{t('generation.coffee_break.title')}</h4>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    marginBottom: 0,
                                    fontSize: '0.95rem'
                                }}>
                                    <Trans i18nKey="generation.coffee_break.desc" ns="pages" />
                                </p>
                            </div>
                        </div>

                        {/* AI 指令 */}
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
                                    background: 'var(--asagi)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>⚡</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>{t('generation.ai_cmd.title')}</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                {t('generation.ai_cmd.desc')}
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
                                    {t('generation.ai_cmd.text')}
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
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/vision" className="btn btn-secondary">
                                {t('generation.nav.vision')}
                            </Link>
                            <Link to="/cloudflare" className="btn btn-primary">
                                {t('generation.nav.cloudflare')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenerationPage
