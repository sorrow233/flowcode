import { Link } from 'react-router-dom'

function DownloadPage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 01</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get the Tool</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Download Google Antigravity. Start your journey.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>

                        <div className="surface-card" style={{ padding: '2rem', borderRadius: '16px', marginBottom: '3rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>Google Antigravity IDE</div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                The most powerful AI-native IDE. Built by Google DeepMind.
                            </p>
                            <a
                                href="https://antigravity.google/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
                            >
                                Download Official IDE →
                            </a>
                        </div>

                        <div className="glass-panel-heavy" style={{ padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent)' }}>
                            <div className="info-box-title" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>⚠️ Important Notice</div>
                            <p style={{ marginBottom: '0.5rem' }}>
                                We are using the <strong>Official Google Antigravity IDE</strong>.
                            </p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Please ensure you download from the official source to guarantee security and access to the latest models (Gemini 2.0).
                            </p>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/" className="btn btn-secondary">
                                ← Home
                            </Link>
                            <Link to="/vision" className="btn btn-primary">
                                Next: Vision →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadPage
