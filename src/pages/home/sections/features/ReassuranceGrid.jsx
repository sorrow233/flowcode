import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Sparkles, ShieldCheck } from 'lucide-react'
import { WashiCard } from '../../../../components/ui/WashiCard'
import { useTranslation } from 'react-i18next'

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

const ReassuranceCard = ({ title, subtitle, desc, icon: Icon }) => {
    return (
        <motion.div variants={itemVariants} style={{ height: '100%' }}>
            <WashiCard
                style={{
                    height: '100%',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',

                    border: '1px solid var(--border-kasumi)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, var(--text-ishi) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    opacity: 0.1,
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header Group */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            color: 'var(--text-nezumi)'
                        }}>
                            <Icon size={20} />
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: 500,
                                margin: 0
                            }}>
                                {title}
                            </h3>
                        </div>
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: 700,
                            color: 'var(--text-yuki)',
                            fontFamily: 'var(--font-mincho)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <CheckCircle2 size={24} style={{ color: 'var(--asagi)' }} />
                            {subtitle}
                        </div>
                    </div>

                    {/* Description */}
                    <p style={{
                        color: 'var(--text-ishi)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        margin: 0
                    }}>
                        {desc}
                    </p>
                </div>
            </WashiCard>
        </motion.div>
    )
}

export default function ReassuranceGrid() {
    const { t } = useTranslation()

    return (
        <div style={{
            padding: '8rem 0 6rem',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 300,
                        color: 'var(--text-yuki)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-mincho)'
                    }}>
                        {t('features.title')} <span className="text-gradient-shu">{t('features.title_highlight')}</span>
                    </h2>
                    <p style={{ color: 'var(--text-nezumi)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    <ReassuranceCard
                        title={t('features.card1_title')}
                        subtitle={t('features.card1_subtitle')}
                        desc={t('features.card1_desc')}
                        icon={Zap}
                    />
                    <ReassuranceCard
                        title={t('features.card2_title')}
                        subtitle={t('features.card2_subtitle')}
                        desc={t('features.card2_desc')}
                        icon={Sparkles}
                    />
                    <ReassuranceCard
                        title={t('features.card3_title')}
                        subtitle={t('features.card3_subtitle')}
                        desc={t('features.card3_desc')}
                        icon={ShieldCheck}
                    />
                </motion.div>
            </div>
        </div>
    )
}
