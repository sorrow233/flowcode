import { useTranslation } from 'react-i18next'

export default function VisionFeatures() {
    const { t } = useTranslation(['pages'])

    return (
        <div className="feature-grid" style={{ marginBottom: '2.5rem' }}>
            {[
                { icon: '🎯', title: t('vision.features.target.title'), desc: t('vision.features.target.desc'), color: 'var(--asagi)' },
                { icon: '💡', title: t('vision.features.purpose.title'), desc: t('vision.features.purpose.desc'), color: 'var(--fuji)' }
            ].map(item => (
                <div key={item.title} className="surface-card" style={{
                    padding: '1.25rem',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{
                        color: item.color,
                        fontSize: '1rem',
                        marginBottom: '0.25rem'
                    }}>{item.title}</h4>
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-ishi)',
                        marginBottom: 0
                    }}>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}
