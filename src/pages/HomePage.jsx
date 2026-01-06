import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge fade-in">
                            <span className="hero-badge-dot"></span>
                            <span>Google Official IDE</span>
                        </div>

                        <h1 className="fade-in fade-in-delay-1">
                            Antigravity<br />
                            <span className="gradient-text">未来的开发体验</span>
                        </h1>

                        <p className="hero-description fade-in fade-in-delay-2">
                            Google Deepmind 团队打造的下一代 Agentic IDE。
                            让 AI 成为你的结对编程伙伴，重新定义代码编写方式。
                        </p>

                        <div className="hero-actions fade-in fade-in-delay-3">
                            <Link to="/download" className="btn btn-primary">
                                立即下载 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="card-icon" style={{ margin: '0 auto var(--space-lg)' }}>🚀</div>
                        <h2>开始你的第一步</h2>
                        <p style={{ margin: 'var(--space-md) 0 var(--space-xl)' }}>
                            工欲善其事，必先利其器。Antigravity 是 Google 官方推出的集成开发环境，
                            专为 AI 辅助编程设计。
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                            <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                访问官网下载
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
