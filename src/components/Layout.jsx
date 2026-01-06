import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
    return (
        <div className="app">
            <header className="header">
                <div className="container header-inner">
                    <NavLink to="/" className="logo">
                        <span className="logo-icon">F</span>
                        <span>FlowCode</span>
                    </NavLink>
                    <nav className="nav">
                        <NavLink to="/" end>首页</NavLink>
                        <NavLink to="/download">1. 下载</NavLink>
                        <NavLink to="/vision">2. 愿景</NavLink>
                        <NavLink to="/generation">3. 生成</NavLink>
                        <NavLink to="/cloudflare">4. 部署</NavLink>
                        <NavLink to="/firebase">5. 存储</NavLink>
                        <NavLink to="/domain">6. 域名</NavLink>
                        <NavLink to="/success">7. 完成</NavLink>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="logo">
                        <span className="logo-icon">F</span>
                        <span>FlowCode</span>
                    </div>
                    <div className="footer-links">
                        <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer">Antigravity 官网</a>
                        <a href="https://github.com/sorrow233/flowcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginLeft: 'var(--space-md)' }}>
                            (非官方教程 Unofficial Guide)
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
