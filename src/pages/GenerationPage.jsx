import { Link } from 'react-router-dom'

function GenerationPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第三步：生成代码</h1>
                    <p>见证奇迹的时刻。让 AI 把你的想法变成现实。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="steps-grid" style={{ gridTemplateColumns: '1fr', gap: 'var(--space-lg)' }}>

                            <div className="step-card" style={{ padding: 'var(--space-lg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                                    <div className="step-number" style={{ position: 'static', fontSize: 'var(--text-3xl)', opacity: 1 }}>01</div>
                                    <h3>复制指令</h3>
                                </div>
                                <p>
                                    把第二步中，AI 完善后的<strong>「理解复述 + 想法建议」</strong>以及你最初的愿景，
                                    整理成一段完整的指令。
                                </p>
                            </div>

                            <div className="step-card" style={{ padding: 'var(--space-lg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                                    <div className="step-number" style={{ position: 'static', fontSize: 'var(--text-3xl)', opacity: 1 }}>02</div>
                                    <h3>发送给 Antigravity</h3>
                                </div>
                                <p>
                                    回到 IDE 的对话框中，粘贴这内容，按下回车发送。
                                </p>
                            </div>

                            <div className="step-card" style={{ padding: 'var(--space-lg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                                    <div className="step-number" style={{ position: 'static', fontSize: 'var(--text-3xl)', opacity: 1 }}>03</div>
                                    <h3>等待生成</h3>
                                </div>
                                <p>
                                    AI 会开始自动规划文件结构、编写代码。你只需要看着进度条滚动，
                                    等待直到出现 "Task Completed" 或类似的完成提示。
                                </p>
                            </div>

                        </div>

                        <div className="info-box" style={{ marginTop: 'var(--space-xl)' }}>
                            <div className="info-box-title">☕️ 喝杯咖啡</div>
                            <p>
                                根据项目复杂度，这可能需要几分钟。你可以利用这段时间去注册下一步需要的账号。
                            </p>
                        </div>

                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <Link to="/vision" className="btn btn-secondary" style={{ marginRight: 'var(--space-md)' }}>
                                ← 上一步
                            </Link>
                            <Link to="/cloudflare" className="btn btn-primary">
                                下一步：配置 Cloudflare →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenerationPage
