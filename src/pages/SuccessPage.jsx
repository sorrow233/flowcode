import { Link } from 'react-router-dom'

function SuccessPage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }}>🎉</div>
                    <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Ready for Takeoff</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>You are now a developer.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>

                        <h2 style={{ marginBottom: '2rem' }}>The world is your canvas</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            You have the tools, the vision, and the AI. <br />
                            From this moment on, you only need to do two things:
                        </p>

                        <div className="steps-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                            <div className="surface-card animate-float delay-100" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid var(--primary-dim)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗣️</div>
                                <h3 style={{ color: 'var(--text-primary)' }}>1. Prompt</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Describe your idea in plain language.</p>
                            </div>
                            <div className="surface-card animate-float delay-200" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid var(--secondary-glow)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔄</div>
                                <h3 style={{ color: 'var(--text-primary)' }}>2. Iterate</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Refresh and refine until it's perfect.</p>
                            </div>
                        </div>

                        <div className="glass-panel-heavy" style={{ padding: '2.5rem', borderRadius: '24px', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--grad-primary)' }}></div>
                            <div className="info-box-title" style={{ justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>🌟 Giants are with you</div>
                            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                Never doubt yourself. Behind you stands <strong>the most powerful AI model</strong> in human history.
                            </p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                You are not coding alone. You have a world-class engineering team on standby 24/7.
                                Unleash your creativity. Let AI handle the rest.
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', borderRadius: '16px', border: '1px dashed var(--border-dim)', background: 'rgba(0,0,0,0.2)' }}>
                            <div className="info-box-title" style={{ justifyContent: 'center', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>ℹ️ Disclaimer</div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                                This project is an unofficial guide to AI-assisted programming. We highly recommend Google's Antigravity IDE as the pinnacle of current technology.
                            </p>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <a
                                href="https://antigravity.google/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ padding: '1.2rem 4rem', fontSize: '1.3rem', marginBottom: '2rem' }}
                            >
                                Launch Mission 🚀
                            </a>
                            <br />
                            <Link to="/domain" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                ← Back to Domain
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessPage
