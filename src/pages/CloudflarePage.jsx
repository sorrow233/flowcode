import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function CloudflarePage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第四步：准备部署</h1>
                    <p>注册 Cloudflare 账号，为你的网站上线做准备。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <div className="tutorial-section">
                            <h3>1. 注册 Cloudflare</h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Cloudflare 是全球领先的云服务提供商，我们将使用它免费托管你的网站。
                            </p>
                            <a
                                href="https://dash.cloudflare.com/sign-up"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ marginBottom: 'var(--space-lg)' }}
                            >
                                前往 Cloudflare 注册
                            </a>
                        </div>

                        <div className="tutorial-section">
                            <h3>2. 获取 API 令牌 (API Token)</h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                为了让你本地的 AI 能够帮你部署网站，你需要一个 API 令牌。
                            </p>

                            <ul className="tutorial-list">
                                <li>登录 Cloudflare Dashboard</li>
                                <li>点击右上角的用户头像 → <strong>My Profile (我的个人资料)</strong></li>
                                <li>选择左侧的 <strong>API Tokens</strong></li>
                                <li>点击 <strong>Create Token (创建令牌)</strong></li>
                                <li>使用模板：选择 <strong>Edit Cloudflare Workers</strong> (这个模板包含 Pages 权限)</li>
                                <li>滚动到底部点击 <strong>Continue to summary</strong></li>
                                <li>点击 <strong>Create Token</strong></li>
                            </ul>

                            <div className="info-box warning" style={{ marginTop: 'var(--space-lg)' }}>
                                <div className="info-box-title">🔑 关键一步：保存令牌</div>
                                <p>
                                    令牌只会在创建时显示一次！<br />
                                    请立刻把它复制下来，保存在一个安全的地方（比如记事本或密码管理器）。<br />
                                    <strong>接下来的部署步骤必须用到它。</strong>
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <Link to="/generation" className="btn btn-secondary" style={{ marginRight: 'var(--space-md)' }}>
                                ← 上一步
                            </Link>
                            <Link to="/firebase" className="btn btn-primary">
                                下一步：配置数据存储 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CloudflarePage
