import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function VisionPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第二步：定义愿景</h1>
                    <p>告诉 AI 你想做什么，越简单越好。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>用自然语言描述</h2>
                        <p style={{ marginBottom: 'var(--space-xl)' }}>
                            打开 Antigravity IDE，在对话框中输入你的想法。
                            不需要专业的术语，只需要告诉它：
                        </p>

                        <div className="feature-grid" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div style={{ background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                                <h4 style={{ color: 'var(--color-accent)' }}>🎯 目标</h4>
                                <p>你想开发什么？</p>
                            </div>
                            <div style={{ background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                                <h4 style={{ color: 'var(--color-success)' }}>💡 目的</h4>
                                <p>为什么要做这个？</p>
                            </div>
                            <div style={{ background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                                <h4 style={{ color: 'var(--color-warning)' }}>📏 限制</h4>
                                <p>30 字以内</p>
                            </div>
                        </div>

                        <div className="info-box success" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div className="info-box-title">📝 Prompt 模板</div>
                            <p style={{ marginBottom: 'var(--space-sm)' }}>你可以这样对 AI 说：</p>
                            <div style={{ fontStyle: 'italic', opacity: 0.9 }}>
                                "我想做一个[什么样的软件]，目的是[为了解决什么问题/达到什么效果]。(30字以内)"
                            </div>
                        </div>

                        <h3>交互示例</h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>当你输入愿景后，Antigravity AI 会这样回应你：</p>

                        <div className="code-block" style={{ padding: 'var(--space-lg)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                模拟对话
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-text-secondary)', flexShrink: 0 }}></div>
                                <div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: '4px' }}>你</div>
                                    <div style={{ background: 'var(--color-bg-elevated)', padding: 'var(--space-sm) var(--space-md)', borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)' }}>
                                        我想做一个极简的待办清单，为了让自己不再忘记买牛奶，风格要像便利贴一样。
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gradient-primary)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>A</div>
                                <div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Antigravity AI</div>
                                    <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--color-accent-glow)', padding: 'var(--space-sm) var(--space-md)', borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)' }}>
                                        <p style={{ marginBottom: 'var(--space-sm)' }}>
                                            <strong>理解复述：</strong><br />
                                            你想创建一个<strong>模拟便利贴风格的极简待办清单（Todo List）</strong>，核心场景是生活备忘（如购物提醒）。
                                        </p>
                                        <p>
                                            <strong>我的想法：</strong><br />
                                            这非常有趣！便利贴风格可以带来轻松的使用体验。建议我们使用黄色背景卡片，配合手写体字体，去掉复杂的分类和标签，回归最纯粹的记录功能。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <Link to="/download" className="btn btn-secondary" style={{ marginRight: 'var(--space-md)' }}>
                                ← 上一步：下载 IDE
                            </Link>
                            <Link to="/generation" className="btn btn-primary">
                                下一步：生成代码 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionPage
