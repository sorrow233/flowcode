import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge fade-in">
                            <span className="hero-badge-dot"></span>
                            <span>零基础 · AI 辅助开发</span>
                        </div>

                        <h1 className="fade-in fade-in-delay-1">
                            用 AI 创造你的<br />
                            <span className="gradient-text">第一个网站</span>
                        </h1>

                        <p className="hero-description fade-in fade-in-delay-2">
                            FlowCode 是一套完整的零基础网站开发教程。从环境搭建到项目上线，
                            手把手教你如何借助 AI 的力量，快速构建并发布自己的网站。
                        </p>

                        <div className="hero-actions fade-in fade-in-delay-3">
                            <Link to="/step-1" className="btn btn-primary">
                                开始学习 →
                            </Link>
                            <a href="https://github.com/sorrow233/flowcode" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                查看源码
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Overview */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
                        三步上线你的网站
                    </h2>

                    <div className="steps-grid">
                        <Link to="/step-1" className="card step-card">
                            <span className="step-number">01</span>
                            <div className="card-icon">🛠️</div>
                            <h3>环境准备</h3>
                            <p>安装必要的开发工具，配置你的开发环境，为后续开发打下基础。</p>
                        </Link>

                        <Link to="/step-2" className="card step-card">
                            <span className="step-number">02</span>
                            <div className="card-icon">📝</div>
                            <h3>项目规划</h3>
                            <p>确定你的网站愿景，给项目命名，让 AI 帮你生成初始模板。</p>
                        </Link>

                        <Link to="/step-3" className="card step-card">
                            <span className="step-number">03</span>
                            <div className="card-icon">🚀</div>
                            <h3>部署上线</h3>
                            <p>配置 Git 版本控制，部署到 Cloudflare Pages，让全世界都能访问。</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section" style={{ background: 'var(--color-bg-elevated)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                        为什么选择 FlowCode？
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)', maxWidth: '600px', margin: '0 auto var(--space-3xl)' }}>
                        我们相信每个人都有能力创造自己的数字空间
                    </p>

                    <div className="feature-grid">
                        <div className="card">
                            <div className="card-icon">🤖</div>
                            <h3>AI 驱动开发</h3>
                            <p>利用 AI 工具自动生成代码，你只需要描述想法，AI 帮你实现。</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">📚</div>
                            <h3>循序渐进</h3>
                            <p>从最基础的概念开始，每一步都有详细说明，确保你能跟上。</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">⚡</div>
                            <h3>即时反馈</h3>
                            <p>实时预览你的修改，所见即所得，让开发过程更加直观。</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">🌐</div>
                            <h3>免费托管</h3>
                            <p>使用 Cloudflare Pages 免费托管，享受全球 CDN 加速。</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">🔒</div>
                            <h3>版本控制</h3>
                            <p>学会使用 Git 管理代码，永远不担心代码丢失或改错。</p>
                        </div>

                        <div className="card">
                            <div className="card-icon">🎨</div>
                            <h3>现代设计</h3>
                            <p>学习现代 Web 设计原则，让你的网站看起来专业又美观。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>准备好开始了吗？</h2>
                    <p style={{ marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
                        无需任何编程经验，跟着教程一步步来，你也能拥有自己的网站。
                    </p>
                    <Link to="/step-1" className="btn btn-primary">
                        立即开始 →
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HomePage
