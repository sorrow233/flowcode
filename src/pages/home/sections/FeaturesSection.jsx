import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Eye, Sparkles, Cloud, Rocket, ArrowRight } from 'lucide-react'

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
}

// Step Card Component
const StepCard = ({ num, title, desc, cta, to, icon: Icon, color, isReversed, index }) => {
    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'center',
                padding: '4rem 0',
                position: 'relative'
            }}
        >
            {/* Connecting Line */}
            {index < 3 && (
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: '-2rem',
                    width: '2px',
                    height: '4rem',
                    background: 'linear-gradient(180deg, var(--border-kin) 0%, transparent 100%)',
                    transform: 'translateX(-50%)',
                    zIndex: 0
                }} />
            )}

            {/* Visual Side */}
            <motion.div
                variants={itemVariants}
                style={{
                    gridColumn: isReversed ? 'span 5 / -1' : '1 / span 5',
                    gridRow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    minHeight: '280px',
                    order: isReversed ? 2 : 1
                }}
                className="step-visual"
            >
                {/* Background Glow */}
                <div style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    zIndex: 0
                }} />

                {/* Icon Container */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '160px',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--bg-shitan)',
                    borderRadius: '32px',
                    border: '1px solid var(--border-kasumi)',
                    boxShadow: `0 20px 60px ${color}20`
                }}>
                    <Icon size={64} strokeWidth={1} style={{ color }} />
                </div>

                {/* Step Number */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: isReversed ? 'auto' : '10%',
                    right: isReversed ? '10%' : 'auto',
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '6rem',
                    fontWeight: 300,
                    color: 'var(--text-ishi)',
                    opacity: 0.15,
                    lineHeight: 1,
                    zIndex: 0
                }}>
                    {num}
                </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    gridColumn: isReversed ? '1 / span 6' : 'span 6 / -1',
                    gridRow: 1,
                    order: isReversed ? 1 : 2,
                    paddingLeft: isReversed ? '0' : '2rem',
                    paddingRight: isReversed ? '2rem' : '0'
                }}
                className="step-text"
            >
                <motion.h3
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        fontWeight: 400,
                        fontFamily: 'var(--font-gothic)',
                        color: 'var(--text-yuki)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2
                    }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--text-nezumi)',
                        marginBottom: '2rem',
                        maxWidth: '480px'
                    }}
                >
                    {desc}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Link
                        to={to}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color,
                            fontSize: '1rem',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'gap 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.gap = '1rem'}
                        onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                    >
                        {cta} <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Responsive CSS */}
            <style>{`
                @media (max-width: 900px) {
                    .step-visual {
                        grid-column: 1 / -1 !important;
                        grid-row: 1 !important;
                        order: 1 !important;
                        min-height: 200px !important;
                    }
                    .step-text {
                        grid-column: 1 / -1 !important;
                        grid-row: 2 !important;
                        order: 2 !important;
                        padding: 0 !important;
                        text-align: center;
                    }
                    .step-text p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .step-text a {
                        justify-content: center;
                    }
                }
            `}</style>
        </motion.div>
    )
}

const FeaturesSection = () => {
    const { t } = useTranslation()

    const steps = [
        {
            num: t('features.step1_num'),
            title: t('features.step1_title'),
            desc: t('features.step1_desc'),
            cta: t('features.step1_cta'),
            to: '/vision',
            icon: Eye,
            color: 'var(--asagi)'
        },
        {
            num: t('features.step2_num'),
            title: t('features.step2_title'),
            desc: t('features.step2_desc'),
            cta: t('features.step2_cta'),
            to: '/generation',
            icon: Sparkles,
            color: 'var(--fuji)'
        },
        {
            num: t('features.step3_num'),
            title: t('features.step3_title'),
            desc: t('features.step3_desc'),
            cta: t('features.step3_cta'),
            to: '/cloudflare',
            icon: Cloud,
            color: 'var(--kincha)'
        },
        {
            num: t('features.step4_num'),
            title: t('features.step4_title'),
            desc: t('features.step4_desc'),
            cta: t('features.step4_cta'),
            to: '/download',
            icon: Rocket,
            color: 'var(--shu)'
        }
    ]

    return (
        <section style={{
            padding: '8rem 0 4rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '-15%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, var(--fuji-glow) 0%, transparent 60%)',
                filter: 'blur(100px)',
                opacity: 0.3,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, var(--asagi-glow) 0%, transparent 65%)',
                filter: 'blur(100px)',
                opacity: 0.25,
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '6rem'
                    }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '999px',
                        background: 'var(--bg-shitan)',
                        border: '1px solid var(--border-kasumi)',
                        fontSize: '0.85rem',
                        color: 'var(--text-ishi)',
                        marginBottom: '2rem',
                        letterSpacing: '0.15em',
                        fontFamily: 'var(--font-gothic)'
                    }}>
                        {t('features.eyebrow')}
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 300,
                        fontFamily: 'var(--font-mincho)',
                        color: 'var(--text-yuki)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        {t('features.title')}
                        <br />
                        <span className="text-gradient-shu" style={{ fontWeight: 500 }}>
                            {t('features.title_highlight')}
                        </span>
                    </h2>

                    <p style={{
                        color: 'var(--text-nezumi)',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                {/* Steps */}
                <div style={{ position: 'relative' }}>
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.to}
                            {...step}
                            isReversed={index % 2 !== 0}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturesSection
