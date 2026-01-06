import { useTranslation, Trans } from 'react-i18next'

export default function VisionExample() {
    const { t } = useTranslation(['pages', 'common'])

    return (
        <>
            <h3 style={{
                marginBottom: '1.5rem',
                fontSize: '1.2rem',
                fontWeight: 500
            }}>{t('vision.example.title')}</h3>

            <div className="code-block" style={{
                padding: '1.5rem',
                marginBottom: '2rem'
            }}>
                {/* 用戶消息 */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--bg-shitan)',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        color: 'var(--text-ishi)'
                    }}>{t('common:cmd.switch_theme') === 'Switch to' ? 'You' : '你'}</div>
                    <div style={{
                        background: 'var(--bg-shitan)',
                        padding: '1rem',
                        borderRadius: '0 12px 12px 12px',
                        color: 'var(--text-yuki)',
                        fontSize: '0.95rem'
                    }}>
                        {t('vision.example.user_text')}
                    </div>
                </div>

                {/* AI 回覆 */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--grad-sunset)',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600
                    }}>AI</div>
                    <div style={{
                        background: 'var(--fuji-soft)',
                        border: '1px solid var(--fuji-soft)',
                        padding: '1rem',
                        borderRadius: '0 12px 12px 12px',
                        fontSize: '0.95rem'
                    }}>
                        <p style={{ marginBottom: '0.75rem', color: 'var(--text-yuki)' }}>
                            <Trans i18nKey="vision.example.ai_response_text_1" ns="pages">
                                <strong>{t('vision.example.ai_response_title')}</strong><br />
                                你想要一个 <strong>便利贴风格的极简待办清单</strong>。
                            </Trans>
                        </p>
                        <p style={{ color: 'var(--text-nezumi)', marginBottom: 0 }}>
                            <strong>{t('vision.example.ai_response_title_2')}</strong><br />
                            {t('vision.example.ai_response_text_2')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
