import { Link } from 'react-router-dom'

function GenerationPage() {
    const steps = [
        {
            num: '01',
            title: '整合指令',
            desc: '將你的原始願景與 AI 在第二步中的「理解確認 + 建議」合併成一個完整的指令塊。',
            color: 'var(--asagi)'
        },
        {
            num: '02',
            title: '發送至 Antigravity',
            desc: '將這個指令塊貼入 IDE 對話框，按下 Enter。',
            color: 'var(--fuji)'
        },
        {
            num: '03',
            title: '等待創造',
            desc: 'AI 會自動規劃文件結構並編寫程式碼。觀察進度條直到顯示「任務完成」。',
            color: 'var(--kincha)'
        }
    ]

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--fuji)'
                        }}>参</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第三步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        程式碼生成
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        見證魔法。讓 AI 將你的想法轉化為現實。
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        {/* 步驟列表 */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            marginBottom: '2.5rem'
                        }}>
                            {steps.map((step, i) => (
                                <div
                                    key={step.num}
                                    className="surface-card"
                                    style={{
                                        padding: '1.5rem',
                                        display: 'flex',
                                        gap: '1.25rem',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <div style={{
                                        fontFamily: 'var(--font-mincho)',
                                        fontSize: '1.8rem',
                                        fontWeight: 400,
                                        color: step.color,
                                        opacity: 0.6,
                                        lineHeight: 1
                                    }}>{step.num}</div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.15rem',
                                            marginBottom: '0.4rem',
                                            fontWeight: 500
                                        }}>{step.title}</h3>
                                        <p style={{
                                            color: 'var(--text-ishi)',
                                            fontSize: '0.9rem',
                                            marginBottom: 0,
                                            lineHeight: 1.7
                                        }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 提示卡片 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '1.5rem',
                            background: 'var(--bg-washi)',
                            borderRadius: 'var(--radius-lg)'
                        }}>
                            <div style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.5rem'
                            }}>☕️</div>
                            <h4 style={{
                                color: 'var(--text-yuki)',
                                marginBottom: '0.5rem',
                                fontWeight: 500
                            }}>泡杯咖啡</h4>
                            <p style={{
                                color: 'var(--text-ishi)',
                                fontSize: '0.9rem',
                                marginBottom: 0
                            }}>
                                根據複雜度，這可能需要幾分鐘。<br />
                                你可以利用這段時間註冊下一步所需的帳號。
                            </p>
                        </div>

                        {/* AI 指令 */}
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
                                    background: 'var(--asagi)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'var(--bg-sumi)',
                                    fontWeight: 600
                                }}>✨</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>AI 生成指令</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                複製以下指令給 AI，開始你的魔法之旅：
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
                                    請幫我將我想法中的願景與你之前的建議合併，開始編寫程式碼。請確保使用最新的 React 和 CSS 技術棧。
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
                            <Link to="/vision" className="btn btn-secondary">
                                ← 願景
                            </Link>
                            <Link to="/cloudflare" className="btn btn-primary">
                                下一步：部署 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GenerationPage
