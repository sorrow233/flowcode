import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function DownloadPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>下载 Antigravity</h1>
                    <p>Google 官方出品 · 下一代 AI 编程工具</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient-primary)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '40px',
                                fontWeight: 'bold',
                                color: 'white',
                                margin: '0 auto var(--space-lg)'
                            }}>
                                A
                            </div>
                            <h2>Antigravity IDE</h2>
                            <p>The Agentic AI Coding Assistant</p>
                        </div>

                        <div className="info-box success" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div className="info-box-title">🌟 谷歌官方推荐</div>
                            <p>
                                这是由 Google Deepmind 团队专门为未来的 Agentic Coding 打造的 IDE。
                                它不仅仅是一个编辑器，更是你的 AI 编程助手。
                            </p>
                        </div>

                        <div style={{ display: 'grid', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                            <div className="tutorial-section">
                                <h3>为什么选择 Antigravity？</h3>
                                <ul className="tutorial-list">
                                    <li><strong>原生 AI 集成</strong> — 深度整合 Google 最先进的模型</li>
                                    <li><strong>Agentic Mode</strong> — 让 AI 主动帮你规划、执行和验证代码</li>
                                    <li><strong>无缝体验</strong> — 开箱即用，无需复杂的配置</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a
                                href="https://antigravity.google/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: '100%', maxWidth: '300px', marginBottom: 'var(--space-lg)' }}
                            >
                                前往官网下载
                            </a>
                            <div>
                                <Link to="/vision" className="btn btn-secondary">
                                    下一步：定义愿景 →
                                </Link>
                            </div>
                            <p style={{ marginTop: 'var(--space-md)', fontSize: 'var(--text-sm)' }}>
                                支持 macOS, Windows 和 Linux
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadPage
