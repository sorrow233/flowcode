import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// --- 和紙卡片組件 ---
const WashiCard = ({ children, to, className = '', style = {} }) => {
    const ref = useRef(null)

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -3
        const rotateY = ((x - centerX) / centerX) * 3

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    const Component = to ? Link : 'div'

    return (
        <Component
            to={to}
            ref={ref}
            className={`washi-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'block',
                transition: 'transform 0.15s ease-out, box-shadow 0.4s ease',
                textDecoration: 'none',
                ...style
            }}
        >
            {children}
        </Component>
    )
}

function HomePage() {
    const { t } = useTranslation()
    return (
        <div style={{ overflowX: 'hidden' }}>

            {/* === 英雄區域 === */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                padding: '2rem 0 4rem',
                marginTop: '-60px'
            }}>
                {/* 墨暈背景 */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80vw',
                    maxWidth: '800px',
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, var(--shu-glow) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    opacity: 0.4,
                    zIndex: -1
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>

                    {/* 狀態標籤 */}
                    <div className="animate-enter" style={{ marginBottom: '2rem' }}>
                        <span className="scroll-title" style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-nezumi)',
                            letterSpacing: '0.15em'
                        }}>
                            {t('hero.system_online')}
                        </span>
                    </div>

                    {/* 主標題 - 書法風格 */}
                    <h1 className="animate-enter delay-100 calligraphy-title" style={{
                        fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: '0.1em',
                        marginBottom: '0.5rem'
                    }}>
                        <span style={{
                            display: 'block',
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                            fontFamily: 'var(--font-mincho)'
                        }}>
                            {t('hero.title_flow')}
                        </span>
                        <span className="text-gradient-shu" style={{
                            display: 'block',
                            fontWeight: 500,
                            fontFamily: 'var(--font-gothic)'
                        }}>
                            {t('hero.title_code')}
                        </span>
                    </h1>

                    {/* 副標題 */}
                    <p className="animate-enter delay-200" style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '2rem auto 3rem',
                        lineHeight: 1.8,
                        fontFamily: 'var(--font-gothic)'
                    }}>
                        {t('hero.subtitle')}
                        <br />
                        <span style={{ color: 'var(--text-ishi)', fontSize: '0.9em' }}>
                            {t('hero.subtitle_sub')}
                        </span>
                    </p>

                    {/* CTA 按鈕 */}
                    <div className="animate-enter delay-300" style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Link to="/download" className="btn btn-primary" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1rem'
                        }}>
                            {t('hero.cta_start')}
                        </Link>
                        <a
                            href="https://github.com/sorrow233/flowcode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ padding: '1rem 2rem' }}
                        >
                            {t('hero.cta_github')}
                        </a>
                    </div>
                </div>

                {/* 裝飾元素 */}
                <div style={{
                    position: 'absolute',
                    bottom: '8%',
                    right: '8%',
                    textAlign: 'right',
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '0.8rem',
                    color: 'var(--text-ishi)',
                    opacity: 0.4
                }}>
                    <div>版本 2.4.0</div>
                    <div>穩定運行中</div>
                </div>

                {/* 左側裝飾 */}
                <div style={{
                    position: 'absolute',
                    bottom: '8%',
                    left: '8%',
                    fontFamily: 'var(--font-mincho)',
                    fontSize: '2rem',
                    color: 'var(--text-ishi)',
                    opacity: 0.15,
                    writingMode: 'vertical-rl'
                }}>
                    流動的程式碼
                </div>
            </section>


            {/* === 功能模塊區域 === */}
            <section style={{ padding: '4rem 0 8rem' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* 區域標題 */}
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}>
                        <h2 className="animate-enter" style={{
                            fontSize: '1.8rem',
                            fontWeight: 400,
                            color: 'var(--text-yuki)',
                            marginBottom: '0.5rem'
                        }}>
                            七步成詩
                        </h2>
                        <p style={{ color: 'var(--text-ishi)', fontSize: '0.95rem' }}>
                            從想法到上線，只需七個簡單步驟
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '1.25rem'
                    }}>
                        {/* CSS for responsive grid */}
                        <style>{`
                            .grid-card { grid-column: span 12; }
                            @media (min-width: 768px) {
                                .grid-span-8 { grid-column: span 8 !important; }
                                .grid-span-6 { grid-column: span 6 !important; }
                                .grid-span-4 { grid-column: span 4 !important; }
                            }
                        `}</style>

                        {/* 大型特色卡片 */}
                        <WashiCard
                            className="grid-card grid-span-8"
                            style={{
                                padding: '2.5rem',
                                minHeight: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}
                        >
                            {/* 背景裝飾 */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '200px',
                                height: '200px',
                                background: 'radial-gradient(circle, var(--fuji-glow) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                opacity: 0.5
                            }} />

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h3 className="text-gradient-shu" style={{
                                    fontSize: '2rem',
                                    marginBottom: '1rem',
                                    fontWeight: 500
                                }}>
                                    視覺智能
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    maxWidth: '400px',
                                    color: 'var(--text-nezumi)',
                                    marginBottom: 0
                                }}>
                                    停止編寫樣板代碼。FlowCode 理解您的意圖，即時構建架構。
                                </p>
                            </div>
                        </WashiCard>

                        {/* 側邊卡片 */}
                        <WashiCard
                            className="grid-card grid-span-4"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                                filter: 'grayscale(0.3)'
                            }}>🧠</div>
                            <h4 style={{
                                color: 'var(--text-yuki)',
                                fontSize: '1.2rem',
                                marginBottom: '0.5rem'
                            }}>
                                認知負荷：零
                            </h4>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-ishi)',
                                marginBottom: 0
                            }}>
                                忘記語法錯誤。IDE 處理語法，您專注於邏輯。
                            </p>
                        </WashiCard>

                        {/* 模塊卡片行 */}
                        {[
                            { to: '/vision', num: '弐', title: '願景', desc: '描繪夢想藍圖', icon: '👁️', color: 'var(--asagi)' },
                            { to: '/generation', num: '参', title: '生成', desc: '即時程式碼合成', icon: '⚡', color: 'var(--fuji)' },
                            { to: '/cloudflare', num: '肆', title: '部署', desc: '全球邊緣網路', icon: '☁️', color: 'var(--kincha)' },
                            { to: '/firebase', num: '伍', title: '存儲', desc: '無伺服器後端', icon: '🔥', color: 'var(--shu)' }
                        ].map((card, i) => (
                            <WashiCard
                                key={card.to}
                                to={card.to}
                                className="grid-card grid-span-6"
                                style={{
                                    padding: '1.75rem',
                                    minHeight: '160px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        filter: 'grayscale(0.2)'
                                    }}>{card.icon}</span>
                                    <span style={{
                                        fontFamily: 'var(--font-mincho)',
                                        fontSize: '0.8rem',
                                        color: card.color,
                                        opacity: 0.8
                                    }}>{card.num}</span>
                                </div>
                                <div>
                                    <h4 style={{
                                        fontSize: '1.3rem',
                                        color: 'var(--text-yuki)',
                                        marginBottom: '0.25rem'
                                    }}>{card.title}</h4>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-ishi)',
                                        marginBottom: 0
                                    }}>{card.desc}</p>
                                </div>
                            </WashiCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* === 精神區域 === */}
            <section style={{
                padding: '6rem 0',
                borderTop: '1px solid var(--border-kasumi)'
            }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <div style={{
                        fontFamily: 'var(--font-mincho)',
                        fontSize: '3rem',
                        color: 'var(--text-ishi)',
                        opacity: 0.3,
                        marginBottom: '2rem'
                    }}>
                        流
                    </div>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-nezumi)',
                        lineHeight: 2,
                        fontFamily: 'var(--font-gothic)'
                    }}>
                        「不執著於語法，專注於創意。<br />
                        讓 AI 成為你的執行者，你只需做決策者。」
                    </p>
                    <div style={{
                        marginTop: '2rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-ishi)'
                    }}>
                        — FlowCode 開發理念
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
