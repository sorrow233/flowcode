import { useTranslation } from 'react-i18next'

export default function VisionAiCommand() {
    const { t } = useTranslation(['pages'])

    return (
        <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
            }}>
                <span style={{
                    width: '28px',
                    height: '28px',
                    background: 'var(--fuji)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    color: 'white',
                    fontWeight: 600
                }}>✨</span>
                <h3 style={{
                    fontSize: '1.2rem',
                    margin: 0,
                    fontWeight: 500
                }}>{t('vision.ai_cmd.title')}</h3>
            </div>
            <p style={{
                color: 'var(--text-ishi)',
                marginBottom: '1rem',
                paddingLeft: '2.5rem'
            }}>
                {t('vision.ai_cmd.desc')}
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
                    {t('vision.ai_cmd.text')}
                </div>
            </div>
        </div>
    )
}
