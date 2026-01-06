import { Link } from 'react-router-dom'

function DomainPage() {
    const providers = [
        {
            icon: '🏷️',
            name: 'Spaceship',
            tag: '超低價',
            desc: 'Namecheap 旗下新平台。介面極簡，價格極其透明，適合購買 .top, .xyz 等極速啟動域名。',
            featured: true,
            url: 'https://www.spaceship.com/'
        },
        {
            icon: '⚡',
            name: 'Namecheap',
            tag: '首年折扣',
            desc: '老牌服務商，首年優惠力度極大 ( .xyz ~$1, .top ~$2 )，非常適合低成本專案實驗。',
            featured: false,
            url: 'https://www.namecheap.com/'
        },
        {
            icon: '☁️',
            name: 'Cloudflare',
            tag: '安全穩定',
            desc: '以成本價售賣 (無任何加價)，長期持有成本最低。與 Pages 服務完美整合。',
            featured: false,
            url: 'https://www.cloudflare.com/products/registrar/'
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
                            color: 'var(--sakura)'
                        }}>陸</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>第六步</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        你的身份
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        自訂域名是你的數位資產
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem' }}>

                        <h3 style={{
                            fontSize: '1.2rem',
                            marginBottom: '0.5rem',
                            fontWeight: 500
                        }}>域名提供商</h3>
                        <p style={{
                            color: 'var(--text-ishi)',
                            marginBottom: '0.5rem'
                        }}>
                            我們推薦這些穩定且價格合理的提供商：
                        </p>
                        <p style={{
                            fontSize: '0.8rem',
                            color: 'var(--asagi)',
                            marginBottom: '1.5rem',
                            opacity: 0.8
                        }}>
                            * 均為官方直達連結，本專案無任何利益關係或佣金抽成。
                        </p>

                        {/* 提供商卡片 */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {providers.map(provider => (
                                <a
                                    key={provider.name}
                                    href={provider.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="surface-card"
                                    style={{
                                        padding: '1.25rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        border: provider.featured
                                            ? '1px solid var(--asagi-soft)'
                                            : '1px solid var(--border-kasumi)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--asagi)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = provider.featured ? 'var(--asagi-soft)' : 'var(--border-kasumi)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ fontSize: '1.75rem' }}>{provider.icon}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.25rem'
                                        }}>
                                            <h4 style={{
                                                color: 'var(--text-yuki)',
                                                fontSize: '1rem',
                                                margin: 0
                                            }}>{provider.name}</h4>
                                            {provider.tag && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    padding: '0.2rem 0.5rem',
                                                    background: 'var(--asagi-soft)',
                                                    color: 'var(--asagi)',
                                                    borderRadius: 'var(--radius-full)'
                                                }}>{provider.tag}</span>
                                            )}
                                        </div>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--text-ishi)',
                                            margin: 0
                                        }}>{provider.desc}</p>
                                    </div>
                                    <div style={{ color: 'var(--text-ishi)', fontSize: '0.8rem' }}>↗</div>
                                </a>
                            ))}
                        </div>

                        {/* 連結提示 */}
                        <div className="info-box" style={{
                            borderLeftColor: 'var(--asagi)',
                            background: 'var(--asagi-soft)'
                        }}>
                            <div className="info-box-title" style={{ color: 'var(--asagi)' }}>
                                🔗 如何連結？
                            </div>
                            <p style={{
                                color: 'var(--text-nezumi)',
                                marginBottom: 0
                            }}>
                                購買後，前往 Cloudflare Pages 專案設定 → <strong style={{ color: 'var(--text-yuki)' }}>Custom Domains</strong>。
                                <br />
                                Cloudflare 會自動處理 SSL 和 DNS。
                            </p>
                        </div>

                        {/* 導航按鈕 */}
                        <div style={{
                            marginTop: '2.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-kasumi)'
                        }}>
                            <Link to="/firebase" className="btn btn-secondary">
                                ← 存儲
                            </Link>
                            <Link to="/success" className="btn btn-primary">
                                完成 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DomainPage
