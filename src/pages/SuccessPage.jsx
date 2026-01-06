import { Link } from 'react-router-dom'

function SuccessPage() {
    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header" style={{ paddingBottom: '3rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="animate-enter" style={{
                        fontSize: '4rem',
                        marginBottom: '1.5rem'
                    }}>
                        🎉
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-shu calligraphy-title" style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                    }}>
                        準備起飛
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-nezumi)'
                    }}>
                        你現在是一名開發者了
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-1rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{
                        padding: '3rem',
                        textAlign: 'center'
                    }}>

                        <h2 style={{
                            fontSize: '1.6rem',
                            marginBottom: '1rem',
                            fontWeight: 500
                        }}>世界是你的畫布</h2>
                        <p style={{
                            fontSize: '1.05rem',
                            color: 'var(--text-nezumi)',
                            maxWidth: '500px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.8
                        }}>
                            你已擁有工具、願景和 AI。<br />
                            從此刻起，你只需做兩件事：
                        </p>

                        {/* 兩步驟卡片 */}
                        <div className="steps-grid" style={{
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.25rem',
                            marginBottom: '2.5rem'
                        }}>
                            <div className="surface-card animate-float" style={{
                                padding: '1.75rem',
                                borderColor: 'var(--fuji-soft)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '0.75rem'
                                }}>🗣️</div>
                                <h3 style={{
                                    color: 'var(--text-yuki)',
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem'
                                }}>1. 提問</h3>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    fontSize: '0.9rem',
                                    marginBottom: 0
                                }}>用日常語言描述你的想法</p>
                            </div>
                            <div className="surface-card animate-float delay-200" style={{
                                padding: '1.75rem',
                                borderColor: 'var(--asagi-soft)'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '0.75rem'
                                }}>🔄</div>
                                <h3 style={{
                                    color: 'var(--text-yuki)',
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem'
                                }}>2. 迭代</h3>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    fontSize: '0.9rem',
                                    marginBottom: 0
                                }}>反覆優化直至完美</p>
                            </div>
                        </div>

                        {/* 勵志區塊 */}
                        <div style={{
                            padding: '2rem',
                            background: 'var(--bg-washi)',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: 'var(--grad-sunset)'
                            }} />
                            <div style={{
                                fontSize: '1.3rem',
                                color: 'var(--fuji)',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-mincho)'
                            }}>
                                🌟 巨人與你同行
                            </div>
                            <p style={{
                                marginBottom: '0.75rem',
                                fontSize: '1.05rem',
                                color: 'var(--text-yuki)'
                            }}>
                                永遠不要懷疑自己。<br />
                                在你身後站著<strong>人類歷史上最強大的 AI 模型</strong>。
                            </p>
                            <p style={{
                                color: 'var(--text-nezumi)',
                                fontSize: '0.95rem',
                                marginBottom: 0
                            }}>
                                你不是一個人在編程。你有一支世界級工程團隊 24/7 待命。<br />
                                釋放創意，剩下的交給 AI。
                            </p>
                        </div>

                        {/* 免責聲明 */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px dashed var(--border-kasumi)',
                            background: 'rgba(0,0,0,0.2)',
                            marginBottom: '2.5rem'
                        }}>
                            <div style={{
                                color: 'var(--text-ishi)',
                                fontSize: '0.85rem'
                            }}>
                                ℹ️ 本專案是 AI 輔助編程的非官方指南。我們強烈推薦 Google 的 Antigravity IDE 作為當前技術的巔峰之作。
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="https://antigravity.google/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                padding: '1.1rem 3rem',
                                fontSize: '1.1rem',
                                marginBottom: '1.5rem'
                            }}
                        >
                            啟動任務 🚀
                        </a>
                        <br />
                        <Link to="/domain" style={{
                            color: 'var(--text-ishi)',
                            fontSize: '0.9rem'
                        }}>
                            ← 返回域名設定
                        </Link>
                    </div>
                </div>
            </section>

            {/* 結語 */}
            <section style={{
                padding: '4rem 0',
                textAlign: 'center'
            }}>
                <div style={{
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '2rem',
                    color: 'var(--text-ishi)',
                    opacity: 0.2
                }}>
                    流
                </div>
            </section>
        </>
    )
}

export default SuccessPage
