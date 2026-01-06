import { Link } from 'react-router-dom'

function GenerationPage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 03</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Code Generation</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Witness the magic. Let AI turn your thoughts into reality.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
                        <div className="steps-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>

                            <div className="glass-panel-heavy" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1, opacity: 0.5 }}>01</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Prepare Command</h3>
                                    <p className="text-muted" style={{ marginBottom: 0 }}>
                                        Combine your original vision with the AI's <strong>"Restated Understanding + Suggestions"</strong> from Step 2 into one complete instruction block.
                                    </p>
                                </div>
                            </div>

                            <div className="glass-panel-heavy" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, opacity: 0.5 }}>02</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Send to Antigravity</h3>
                                    <p className="text-muted" style={{ marginBottom: 0 }}>
                                        Paste this block into the IDE chat and press Enter.
                                    </p>
                                </div>
                            </div>

                            <div className="glass-panel-heavy" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fbbf24', lineHeight: 1, opacity: 0.5 }}>03</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Wait for Creation</h3>
                                    <p className="text-muted" style={{ marginBottom: 0 }}>
                                        AI will automatically plan the file structure and write code. Just watch the progress bar until you see "Task Completed".
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="surface-card" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                            <div className="info-box-title" style={{ justifyContent: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>☕️ Grab a Coffee</div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Depending on complexity, this may take a few minutes. You can use this time to register for the next step's accounts.
                            </p>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/vision" className="btn btn-secondary">
                                ← Previous
                            </Link>
                            <Link to="/cloudflare" className="btn btn-primary">
                                Next: Cloudflare Config →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenerationPage
