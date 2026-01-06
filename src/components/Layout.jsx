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
                        <NavLink to="/step-1">环境准备</NavLink>
                        <NavLink to="/step-2">项目规划</NavLink>
                        <NavLink to="/step-3">部署上线</NavLink>
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
                        <a href="https://github.com/sorrow233/flowcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#">文档</a>
                        <a href="#">反馈</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
