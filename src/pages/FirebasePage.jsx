import { Link } from 'react-router-dom'

function FirebasePage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第五步：数据存储 (可选)</h1>
                    <p>如果你需要用户登录或实时数据同步，请配置 Firebase。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>

                        <div className="info-box" style={{ marginBottom: 'var(--space-xl)', borderColor: 'var(--color-accent)' }}>
                            <div className="info-box-title">🤔 我需要这一步吗？</div>
                            <p style={{ marginBottom: 'var(--space-sm)' }}>
                                <strong>需要：</strong> 如果你想做聊天室、留言板、用户系统、实时协作工具。
                            </p>
                            <p>
                                <strong>不需要：</strong> 如果你只是做个人博客、作品集、公司展示官网等纯静态展示内容。
                                <br />
                                <span style={{ opacity: 0.7 }}>不需要的话，直接跳过即可。</span>
                            </p>
                        </div>

                        <div className="tutorial-section">
                            <h3>注册 Firebase</h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Firebase 是 Google 提供的后端服务平台，无需自己搭建服务器就能拥有数据库和用户系统。
                            </p>

                            <ul className="tutorial-list">
                                <li>访问 <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">firebase.google.com</a></li>
                                <li>点击 <strong>Get started</strong></li>
                                <li>登录你的 Google 账号</li>
                                <li>点击 <strong>Create a project (创建项目)</strong></li>
                                <li>输入项目名称，按照提示完成创建</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                            <Link to="/cloudflare" className="btn btn-secondary" style={{ marginRight: 'var(--space-md)' }}>
                                ← 上一步
                            </Link>
                            <Link to="/domain" className="btn btn-primary">
                                下一步：专属域名 →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirebasePage
