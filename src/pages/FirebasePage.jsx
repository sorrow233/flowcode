import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function FirebasePage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 05</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Infinite Storage</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Connect to Google Firebase. Store data at scale.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>

                        <div className="tutorial-section">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>1</span>
                                Create Project
                            </h3>
                            <p className="text-muted" style={{ margin: '1rem 0 2rem', paddingLeft: '42px' }}>
                                Firebase provides real-time databases and authentication out of the box.
                            </p>
                            <div style={{ paddingLeft: '42px' }}>
                                <a
                                    href="https://console.firebase.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ marginBottom: 'var(--space-lg)' }}
                                >
                                    Open Firebase Console →
                                </a>
                            </div>
                        </div>

                        <div className="tutorial-section" style={{ marginTop: '3rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '32px', height: '32px', background: 'var(--secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>2</span>
                                Configuration
                            </h3>
                            <ul className="tutorial-list" style={{ paddingLeft: '60px', marginTop: '1rem' }}>
                                <li>Click <strong>Current Project</strong> (in IDE Settings)</li>
                                <li>Select <strong>Project Settings</strong></li>
                                <li>Scroll to "Your apps"</li>
                                <li>Select <strong>Web app</strong> <code>&lt;/&gt;</code></li>
                                <li>Copy the `firebaseConfig` object</li>
                            </ul>
                        </div>

                        <div className="glass-panel-heavy" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                            <div className="info-box-title" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>💾 Where to put it?</div>
                            <p>
                                Paste the config into:
                            </p>
                            <div style={{ background: 'var(--bg-base)', padding: '0.5rem 1rem', borderRadius: '8px', fontFamily: 'var(--font-mono)', display: 'inline-block' }}>
                                src/firebase.js
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/cloudflare" className="btn btn-secondary">
                                ← Previous
                            </Link>
                            <Link to="/domain" className="btn btn-primary">
                                Next: Domain →
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default FirebasePage
