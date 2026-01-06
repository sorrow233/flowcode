import { Link } from 'react-router-dom'

function DomainPage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 06</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Your Identity</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>A custom domain is your digital real estate.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>

                        <div className="tutorial-section">
                            <h3>Providers</h3>
                            <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                We recommend these providers for stability and price.
                            </p>

                            <div className="surface-card animate-float" style={{ padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderRadius: '16px' }}>
                                <div style={{ fontSize: '2rem' }}>☁️</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Cloudflare (Recommended)</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
                                        Zero markup pricing. Best integration with Pages.
                                    </p>
                                </div>
                            </div>

                            <div className="surface-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderRadius: '16px' }}>
                                <div style={{ fontSize: '2rem' }}>🏷️</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Namecheap</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
                                        Great for first-year discounts and alternative TLDs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel-heavy" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--secondary)' }}>
                            <div className="info-box-title" style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>🔗 Linking</div>
                            <p style={{ marginBottom: 0 }}>
                                After purchase, go to Cloudflare Pages Project Settings → <strong>Custom Domains</strong>.<br />
                                Cloudflare handles the SSL and DNS automatically.
                            </p>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/firebase" className="btn btn-secondary">
                                ← Previous
                            </Link>
                            <Link to="/success" className="btn btn-primary" style={{ background: 'var(--color-success)', color: 'black' }}>
                                Finish →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DomainPage
