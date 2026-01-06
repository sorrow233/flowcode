import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge fade-in">
                            <span className="hero-badge-dot"></span>
                            <span>Project FlowCode</span>
                        </div>

                        <h1 className="fade-in fade-in-delay-1">
                            AI 时代的<br />
                            <span className="gradient-text">第一堂编程课</span>
                        </h1>

                        <p className="hero-description fade-in fade-in-delay-2">
                            你不需要懂代码。FlowCode 将手把手教你如何指挥 AI，
                            把脑海中的想法变成能够在互联网上访问的真实网站。
                        </p>

                        <div className="hero-actions fade-in fade-in-delay-3">
                            <Link to="/download" className="btn btn-primary">
                                开始旅程 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Intro */}
            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: 'var(--space-2xl) var(--space-xl)' }}>
                        <h2>编程不再是极客的特权</h2>
                        <p style={{ margin: 'var(--space-lg) auto', maxWidth: '700px', fontSize: 'var(--text-lg)' }}>
                            在过去，你需要学习几年的 C++、Java 或 JavaScript 才能构建一个像样的应用。<br />
                            现在，有了人类最强大的 AI 模型，你只需要学会<strong>如何清晰地表达想法</strong>。
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            FlowCode 不是一个工具，而是一套方法论。我们教你如何使用 Google 最新的 Antigravity IDE，
                            配合 Cloudflare 等现代基础设施，在 30 分钟内上线你的第一个产品。
                        </p>
                    </div>
                </div>
            </section>

            {/* Preview Steps */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--space-3xl)' }}>七步成诗</h2>

                    <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <Link to="/download" className="card step-card" style={{ textDecoration: 'none' }}>
                            <span className="step-number">01</span>
                            <h3>工具</h3>
                            <p>获取 Google 官方 AI 开发环境</p>
                        </Link>

                        <Link to="/vision" className="card step-card" style={{ textDecoration: 'none' }}>
                            <span className="step-number">02</span>
                            <h3>愿景</h3>
                            <p>学会用 Prompt 定义产品灵魂</p>
                        </Link>

                        <Link to="/generation" className="card step-card" style={{ textDecoration: 'none' }}>
                            <span className="step-number">03</span>
                            <h3>创造</h3>
                            <p>见证 AI 将文字转化为代码</p>
                        </Link>
                    </div>

                    <div style={{ marginTop: 'var(--space-2xl)' }}>
                        <Link to="/download" className="btn btn-secondary">
                            查看完整路线图
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
