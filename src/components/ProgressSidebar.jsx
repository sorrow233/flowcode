import { CheckCircle2, Circle, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ProgressSidebar Component
 * @param {Object} props
 * @param {string} props.title - Sidebar title
 * @param {Array} props.items - Array of { label, desc } objects
 * @param {number} props.activeIndex - Zero-based index of the current active step
 * @param {string} props.whyTitle - Title for the "Why" section
 * @param {string} props.whyDesc - Description for the "Why" section
 */
export function ProgressSidebar({ title, items = [], activeIndex = 0, whyTitle, whyDesc }) {
    const progress = items.length > 0 ? (activeIndex / items.length) * 100 : 0

    return (
        <aside className="progress-sidebar" style={{
            position: 'sticky',
            top: '120px',
            alignSelf: 'start',
            width: '280px',
            flexShrink: 0
        }}>
            <div className="washi-card-dark" style={{
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-kasumi)',
                background: 'rgba(255, 255, 255, 0.8)'
            }}>
                <h3 style={{
                    fontSize: '1rem',
                    marginBottom: '1.25rem',
                    color: 'var(--text-yuki)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontWeight: 600
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--asagi)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--asagi-glow)'
                    }} />
                    {title}
                </h3>

                {/* Progress Bar Container */}
                <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        color: 'var(--text-ishi)',
                        marginBottom: '0.6rem',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        <span style={{ color: 'var(--asagi)' }}>{Math.round(progress)}%</span>
                        <span>{activeIndex + 1} / {items.length}</span>
                    </div>
                    <div style={{
                        height: '4px',
                        background: 'rgba(0, 0, 0, 0.06)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            style={{
                                height: '100%',
                                background: 'var(--grad-dawn)',
                                position: 'absolute',
                                left: 0,
                                top: 0
                            }}
                        />
                    </div>
                </div>

                {/* To-Do List */}
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                    {items.map((item, index) => {
                        const isCompleted = index < activeIndex
                        const isActive = index === activeIndex

                        return (
                            <div key={index} style={{
                                display: 'flex',
                                gap: '0.85rem',
                                opacity: isCompleted || isActive ? 1 : 0.4,
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isActive ? 'translateX(4px)' : 'none'
                            }}>
                                <div style={{ marginTop: '0.2rem', flexShrink: 0 }}>
                                    {isCompleted ? (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <CheckCircle2 size={16} color="var(--asagi)" />
                                        </motion.div>
                                    ) : isActive ? (
                                        <div style={{ position: 'relative', width: '16px', height: '16px' }}>
                                            <Circle
                                                size={16}
                                                color="var(--asagi)"
                                                strokeWidth={3}
                                            />
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: '50%',
                                                    border: '2px solid var(--asagi)',
                                                    pointerEvents: 'none'
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Circle size={16} color="var(--text-ishi)" />
                                    )}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: isActive ? 'var(--text-yuki)' : isCompleted ? 'var(--text-nezumi)' : 'var(--text-ishi)',
                                        fontWeight: isActive ? 600 : 400,
                                        transition: 'color 0.3s',
                                        lineHeight: 1.4
                                    }}>
                                        {item.label}
                                    </div>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{
                                                    overflow: 'hidden',
                                                    fontSize: '0.75rem',
                                                    color: 'var(--text-ishi)',
                                                    marginTop: '0.4rem',
                                                    lineHeight: 1.5
                                                }}
                                            >
                                                {item.desc}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </aside>
    )
}

export default ProgressSidebar
