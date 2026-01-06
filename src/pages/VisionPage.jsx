import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function VisionPage() {
    return (
        <>
            <section className="page-header">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--secondary)' }}>Step 02</span>
                    </div>
                    <h1 className="text-gradient-cyber" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Define Your Vision</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Tell AI what you want. Simplicity is the ultimate sophistication.</p>
                </div>
            </section>

            <section className="page-content" style={{ marginTop: '-4rem' }}>
                <div className="container">
                    <div className="glass-panel card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
                        <h2>Natural Language Description</h2>
                        <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Open Antigravity IDE and type your thoughts into the chat.
                            No jargon needed. Just answer these three:
                        </p>

                        <div className="feature-grid" style={{ marginBottom: '3rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <div className="surface-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>🎯 Goal</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>What do you want to build?</p>
                            </div>
                            <div className="surface-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>💡 Purpose</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Why do you need it?</p>
                            </div>
                            <div className="surface-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                                <h4 style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>📏 Constraint</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Keep it under 30 words.</p>
                            </div>
                        </div>

                        <div className="glass-panel-heavy" style={{ marginBottom: '3rem', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--secondary)' }}>
                            <div className="info-box-title" style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>📝 Prompt Template</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', lineHeight: 1.6 }}>
                                "I want to build a [Type of App] to [solve what problem/achieve what goal]. (Keep it simple)"
                            </div>
                        </div>

                        <h3>Interaction Example</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>This is how Antigravity AI responds to your vision:</p>

                        <div className="code-block" style={{ padding: '2rem', background: 'var(--bg-base)', borderRadius: '16px', border: '1px solid var(--border-dim)' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-elevated)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>YOU</div>
                                <div>
                                    <div style={{ background: 'var(--bg-elevated)', padding: '1rem', borderRadius: '0 16px 16px 16px', color: 'var(--text-primary)' }}>
                                        I want to make a minimalist Todo list to remind me to buy milk, styled like sticky notes.
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-primary)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>AI</div>
                                <div>
                                    <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '1rem', borderRadius: '0 16px 16px 16px' }}>
                                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                            <strong>Understood:</strong><br />
                                            You want a <strong>Sticky Note style Minimalist Todo List</strong>.
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            <strong>My Plan:</strong><br />
                                            Great idea! The sticky note aesthetic adds a fun, tactile feel. I suggest using a yellow background for cards with a handwritten font, removing complex categorization to keep it pure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
                            <Link to="/download" className="btn btn-secondary">
                                ← Download IDE
                            </Link>
                            <Link to="/generation" className="btn btn-primary">
                                Next: Generation →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionPage
