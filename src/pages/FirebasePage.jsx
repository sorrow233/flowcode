import { Link } from 'react-router-dom'

function FirebasePage() {
    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--shu)'
                        }}>伍</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第五步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        無限存儲
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        連接 Google Firebase，實現規模化數據存儲
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
                                    background: 'var(--shu)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>1</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>創建專案</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1.5rem',
                                paddingLeft: '2.5rem',
                                lineHeight: 1.8
                            }}>
                                Firebase 提供即用型實時數據庫和身份驗證服務。
                            </p>
                            <div style={{ paddingLeft: '2.5rem' }}>
                                <a
                                    href="https://console.firebase.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-ghost"
                                    style={{
                                        borderColor: 'var(--shu)',
                                        color: 'var(--shu)',
                                        boxShadow: '0 0 15px var(--shu-soft)'
                                    }}
                                >
                                    打開 Firebase 控制台 →
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
                                    background: 'var(--shu)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>2</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>配置設定</h3>
                            </div>

                            <ul style={{
                                paddingLeft: '4rem',
                                color: 'var(--text-nezumi)',
                                lineHeight: 2
                            }}>
                                <li>點擊 <strong style={{ color: 'var(--text-yuki)' }}>當前專案</strong>（在 IDE 設定中）</li>
                                <li>選擇 <strong style={{ color: 'var(--text-yuki)' }}>Project Settings</strong></li>
                                <li>滾動到 「Your apps」</li>
                                <li>選擇 <strong style={{ color: 'var(--text-yuki)' }}>Web app</strong> <code style={{ color: 'var(--asagi)' }}>&lt;/&gt;</code></li>
                                <li>複製 <code style={{ color: 'var(--asagi)' }}>firebaseConfig</code> 對象</li>
                            </ul>
                        </div>

                        {/* 配置提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--fuji)',
                            background: 'var(--fuji-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--fuji)' }}>
                                💾 配置放在哪裡？
                            </div>
                            <p style={{
                                marginBottom: '0.75rem',
                                color: 'var(--text-nezumi)'
                            }}>
                                將配置貼入：
                            </p>
                            <div style={{
                                background: 'var(--bg-yoru)',
                                padding: '0.6rem 1rem',
                                borderRadius: '6px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                color: 'var(--asagi)',
                                display: 'inline-block'
                            }}>
                                src/firebase.js
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
                            <Link to="/cloudflare" className="btn btn-secondary">
                                ← 部署
                            </Link>
                            <Link to="/domain" className="btn btn-primary">
                                下一步：域名 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirebasePage
