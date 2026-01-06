import { Link } from 'react-router-dom'

function CloudflarePage() {
    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--kincha)'
                        }}>肆</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第四步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        全球部署
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        註冊 Cloudflare，將你的網站推向全球邊緣網路
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        {/* 步驟 1 */}
                        <div style={{ marginBottom: '2.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>1</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>創建帳號</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1.5rem',
                                paddingLeft: '2.5rem',
                                lineHeight: 1.8
                            }}>
                                Cloudflare 是全球領先的邊緣網路。我們將使用它免費託管你的網站，享受企業級速度。
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <a
                                    href="https://dash.cloudflare.com/sign-up"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                >
                                    前往 Cloudflare 註冊 →
                                </a>
                            </div>
                        </div>

                        {/* 步驟 2 */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>2</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>獲取 API Token</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                讓 AI 為你自動部署，需要生成一個 API Token：
                            </p>

                            <ul style={{
                                paddingLeft: '4rem',
                                color: 'var(--text-nezumi)',
                                lineHeight: 2
                            }}>
                                <li>登入 Cloudflare Dashboard</li>
                                <li>點擊右上角用戶圖標 → <strong style={{ color: 'var(--text-yuki)' }}>My Profile</strong></li>
                                <li>左側選擇 <strong style={{ color: 'var(--text-yuki)' }}>API Tokens</strong></li>
                                <li>點擊 <strong style={{ color: 'var(--text-yuki)' }}>Create Token</strong></li>
                                <li>使用模板：<strong style={{ color: 'var(--text-yuki)' }}>Edit Cloudflare Workers</strong></li>
                                <li>滾動到底部點擊 <strong style={{ color: 'var(--text-yuki)' }}>Create Token</strong></li>
                            </ul>
                        </div>

                        {/* 重要提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--shu)',
                            background: 'var(--shu-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--shu)' }}>
                                🔑 重要：保存你的 Token
                            </div>
                            <p style={{
                                marginBottom: '0.5rem',
                                color: 'var(--text-nezumi)'
                            }}>
                                Token 只會顯示 <strong style={{ color: 'var(--text-yuki)' }}>一次</strong>。
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-ishi)',
                                marginBottom: 0
                            }}>
                                請立即複製到安全的地方（備忘錄/密碼管理器）。<br />
                                下一步你將需要用到它。
                            </p>
                        </div>

                        {/* 步驟 3 */}
                        <div style={{ marginTop: '2.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--kincha)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>3</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>AI 部署指令</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                複製以下指令給 AI，讓它為你完成部署：
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <div style={{
                                    background: 'var(--bg-kuro)',
                                    padding: '1.25rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-kasumi)',
                                    color: 'var(--text-yuki)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    position: 'relative',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
                                }}>
                                    請在本地安裝 npm 依賴，完成構建後推送到 Cloudflare Pages，並返回可點擊的網站連結。
                                </div>
                            </div>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/generation" className="btn btn-secondary">
                                ← 生成
                            </Link>
                            <Link to="/firebase" className="btn btn-primary">
                                下一步：存儲 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CloudflarePage
