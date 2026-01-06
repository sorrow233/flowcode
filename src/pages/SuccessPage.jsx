import { Link } from 'react-router-dom'

function SuccessPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第七步：拥抱未来</h1>
                    <p>你已经是一位优秀的开发者了。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <div className="tutorial-section" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                            <div style={{ fontSize: '64px', marginBottom: 'var(--space-md)' }}>🎉</div>
                            <h2>一切准备就绪</h2>
                            <p style={{ fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
                                你已经完成了接下来开发所需要的一切配置。<br />
                                从现在开始，你只需要做两件事：
                            </p>
                        </div>

                        <div className="steps-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-2xl)' }}>
                            <div className="card" style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-accent)', textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>🗣️</div>
                                <h3>1. 告诉 AI</h3>
                                <p>用自然语言描述你的想法</p>
                            </div>
                            <div className="card" style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-success)', textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>🔄</div>
                                <h3>2. 刷新网页</h3>
                                <p>见证想法变为现实</p>
                            </div>
                        </div>

                        <div className="info-box success" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div className="info-box-title">🌟 站在巨人的肩膀上</div>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                不要怀疑自己的能力。你的背后是<strong>人类最强大的 AI 模型</strong>。
                                这些模型汇聚了全世界的智慧和财富，正在以惊人的速度快速迭代。
                            </p>
                            <p>
                                你不是一个人在写代码，你拥有一个全天候的世界级技术团队。
                                释放你的创造力，剩下的交给 AI。
                            </p>
                        </div>

                        <div className="info-box" style={{ marginBottom: 'var(--space-xl)', background: 'var(--color-bg)', borderStyle: 'dashed' }}>
                            <div className="info-box-title">ℹ️ 关于 FlowCode</div>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                本项目皆在教授用户如何利用 AI 进行编程创造，<strong>非 Google 官方教程</strong>。
                                作为开发者，我个人强烈推荐 Google 出品的 Antigravity IDE，因为它代表了目前 AI 辅助编程的最高水平。
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a
                                href="https://antigravity.google/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ padding: 'var(--space-lg) var(--space-2xl)', fontSize: 'var(--text-lg)' }}
                            >
                                开始你的创造之旅 🚀
                            </a>
                            <div style={{ marginTop: 'var(--space-lg)' }}>
                                <Link to="/domain" className="btn btn-secondary">
                                    ← 上一步
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessPage
