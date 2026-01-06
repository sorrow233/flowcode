import { Sparkles, Copy } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

// Props: appType, setAppType, goal, setGoal, generatedPrompt, handleGenerate, handleCopy
export default function VisionGenerator({
    appType,
    setAppType,
    goal,
    setGoal,
    generatedPrompt,
    onGenerate,
    onCopy
}) {
    const { t } = useTranslation(['pages'])

    return (
        <div className="surface-card" style={{
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid var(--border-kin)',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 100%)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Sparkles size={20} color="var(--asagi)" />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{t('vision.generator.title')}</h3>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Input 1: Application Type */}
                <div>
                    <label style={{
                        display: 'block',
                        color: 'var(--text-nezumi)',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem'
                    }}>
                        <Trans i18nKey="vision.generator.app_type_label" ns="pages">
                            1. 應用類型 <span style={{ opacity: 0.5 }}>(Application Type)</span>
                        </Trans>
                    </label>
                    <input
                        type="text"
                        placeholder={t('vision.generator.app_type_placeholder')}
                        value={appType}
                        onChange={(e) => setAppType(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-sumi)',
                            border: '1px solid var(--border-kasumi)',
                            color: 'var(--text-yuki)',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-gothic)',
                            outline: 'none',
                            transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--asagi)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-kasumi)'}
                    />
                </div>

                {/* Input 2: Goal */}
                <div>
                    <label style={{
                        display: 'block',
                        color: 'var(--text-nezumi)',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem'
                    }}>
                        <Trans i18nKey="vision.generator.goal_label" ns="pages">
                            2. 解決什麼問題 / 達成什麼目標 <span style={{ opacity: 0.5 }}>(Goal/Purpose)</span>
                        </Trans>
                    </label>
                    <input
                        type="text"
                        placeholder={t('vision.generator.goal_placeholder')}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-sumi)',
                            border: '1px solid var(--border-kasumi)',
                            color: 'var(--text-yuki)',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-gothic)',
                            outline: 'none',
                            transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--asagi)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-kasumi)'}
                    />
                </div>

                {/* Generate Button */}
                <button
                    onClick={onGenerate}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                >
                    {t('vision.generator.button')}
                </button>
            </div>

            {/* Generated Result Area */}
            {generatedPrompt && (
                <div className="animate-enter" style={{
                    marginTop: '2rem',
                    paddingtop: '2rem',
                    borderTop: '1px solid var(--border-kasumi)'
                }}>
                    <label style={{
                        display: 'block',
                        color: 'var(--asagi)',
                        fontSize: '0.9rem',
                        marginBottom: '0.8rem',
                        fontWeight: 500
                    }}>
                        {t('vision.generator.result_title')}
                    </label>
                    <div style={{
                        position: 'relative',
                        background: 'var(--bg-shitan)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--asagi-soft)',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            padding: '1.25rem',
                            paddingRight: '3.5rem',
                            color: 'var(--text-yuki)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            whiteSpace: 'pre-wrap'
                        }}>
                            {generatedPrompt}
                        </div>
                        <button
                            onClick={onCopy}
                            title={t('vision.generator.copy_toast')}
                            style={{
                                position: 'absolute',
                                top: '0.8rem',
                                right: '0.8rem',
                                background: 'var(--bg-sumi)',
                                border: '1px solid var(--border-kasumi)',
                                color: 'var(--text-nezumi)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
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
                            <Copy size={16} />
                        </button>
                    </div>
                    <div style={{
                        marginTop: '1rem',
                        textAlign: 'right'
                    }}>
                        <a
                            href="https://gemini.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--asagi)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.5rem 1rem',
                                background: 'var(--asagi-soft)',
                                borderRadius: 'var(--radius-md)',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'brightness(1.1)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'brightness(1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {t('vision.gemini_link')}
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
