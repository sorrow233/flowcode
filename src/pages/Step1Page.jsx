import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function Step1Page() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第一步：环境准备</h1>
                    <p>在开始开发之前，我们需要准备好必要的工具。别担心，这比你想象的简单。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    {/* 安装 Node.js */}
                    <div className="tutorial-section">
                        <h2>1. 安装 Node.js</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Node.js 是运行 JavaScript 代码的环境，也是我们开发工具的基础。
                        </p>

                        <div className="info-box">
                            <div className="info-box-title">💡 什么是 Node.js？</div>
                            <p>
                                简单来说，Node.js 让你可以在电脑上运行 JavaScript 代码。
                                我们后续使用的很多开发工具都依赖它。
                            </p>
                        </div>

                        <ul className="tutorial-list">
                            <li>访问 <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
                            <li>下载 LTS（长期支持）版本</li>
                            <li>双击安装包，一路点击「下一步」完成安装</li>
                        </ul>

                        <p>安装完成后，打开终端（Terminal）验证：</p>

                        <CodeBlock
                            title="验证 Node.js 安装"
                            code={`node --version
# 应该显示类似 v20.x.x 的版本号

npm --version
# 应该显示类似 10.x.x 的版本号`}
                        />
                    </div>

                    {/* 安装代码编辑器 */}
                    <div className="tutorial-section">
                        <h2>2. 安装代码编辑器</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            我们推荐使用 Cursor —— 一个内置 AI 功能的编辑器，可以大大提高开发效率。
                        </p>

                        <ul className="tutorial-list">
                            <li>访问 <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a></li>
                            <li>下载并安装 Cursor</li>
                            <li>首次打开时，可以选择导入 VS Code 的设置（如果你之前用过的话）</li>
                        </ul>

                        <div className="info-box success">
                            <div className="info-box-title">✨ 为什么是 Cursor？</div>
                            <p>
                                Cursor 内置了强大的 AI 编程助手，你可以直接用自然语言描述你想要的功能，
                                AI 会帮你生成代码。这对于初学者来说非常友好。
                            </p>
                        </div>
                    </div>

                    {/* 安装 Git */}
                    <div className="tutorial-section">
                        <h2>3. 安装 Git</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Git 是版本控制工具，可以帮你追踪代码变化，还能让你的代码同步到云端。
                        </p>

                        <h4>macOS 用户</h4>
                        <CodeBlock
                            title="使用 Homebrew 安装 Git"
                            code={`# 首先安装 Homebrew（如果没有的话）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 然后安装 Git
brew install git`}
                        />

                        <h4>Windows 用户</h4>
                        <ul className="tutorial-list">
                            <li>访问 <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">git-scm.com</a></li>
                            <li>下载 Windows 版本的安装包</li>
                            <li>运行安装程序，保持默认选项即可</li>
                        </ul>

                        <p>验证安装：</p>
                        <CodeBlock
                            title="验证 Git 安装"
                            code={`git --version
# 应该显示类似 git version 2.x.x`}
                        />
                    </div>

                    {/* 注册 GitHub */}
                    <div className="tutorial-section">
                        <h2>4. 注册 GitHub 账号</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            GitHub 是全球最大的代码托管平台，你的代码将存储在这里。
                        </p>

                        <ul className="tutorial-list">
                            <li>访问 <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a></li>
                            <li>点击「Sign up」注册账号</li>
                            <li>验证邮箱地址</li>
                        </ul>
                    </div>

                    {/* 注册 Cloudflare */}
                    <div className="tutorial-section">
                        <h2>5. 注册 Cloudflare 账号</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            Cloudflare Pages 提供免费的网站托管服务，你的网站将部署在这里。
                        </p>

                        <ul className="tutorial-list">
                            <li>访问 <a href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noopener noreferrer">Cloudflare 注册页面</a></li>
                            <li>填写邮箱和密码创建账号</li>
                            <li>验证邮箱地址</li>
                        </ul>

                        <div className="info-box warning">
                            <div className="info-box-title">⚠️ 注意</div>
                            <p>
                                请记住你注册的用户名和密码，后续步骤会用到。
                                建议使用密码管理器来记录。
                            </p>
                        </div>
                    </div>

                    {/* 导航 */}
                    <div className="step-nav">
                        <div></div>
                        <Link to="/step-2" className="step-nav-item" style={{ textAlign: 'right' }}>
                            <span className="step-nav-label">下一步</span>
                            <span className="step-nav-title">项目规划 →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step1Page
