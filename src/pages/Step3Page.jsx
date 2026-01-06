import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function Step3Page() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第三步：部署上线</h1>
                    <p>让全世界都能访问你的网站！配置 Git 和 Cloudflare Pages。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    {/* Git 配置 */}
                    <div className="tutorial-section">
                        <h2>1. 初始化 Git 仓库</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Git 会追踪你代码的每一次变化，让你可以随时回到之前的版本。
                        </p>

                        <CodeBlock
                            title="配置 Git 用户信息（首次使用）"
                            code={`# 设置你的用户名（用你的名字替换）
git config --global user.name "Your Name"

# 设置你的邮箱（用你的 GitHub 邮箱）
git config --global user.email "your-email@example.com"`}
                        />

                        <CodeBlock
                            title="初始化 Git 仓库"
                            code={`# 在项目目录中执行
git init

# 添加所有文件到暂存区
git add .

# 创建第一个提交
git commit -m "Initial commit: 项目初始化"`}
                        />

                        <div className="info-box">
                            <div className="info-box-title">💡 什么是 commit？</div>
                            <p>
                                commit 就像存档点。每次你完成一个功能或修复一个 bug，
                                都应该创建一个 commit。这样如果后续出问题，你可以回到这个存档点。
                            </p>
                        </div>
                    </div>

                    {/* GitHub 仓库 */}
                    <div className="tutorial-section">
                        <h2>2. 创建 GitHub 仓库</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            把代码推送到 GitHub，这样你的代码就有了云端备份。
                        </p>

                        <ul className="tutorial-list">
                            <li>登录 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li>点击右上角的「+」→「New repository」</li>
                            <li>输入仓库名（和你的项目名一致）</li>
                            <li>选择 Public（公开）或 Private（私有）</li>
                            <li>点击「Create repository」</li>
                        </ul>

                        <CodeBlock
                            title="将本地代码推送到 GitHub"
                            code={`# 添加远程仓库（用你的仓库地址替换）
git remote add origin https://github.com/你的用户名/你的项目名.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main`}
                        />

                        <div className="info-box warning">
                            <div className="info-box-title">⚠️ 可能需要登录验证</div>
                            <p>
                                首次推送时，GitHub 会要求你验证身份。按照提示完成即可。
                                建议使用 Personal Access Token 或 SSH Key。
                            </p>
                        </div>
                    </div>

                    {/* Cloudflare Pages */}
                    <div className="tutorial-section">
                        <h2>3. 部署到 Cloudflare Pages</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Cloudflare Pages 提供免费的全球 CDN 加速，让你的网站访问速度飞快。
                        </p>

                        <h4>方法一：通过 CLI 部署（推荐）</h4>
                        <CodeBlock
                            title="使用 Wrangler CLI 部署"
                            code={`# 安装 Wrangler（Cloudflare 的 CLI 工具）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run build

# 部署到 Cloudflare Pages
wrangler pages deploy dist --project-name=你的项目名`}
                        />

                        <h4 style={{ marginTop: 'var(--space-xl)' }}>方法二：通过 Dashboard 连接 GitHub</h4>
                        <ul className="tutorial-list">
                            <li>访问 <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare Dashboard</a></li>
                            <li>进入「Workers & Pages」</li>
                            <li>点击「Create application」→「Pages」→「Connect to Git」</li>
                            <li>选择你的 GitHub 仓库</li>
                            <li>配置构建设置：
                                <ul style={{ marginTop: 'var(--space-sm)', marginLeft: 'var(--space-lg)' }}>
                                    <li>Build command: <code>npm run build</code></li>
                                    <li>Build output directory: <code>dist</code></li>
                                </ul>
                            </li>
                            <li>点击「Save and Deploy」</li>
                        </ul>
                    </div>

                    {/* 自定义域名 */}
                    <div className="tutorial-section">
                        <h2>4. 绑定自定义域名（可选）</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Cloudflare 会给你分配一个 <code>*.pages.dev</code> 域名。
                            如果你有自己的域名，也可以绑定。
                        </p>

                        <ul className="tutorial-list">
                            <li>在 Pages 项目设置中找到「Custom domains」</li>
                            <li>添加你的域名</li>
                            <li>按照提示配置 DNS 记录</li>
                            <li>等待 SSL 证书自动颁发</li>
                        </ul>
                    </div>

                    {/* 持续更新 */}
                    <div className="tutorial-section">
                        <h2>5. 后续更新流程</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            网站上线后，每次你想更新内容，只需要：
                        </p>

                        <CodeBlock
                            title="日常更新流程"
                            code={`# 1. 修改代码...

# 2. 提交更改
git add .
git commit -m "feat: 添加新功能xxx"

# 3. 推送到 GitHub
git push

# 4. 重新部署（如果用 CLI 方式）
npm run build && wrangler pages deploy dist --project-name=你的项目名

# 或者如果连接了 GitHub，push 后会自动部署`}
                        />

                        <div className="info-box success">
                            <div className="info-box-title">🎉 恭喜你！</div>
                            <p>
                                完成以上步骤后，你的网站就已经上线了！全世界的人都可以通过 URL 访问它。
                                继续迭代，让它变得更好吧！
                            </p>
                        </div>
                    </div>

                    {/* 导航 */}
                    <div className="step-nav">
                        <Link to="/step-2" className="step-nav-item">
                            <span className="step-nav-label">上一步</span>
                            <span className="step-nav-title">← 项目规划</span>
                        </Link>
                        <Link to="/" className="step-nav-item" style={{ textAlign: 'right' }}>
                            <span className="step-nav-label">返回</span>
                            <span className="step-nav-title">首页 →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step3Page
