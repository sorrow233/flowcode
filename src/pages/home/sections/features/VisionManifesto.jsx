import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Feather } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function VisionManifesto() {
    const { t } = useTranslation()

    return (
        <div style={{
            padding: '10rem 0',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh'
        }}>
            {/* Background Ambient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(232, 92, 74, 0.08) 0%, transparent 60%)',
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div style={{ marginBottom: '3rem', color: 'var(--text-ishi)' }}>
                        <Feather size={48} strokeWidth={1} style={{ margin: '0 auto', opacity: 0.5 }} />
                    </div>

                    <h3 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        lineHeight: 1.4,
                        fontWeight: 300,
                        color: 'var(--text-yuki)',
                        fontFamily: 'var(--font-mincho)',
                        marginBottom: '3rem'
                    }}>
                        {t('features.vision_quote_1')}
                        <br />
                        <span style={{ display: 'block', marginTop: '1rem', color: 'var(--text-nezumi)', fontSize: '0.8em' }}>
                            {t('features.vision_quote_2')}
                            <span className="text-gradient-shu" style={{ fontWeight: 500, marginLeft: '0.5rem' }}>
                                {t('features.vision_quote_highlight')}
                            </span>
                        </span>
                    </h3>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '700px',
                        margin: '0 auto 4rem',
                        lineHeight: 1.8
                    }}>
                        {t('features.vision_desc')}
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <Link to="/vision" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            {t('features.vision_cta')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
