import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function CloudflarePage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 04</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Global Deployment</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Register for Cloudflare to bring your site to the edge.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>

                        <div className="tutorial-section">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>1</span>
                                Create Account
                            </h3>
                            <p className="text-muted" style={{ margin: '1rem 0 2rem', paddingLeft: '42px' }}>
                                Cloudflare is the world's leading edge network. We'll use it to host your site for free with enterprise-grade speed.
                            </p>
                            <div style={{ paddingLeft: '42px' }}>
                                <a
                                    href="https://dash.cloudflare.com/sign-up"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ marginBottom: 'var(--space-lg)' }}
                                >
                                    Go to Cloudflare Sign Up →
                                </a>
                            </div>
                        </div>

                        <div className="tutorial-section" style={{ marginTop: '3rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>2</span>
                                Get API Token
                            </h3>
                            <p className="text-muted" style={{ margin: '1rem 0', paddingLeft: '42px' }}>
                                To let AI deploy for you, you need to generate an API Token.
                            </p>

                            <ul className="tutorial-list" style={{ paddingLeft: '60px' }}>
                                <li>Log in to Cloudflare Dashboard</li>
                                <li>Click User Icon (Top Right) → <strong>My Profile</strong></li>
                                <li>Select <strong>API Tokens</strong> on the left</li>
                                <li>Click <strong>Create Token</strong></li>
                                <li>Use Template: <strong>Edit Cloudflare Workers</strong> (Includes Pages rights)</li>
                                <li>Scroll down and click <strong>Continue to summary</strong></li>
                                <li>Click <strong>Create Token</strong></li>
                            </ul>

                            <div className="glass-panel-heavy" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--secondary)' }}>
                                <div className="info-box-title" style={{ color: 'var(--secondary)' }}>🔑 CRITICAL: Save Your Token</div>
                                <p style={{ marginBottom: 0, marginTop: '0.5rem', fontSize: '0.95rem' }}>
                                    The token is only shown <strong>ONCE</strong>. <br />
                                    Copy it immediately to a safe place (Note/Password Manager).<br />
                                    <strong>You will need this for the next step.</strong>
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/generation" className="btn btn-secondary">
                                ← Previous
                            </Link>
                            <Link to="/firebase" className="btn btn-primary">
                                Next: Database →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CloudflarePage
