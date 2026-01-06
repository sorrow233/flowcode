import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="home-container" style={{ overflowX: 'hidden' }}>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-content" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>

                        {/* Badge */}
                        <div className="animate-enter fade-in-delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '100px', marginBottom: '2rem' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 10px #6366f1' }}></span>
                            <span style={{ color: '#a5b4fc', fontSize: '0.9rem', fontWeight: 500 }}>AI Native Development</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="animate-enter fade-in-delay-1" style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.03em'
                        }}>
                            <span className="text-gradient">FlowCode</span> <br />
                            <span style={{ color: 'white' }}>Build the Future.</span>
                        </h1>

                        <p className="animate-enter fade-in-delay-2" style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            From idea to deployment in 30 minutes. <br />
                            Master the art of AI-assisted engineering with Google Antigravity.
                        </p>

                        <div className="animate-enter fade-in-delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Start Journey
                            </Link>
                            <a href="https://github.com/sorrow233/flowcode" target="_blank" className="btn btn-glow" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="bg-mesh" style={{ opacity: 0.5 }}></div>
            </section>

            {/* Bento Grid Section */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: '2.5rem', textAlign: 'center' }}>The New Workflow</h2>

                    <div className="bento-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* Large Card */}
                        <div className="glass-panel card animate-float" style={{ gridColumn: 'span 2', padding: '3rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>01. Visual First</h3>
                            <p style={{ fontSize: '1.2rem' }}>Stop wrestling with syntax. Start painting with logic. FlowCode teaches you to think in components, flows, and systems.</p>
                        </div>

                        {/* Regular Cards */}
                        <Link to="/vision" className="glass-panel card" style={{ padding: '2rem', textDecoration: 'none', transition: 'transform 0.3s' }}>
                            <div className="card-icon" style={{ marginBottom: '1.5rem' }}>🎯</div>
                            <h3 style={{ color: 'white' }}>Vision</h3>
                            <p>Define the soul of your product with precision prompts.</p>
                        </Link>

                        <Link to="/generation" className="glass-panel card" style={{ padding: '2rem', textDecoration: 'none', transition: 'transform 0.3s' }}>
                            <div className="card-icon" style={{ marginBottom: '1.5rem' }}>⚡</div>
                            <h3 style={{ color: 'white' }}>Generation</h3>
                            <p>Witness the power of code generation in real-time.</p>
                        </Link>

                        <Link to="/cloudflare" className="glass-panel card" style={{ padding: '2rem', textDecoration: 'none', transition: 'transform 0.3s' }}>
                            <div className="card-icon" style={{ marginBottom: '1.5rem' }}>🌐</div>
                            <h3 style={{ color: 'white' }}>Deploy</h3>
                            <p>Global edge deployment with Cloudflare Pages.</p>
                        </Link>

                        <Link to="/firebase" className="glass-panel card" style={{ padding: '2rem', textDecoration: 'none', transition: 'transform 0.3s' }}>
                            <div className="card-icon" style={{ marginBottom: '1.5rem' }}>🔥</div>
                            <h3 style={{ color: 'white' }}>Backend</h3>
                            <p>Serverless power with Firebase integration.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to break the barrier?</h2>
                    <Link to="/download" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
                        Get Started Now
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage
