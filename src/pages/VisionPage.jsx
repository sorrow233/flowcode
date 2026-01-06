import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

function VisionPage() {
    const [appType, setAppType] = useState('')
    const [goal, setGoal] = useState('')
    const [generatedPrompt, setGeneratedPrompt] = useState('')

    const handleGenerate = () => {
        if (!appType.trim() || !goal.trim()) {
            toast.error('請填寫完整資訊')
            return
        }
        const prompt = `我正在開發一些軟件，我給你一些我的想法，你理解我的想法之後，完整的把想法複述一下,然後給我完美的實現或者解決方案什麼的，你只需要給思路，不要寫代碼\n\n我想構建一個：${appType}。我希望這個軟件能解決：${goal}。`
        setGeneratedPrompt(prompt)
        toast.success('提示詞已生成！')
    }

    const handleCopy = () => {
        if (!generatedPrompt) return
        navigator.clipboard.writeText(generatedPrompt)
        toast.success('已複製到剪貼簿')
    }
    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--fuji)'
                        }}>弐</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第二步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        描繪願景
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        告訴 AI 你想要什麼。簡單即是終極的複雜。
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '750px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            fontWeight: 500
                        }}>自然語言描述</h2>
                        <p style={{
                            marginBottom: '2.5rem',
                            color: 'var(--text-nezumi)',
                            lineHeight: 1.8
                        }}>
                            打開 Antigravity IDE，在對話框中輸入你的想法。<br />
                            無需專業術語，只需回答這三個問題：
                        </p>

                        {/* 三要素 */}
                        <div className="feature-grid" style={{ marginBottom: '2.5rem' }}>
                            {[
                                { icon: '🎯', title: '目標', desc: '你想構建什麼？', color: 'var(--asagi)' },
                                { icon: '💡', title: '目的', desc: '為什麼需要它？', color: 'var(--fuji)' }
                            ].map(item => (
                                <div key={item.title} className="surface-card" style={{
                                    padding: '1.25rem',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                    <h4 style={{
                                        color: item.color,
                                        fontSize: '1rem',
                                        marginBottom: '0.25rem'
                                    }}>{item.title}</h4>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-ishi)',
                                        marginBottom: 0
                                    }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* 提示生成器 (Interactive Prompt Generator) */}
                        <div className="surface-card" style={{
                            padding: '2rem',
                            marginBottom: '2rem',
                            border: '1px solid var(--border-kin)',
                            background: 'linear-gradient(180deg, rgba(22, 22, 30, 0.4) 0%, rgba(22, 22, 30, 0.6) 100%)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Sparkles size={20} color="var(--asagi)" />
                                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>指令生成器</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {/* Input 1: Application Type */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        color: 'var(--text-nezumi)',
                                        fontSize: '0.9rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        1. 應用類型 <span style={{ opacity: 0.5 }}>(Application Type)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="例如：極簡待辦清單、番茄鐘、個人部落格"
                                        value={appType}
                                        onChange={(e) => setAppType(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            background: 'var(--bg-sumi)',
                                            border: '1px solid var(--border-kasumi)',
                                            color: 'var(--text-yuki)',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-gothic)',
                                            outline: 'none',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--asagi)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-kasumi)'}
                                    />
                                </div>

                                {/* Input 2: Goal */}
                                <div>
                                    <label style={{
                                        display: 'block',
                                        color: 'var(--text-nezumi)',
                                        fontSize: '0.9rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        2. 解決什麼問題 / 達成什麼目標 <span style={{ opacity: 0.5 }}>(Goal/Purpose)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="例如：提醒我買牛奶、記錄我的學習進度"
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            background: 'var(--bg-sumi)',
                                            border: '1px solid var(--border-kasumi)',
                                            color: 'var(--text-yuki)',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-gothic)',
                                            outline: 'none',
                                            transition: 'border-color 0.2s'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--asagi)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-kasumi)'}
                                    />
                                </div>

                                {/* Generate Button */}
                                <button
                                    onClick={handleGenerate}
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginTop: '0.5rem' }}
                                >
                                    生成指令塊
                                </button>
                            </div>

                            {/* Generated Result Area */}
                            {generatedPrompt && (
                                <div className="animate-enter" style={{
                                    marginTop: '2rem',
                                    paddingtop: '2rem',
                                    borderTop: '1px solid var(--border-kasumi)'
                                }}>
                                    <label style={{
                                        display: 'block',
                                        color: 'var(--asagi)',
                                        fontSize: '0.9rem',
                                        marginBottom: '0.8rem',
                                        fontWeight: 500
                                    }}>
                                        ✨ 已生成的指令 (Your Prompt)
                                    </label>
                                    <div style={{
                                        position: 'relative',
                                        background: 'var(--bg-shitan)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--asagi-soft)',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            padding: '1.25rem',
                                            paddingRight: '3.5rem',
                                            color: 'var(--text-yuki)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            whiteSpace: 'pre-wrap'
                                        }}>
                                            {generatedPrompt}
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            title="複製到剪貼簿"
                                            style={{
                                                position: 'absolute',
                                                top: '0.8rem',
                                                right: '0.8rem',
                                                background: 'var(--bg-sumi)',
                                                border: '1px solid var(--border-kasumi)',
                                                color: 'var(--text-nezumi)',
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--asagi)'
                                                e.currentTarget.style.borderColor = 'var(--asagi)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text-nezumi)'
                                                e.currentTarget.style.borderColor = 'var(--border-kasumi)'
                                            }}
                                        >
                                            <Copy size={16} />
                                        </button>
                                    </div>
                                    <div style={{
                                        marginTop: '1rem',
                                        textAlign: 'right'
                                    }}>
                                        <a
                                            href="https://gemini.google.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: 'var(--asagi)',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                padding: '0.5rem 1rem',
                                                background: 'var(--asagi-soft)',
                                                borderRadius: 'var(--radius-md)',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.filter = 'brightness(1.1)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.filter = 'brightness(1)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            前往 Gemini 問 AI ↗
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 對話示例 */}
                        <h3 style={{
                            marginBottom: '1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>對話示例</h3>

                        <div className="code-block" style={{
                            padding: '1.5rem',
                            marginBottom: '2rem'
                        }}>
                            {/* 用戶消息 */}
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-shitan)',
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-ishi)'
                                }}>你</div>
                                <div style={{
                                    background: 'var(--bg-shitan)',
                                    padding: '1rem',
                                    borderRadius: '0 12px 12px 12px',
                                    color: 'var(--text-yuki)',
                                    fontSize: '0.95rem'
                                }}>
                                    我想做一個極簡的待辦清單，用來提醒我買牛奶，風格像便利貼一樣。
                                </div>
                            </div>

                            {/* AI 回覆 */}
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'var(--grad-sunset)',
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>AI</div>
                                <div style={{
                                    background: 'var(--fuji-soft)',
                                    border: '1px solid var(--fuji-soft)',
                                    padding: '1rem',
                                    borderRadius: '0 12px 12px 12px',
                                    fontSize: '0.95rem'
                                }}>
                                    <p style={{ marginBottom: '0.75rem', color: 'var(--text-yuki)' }}>
                                        <strong>理解了：</strong><br />
                                        你想要一個 <strong>便利貼風格的極簡待辦清單</strong>。
                                    </p>
                                    <p style={{ color: 'var(--text-nezumi)', marginBottom: 0 }}>
                                        <strong>我的方案：</strong><br />
                                        很棒的想法！便利貼美學增添了有趣的觸感。建議使用黃色背景卡片搭配手寫字體，去除複雜分類以保持純粹。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* AI 指令 */}
                        <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    background: 'var(--fuji)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.85rem',
                                    color: 'white',
                                    fontWeight: 600
                                }}>✨</span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontWeight: 500
                                }}>AI 溝通指令</h3>
                            </div>
                            <p style={{
                                color: 'var(--text-ishi)',
                                marginBottom: '1rem',
                                paddingLeft: '2.5rem'
                            }}>
                                複製以下指令給 AI，讓它為你提供專業建議：
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
                                    請針對我的需求給出合理的建議，在你的回覆中，你應該針對這個需求給出一個合理的方案，這個方案不涉及任何技術點。如果你沒問題，我們將進行下一步。
                                </div>
                            </div>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/download" className="btn btn-secondary">
                                ← 下載 IDE
                            </Link>
                            <Link to="/generation" className="btn btn-primary">
                                下一步：生成 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionPage
