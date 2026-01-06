import { Link } from 'react-router-dom'

function DownloadPage() {
    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--asagi)'
                        }}>壱</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第一步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        獲取工具
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        下載 Google Antigravity，開啟你的創作旅程
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{
                        padding: '3rem',
                        marginBottom: '2rem'
                    }}>

                        {/* 下載區域 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'var(--bg-washi)',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-mincho)',
                                fontSize: '1.5rem',
                                color: 'var(--text-yuki)',
                                marginBottom: '0.5rem'
                            }}>
                                Google Antigravity IDE
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                由 Google DeepMind 打造的 AI 原生開發環境
                            </p>
                            <a
                                href="https://antigravity.google/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
                            >
                                前往官方下載 →
                            </a>
                        </div>

                        {/* 提示區域 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--kincha)',
                            background: 'var(--kincha-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--kincha)' }}>
                                ⚠️ 重要提醒
                            </div>
                            <p style={{
                                marginBottom: '0.5rem',
                                color: 'var(--text-nezumi)'
                            }}>
                                我們使用的是 <strong style={{ color: 'var(--text-yuki)' }}>官方 Google Antigravity IDE</strong>。
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-ishi)',
                                marginBottom: 0
                            }}>
                                請務必從官方渠道下載，以確保安全性並獲取最新的 Gemini 2.0 模型支持。
                            </p>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            marginTop: '3rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/" className="btn btn-secondary">
                                ← 首頁
                            </Link>
                            <Link to="/vision" className="btn btn-primary">
                                下一步：願景 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadPage
