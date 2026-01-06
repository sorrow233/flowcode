import { useRef } from 'react'
import { Link } from 'react-router-dom'

// --- Tilt Card Component ---
const TiltCard = ({ children, to, className = '', style = {} }) => {
    const ref = useRef(null)

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // Intensity of the tilt
        const rotateX = ((y - centerY) / centerY) * -5
        const rotateY = ((x - centerX) / centerX) * 5

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        ref.current.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(99, 102, 241, 0.2)'
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        ref.current.style.boxShadow = 'var(--shadow-md)'
    }

    const Component = to ? Link : 'div'

    return (
        <Component
            to={to}
            ref={ref}
            className={`glass-panel card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
                textDecoration: 'none',
                ...style
            }}
        >
            {children}
            {/* Glossy overlay effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(125deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
                pointerEvents: 'none',
                borderRadius: 'inherit'
            }} />
        </Component>
    )
}

function HomePage() {
    return (
        <div className="home-container" style={{ overflowX: 'hidden' }}>

            {/* === Radical Hero Section === */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                marginTop: '-80px' // Offset header
            }}>

                {/* Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: -1,
                    filter: 'blur(60px)'
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>

                    <div className="animate-enter fade-in-delay-1" style={{ marginBottom: '1rem' }}>
                        <span style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--primary)',
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            background: 'rgba(99, 102, 241, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(99, 102, 241, 0.2)'
                        }}>
                            System Online
                        </span>
                    </div>

                    <h1 className="animate-enter fade-in-delay-2" style={{
                        position: 'relative',
                        fontSize: 'clamp(4rem, 15vw, 12rem)',
                        fontWeight: 300,
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                        fontFamily: 'var(--font-display)',
                        textTransform: 'uppercase',
                        margin: '1rem 0'
                    }}>
                        <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Flow</span>
                        <span className="text-gradient" style={{ display: 'block', fontWeight: 800 }}>Code</span>
                    </h1>

                    <p className="animate-enter fade-in-delay-3" style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '2rem auto',
                        lineHeight: 1.6
                    }}>
                        Reject the syntax. Embrace the logic. <br />
                        <span style={{ color: 'white' }}>The first AI-native development environment.</span>
                    </p>

                    <div className="animate-enter fade-in-delay-3" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                        <Link to="/download" className="btn btn-primary" style={{ height: '60px', padding: '0 3rem', fontSize: '1.2rem' }}>
                            Initialize
                        </Link>
                    </div>

                </div>

                {/* Decor Elements */}
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    textAlign: 'right',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    opacity: 0.5
                }}>
                    <div style={{ marginBottom: '0.5rem' }}>VER 2.4.0</div>
                    <div>STATUS: STABLE</div>
                </div>
            </section>


            {/* === Modular Grid Section === */}
            <section className="section" style={{ padding: '4rem 0 8rem' }}>
                <div className="container">
                    <div className="bento-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridAutoRows: 'minmax(200px, auto)',
                        gap: '24px',
                    }}>

                        {/* 1. Large Feature Card (Span 8) */}
                        <TiltCard className="surface-card" style={{ gridColumn: 'span 12', md: { gridColumn: 'span 8' }, padding: '3rem', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            {/* Abstract graphic */}
                            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary-dim) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', maxWidth: '600px' }}>Visual Intelligence</h3>
                                <p style={{ fontSize: '1.5rem', maxWidth: '500px', color: 'var(--text-secondary)' }}>
                                    Stop writing boilerplate. FlowCode understands your intent and constructs the architecture instantly.
                                </p>
                            </div>
                        </TiltCard>

                        {/* 2. Side Stack (Span 4) */}
                        <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '24px', '@media (min-width: 768px)': { gridColumn: 'span 4' } }} className="mobile-stack">
                            {/* I can't easily do media queries in inline styles without a library, so I'll just make them span 12 for mobile and handle responsive via CSS generic classes if I had them, or just use 6/6 logic. Let's stick to 6/6 or 4/4/4 for simplicity in this generated code or assume desktop first for the "wow" factor, but better to be safe. I'll make them 12 (full width) but add a style block. */}

                            <style>{`
                                .bento-grid > * { grid-column: span 12; }
                                @media (min-width: 900px) {
                                    .col-span-8 { grid-column: span 8 !important; }
                                    .col-span-4 { grid-column: span 4 !important; }
                                    .col-span-6 { grid-column: span 6 !important; }
                                    .col-span-3 { grid-column: span 3 !important; }
                                }
                             `}</style>

                        </div>

                        {/* We need to restructure the grid children because of the style block above */}
                        <TiltCard className="col-span-8 surface-card" style={{ padding: '3rem', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧠</div>
                            <h3 style={{ fontSize: '2rem', color: 'white' }}>Cognitive Load: Zero</h3>
                            <p style={{ fontSize: '1.1rem' }}>Forget syntax errors. The IDE handles the grammar while you handle the logic.</p>
                        </TiltCard>

                        <TiltCard to="/vision" className="col-span-4 glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to bottom right, var(--bg-surface), var(--bg-deep))' }}>
                            <div style={{ marginBottom: 'auto', fontSize: '2rem', color: 'var(--secondary)' }}>👁️</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Vision Studio</h3>
                            <p style={{ fontSize: '0.9rem' }}>Architect your dreams.</p>
                        </TiltCard>

                        <TiltCard to="/generation" className="col-span-4 glass-panel" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Module 02</h4>
                            <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', color: '#fff' }}>Generation</h3>
                            <p style={{ marginTop: '1rem' }}>Real-time code synthesis.</p>
                        </TiltCard>

                        <TiltCard to="/cloudflare" className="col-span-4 glass-panel" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Module 03</h4>
                            <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', color: '#fff' }}>Deployment</h3>
                            <p style={{ marginTop: '1rem' }}>Global edge network.</p>
                        </TiltCard>

                        <TiltCard to="/firebase" className="col-span-4 glass-panel" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Module 04</h4>
                            <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', color: '#fff' }}>Backend</h3>
                            <p style={{ marginTop: '1rem' }}>Serverless infrastructure.</p>
                        </TiltCard>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
