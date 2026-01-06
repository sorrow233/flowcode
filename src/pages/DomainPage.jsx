import { Link } from 'react-router-dom'

function DomainPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第六步：专属域名 (可选)</h1>
                    <p>让你的网站拥有一个独一无二的互联网身份证。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <div className="info-box success" style={{ marginBottom: 'var(--space-xl)' }}>
                            <div className="info-box-title">✅ 你已经上线了！</div>
                            <p>
                                通过之前的步骤，你已经获得了一个类似 <code>your-project.pages.dev</code> 的免费网址。
                                如果你只是自己测试或给朋友看，这已经足够了。
                            </p>
                        </div>

                        <div className="tutorial-section">
                            <h3>为什么要买域名？</h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                域名就像你在互联网上的门牌号。
                            </p>
                            <div className="feature-grid" style={{ marginBottom: 'var(--space-lg)' }}>
                                <div style={{ background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                                    <h4 style={{ color: 'var(--color-accent)' }}>专业性</h4>
                                    <p style={{ fontSize: 'var(--text-sm)' }}><code>my-brand.com</code> 比 <code>my-brand.pages.dev</code> 看起来更可信。</p>
                                </div>
                                <div style={{ background: 'var(--color-bg)', padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                                    <h4 style={{ color: 'var(--color-success)' }}>好记</h4>
                                    <p style={{ fontSize: 'var(--text-sm)' }}>短小精悍的域名更容易被用户记住和传播。</p>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial-section">
                            <h3>如何选择后缀 (TLD)？</h3>
                            <ul className="tutorial-list">
                                <li><strong>.com</strong> — 最经典，最贵，也是首选。适合商业或通用项目。</li>
                                <li><strong>.io</strong> / <strong>.ai</strong> — 科技公司和 AI 项目的最爱。</li>
                                <li><strong>.me</strong> — 非常适合个人博客或作品集。</li>
                                <li><strong>.top</strong> / <strong>.xyz</strong> — 通常很便宜，适合低成本起步。</li>
                            </ul>
                        </div>

                        <div className="tutorial-section">
                            <h3>去哪里购买？</h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                有很多域名注册商，价格和服务各不相同。
                            </p>

                            <div className="card" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', marginBottom: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <div style={{ fontSize: '24px' }}>☁️</div>
                                    <div>
                                        <h4 style={{ marginBottom: '2px' }}>Cloudflare (强烈推荐)</h4>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                            不赚差价 (成本价售卖)，而且你已经注册了账号，解析配置最方便。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <div style={{ fontSize: '24px' }}>🏷️</div>
                                    <div>
                                        <h4 style={{ marginBottom: '2px' }}>NameSilo / Namecheap</h4>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                            老牌注册商，经常有首年优惠活动，支持支付宝。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-box" style={{ marginTop: 'var(--space-xl)' }}>
                            <div className="info-box-title">🔗 购买后如何使用？</div>
                            <p>
                                购买域名后，回到 Cloudflare Pages 的项目设置中，找到 <strong>"Custom domains" (自定义域名)</strong>，
                                输入你的域名，Cloudflare 会自动帮你配置好一切。
                            </p>
                        </div>

                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <Link to="/firebase" className="btn btn-secondary" style={{ marginRight: 'var(--space-md)' }}>
                                ← 上一步
                            </Link>
                            <Link to="/success" className="btn btn-primary" style={{ background: 'var(--color-success)' }}>
                                下一步：完成 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DomainPage
