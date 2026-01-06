import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Eye, Zap, Cloud, Flame, Brain, ArrowRight, Sparkles } from 'lucide-react'
import { WashiCard } from '../../../components/ui/WashiCard'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50
        }
    }
}

const FeaturesSection = () => {
    const { t } = useTranslation()

    return (
        <section style={{
            padding: '8rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient Background */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--fuji-glow) 0%, transparent 60%)',
                filter: 'blur(80px)',
                opacity: 0.4,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, var(--shu-glow) 0%, transparent 60%)',
                filter: 'blur(80px)',
                opacity: 0.3,
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '1200px' }}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '5rem'
                    }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '999px',
                        background: 'var(--bg-shitan)',
                        border: '1px solid var(--border-kasumi)',
                        fontSize: '0.8rem',
                        color: 'var(--text-ishi)',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.1em'
                    }}>
                        {t('home.steps_title')}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 300,
                        fontFamily: 'var(--font-mincho)',
                        color: 'var(--text-yuki)',
                        marginBottom: '1rem'
                    }}>
                        Evolution of <span className="text-gradient-shu">Vision</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-nezumi)',
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        {t('home.steps_desc')}
                    </p>
                </motion.div>

                {/* Refined Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '1.5rem',
                        autoRows: 'minmax(180px, auto)'
                    }}
                >
                    {/* CSS for responsive grid */}
                    <style>{`
                        .grid-card { grid-column: span 12; }
                        @media (min-width: 768px) {
                            .grid-span-8 { grid-column: span 8 !important; }
                            .grid-span-7 { grid-column: span 7 !important; }
                            .grid-span-6 { grid-column: span 6 !important; }
                            .grid-span-5 { grid-column: span 5 !important; }
                            .grid-span-4 { grid-column: span 4 !important; }
                            .grid-span-3 { grid-column: span 3 !important; }
                        }
                    `}</style>

                    {/* Feature 1: Visual Intelligence (Large) */}
                    <motion.div variants={itemVariants} className="grid-card grid-span-7">
                        <WashiCard
                            to="/vision"
                            style={{
                                height: '100%',
                                minHeight: '380px',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
                                border: '1px solid var(--border-kin)'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                background: 'radial-gradient(circle at 80% 20%, var(--asagi-glow) 0%, transparent 50%)',
                                zIndex: 0
                            }} />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '1rem',
                                    color: 'var(--asagi)'
                                }}>
                                    <Eye size={24} />
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>01_VISUAL</span>
                                </div>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    marginBottom: '1rem',
                                    fontFamily: 'var(--font-gothic)'
                                }}>
                                    {t('home.visual_intelligence_title')}
                                </h3>
                                <p style={{
                                    color: 'var(--text-nezumi)',
                                    maxWidth: '80%',
                                    fontSize: '1rem'
                                }}>
                                    {t('home.visual_intelligence_desc')}
                                </p>
                            </div>

                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '2rem',
                                color: 'var(--text-yuki)',
                                fontWeight: 500
                            }}>
                                Explore Vision <ArrowRight size={18} />
                            </div>
                        </WashiCard>
                    </motion.div>

                    {/* Feature 2: Cognitive Load (Tall/Box) */}
                    <motion.div variants={itemVariants} className="grid-card grid-span-5">
                        <WashiCard
                            style={{
                                height: '100%',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                background: 'rgba(22, 22, 30, 0.4)'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--bg-shitan)',
                                borderRadius: '50%',
                                marginBottom: '2rem',
                                border: '1px solid var(--border-kasumi)',
                                color: 'var(--text-yuki)'
                            }}>
                                <Brain size={36} strokeWidth={1.5} />
                            </div>
                            <h4 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                color: 'var(--text-yuki)'
                            }}>
                                {t('home.cognitive_load_title')}
                            </h4>
                            <p style={{
                                color: 'var(--text-ishi)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6
                            }}>
                                {t('home.cognitive_load_desc')}
                            </p>
                        </WashiCard>
                    </motion.div>

                    {/* Feature 3: Generation (Wide) */}
                    <motion.div variants={itemVariants} className="grid-card grid-span-4">
                        <WashiCard
                            to="/generation"
                            style={{
                                minHeight: '220px',
                                height: '100%',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: 'var(--fuji-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--fuji)'
                                }}>
                                    <Sparkles size={20} />
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-ishi)' }}>02</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('home.generation_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-ishi)', marginBottom: 0 }}>
                                    {t('home.generation_desc')}
                                </p>
                            </div>
                        </WashiCard>
                    </motion.div>

                    {/* Feature 4: Cloudflare (Medium) */}
                    <motion.div variants={itemVariants} className="grid-card grid-span-4">
                        <WashiCard
                            to="/cloudflare"
                            style={{
                                minHeight: '220px',
                                height: '100%',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: 'var(--kincha-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--kincha)'
                                }}>
                                    <Cloud size={20} />
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-ishi)' }}>03</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('home.deploy_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-ishi)', marginBottom: 0 }}>
                                    {t('home.deploy_desc')}
                                </p>
                            </div>
                        </WashiCard>
                    </motion.div>

                    {/* Feature 5: Firebase (Medium) */}
                    <motion.div variants={itemVariants} className="grid-card grid-span-4">
                        <WashiCard
                            to="/firebase"
                            style={{
                                minHeight: '220px',
                                height: '100%',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: 'var(--shu-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--shu)'
                                }}>
                                    <Flame size={20} />
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-ishi)' }}>04</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{t('home.storage_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-ishi)', marginBottom: 0 }}>
                                    {t('home.storage_desc')}
                                </p>
                            </div>
                        </WashiCard>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default FeaturesSection
