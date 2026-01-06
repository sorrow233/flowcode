import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

function Step2Page() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>第二步：项目规划</h1>
                    <p>在动手之前，先想清楚你要做什么。好的规划是成功的一半。</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container">
                    {/* 确定愿景 */}
                    <div className="tutorial-section">
                        <h2>1. 问自己：我想做什么网站？</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            在开始编码之前，先花几分钟思考以下问题：
                        </p>

                        <div className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                            <h4>🎯 定义你的目标</h4>
                            <ul className="tutorial-list" style={{ marginTop: 'var(--space-md)' }}>
                                <li><strong>这个网站是给谁用的？</strong> — 自己、朋友、客户还是公众？</li>
                                <li><strong>网站的主要功能是什么？</strong> — 展示作品、博客、产品介绍？</li>
                                <li><strong>想要什么风格？</strong> — 简约、炫酷、专业还是可爱？</li>
                                <li><strong>有没有参考网站？</strong> — 把你喜欢的网站记下来</li>
                            </ul>
                        </div>

                        <div className="info-box">
                            <div className="info-box-title">💡 小贴士</div>
                            <p>
                                一开始不需要想得太完美。网站是可以不断迭代的，先做出一个最小可行版本，
                                然后根据反馈慢慢完善。
                            </p>
                        </div>
                    </div>

                    {/* 项目命名 */}
                    <div className="tutorial-section">
                        <h2>2. 给项目起个名字</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            一个好的项目名可以让你更有动力。命名时考虑这些原则：
                        </p>

                        <ul className="tutorial-list">
                            <li><strong>简短易记</strong> — 最好不超过 2-3 个单词</li>
                            <li><strong>使用小写字母和短横线</strong> — 例如 my-portfolio、blog-site</li>
                            <li><strong>避免特殊字符</strong> — 不要使用空格或中文</li>
                            <li><strong>检查可用性</strong> — 确保 GitHub 和域名没被占用</li>
                        </ul>

                        <CodeBlock
                            title="项目命名示例"
                            code={`# 好的命名
my-portfolio
travel-blog
awesome-shop

# 不推荐
My Portfolio        # 有空格
我的网站            # 中文
portfolio_site_v2   # 太长且有下划线`}
                        />
                    </div>

                    {/* 创建项目 */}
                    <div className="tutorial-section">
                        <h2>3. 让 AI 生成初始模板</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            现在到了激动人心的时刻！打开 Cursor，让 AI 帮你创建项目。
                        </p>

                        <h4>步骤 A：创建项目文件夹</h4>
                        <CodeBlock
                            title="在终端中执行"
                            code={`# 创建项目文件夹
mkdir my-website
cd my-website

# 用 Cursor 打开
cursor .`}
                        />

                        <h4 style={{ marginTop: 'var(--space-xl)' }}>步骤 B：向 AI 描述你的需求</h4>
                        <p>在 Cursor 中按下 <code>Cmd+K</code>（Mac）或 <code>Ctrl+K</code>（Windows）打开 AI 对话框，输入你的需求：</p>

                        <div className="card" style={{ marginTop: 'var(--space-lg)' }}>
                            <h4>📝 示例 Prompt</h4>
                            <div style={{ background: 'var(--color-bg)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', marginTop: 'var(--space-md)' }}>
                                <p style={{ color: 'var(--color-text-primary)', fontStyle: 'italic' }}>
                                    "帮我创建一个个人作品集网站，使用 Vite + React。
                                    我想要一个暗色主题，包含以下页面：首页（有简单的自我介绍）、
                                    作品展示页、联系我页面。风格参考苹果官网那种简洁高端的感觉。"
                                </p>
                            </div>
                        </div>

                        <div className="info-box success" style={{ marginTop: 'var(--space-xl)' }}>
                            <div className="info-box-title">🎉 AI 会帮你做什么？</div>
                            <ul className="tutorial-list" style={{ marginTop: 'var(--space-sm)' }}>
                                <li>创建项目结构和必要的配置文件</li>
                                <li>生成基础的页面组件</li>
                                <li>编写 CSS 样式</li>
                                <li>设置路由</li>
                            </ul>
                        </div>
                    </div>

                    {/* 运行预览 */}
                    <div className="tutorial-section">
                        <h2>4. 运行项目并预览</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            AI 生成代码后，让我们看看效果如何。
                        </p>

                        <CodeBlock
                            title="安装依赖并运行"
                            code={`# 安装项目依赖
npm install

# 启动开发服务器
npm run dev`}
                        />

                        <p style={{ marginTop: 'var(--space-lg)' }}>
                            浏览器会自动打开 <code>http://localhost:5173</code>，你就能看到你的网站了！
                        </p>

                        <div className="info-box warning">
                            <div className="info-box-title">⚠️ 遇到问题？</div>
                            <p>
                                如果出现错误，把错误信息复制给 AI，它会帮你解决。
                                这就是 AI 辅助开发的魅力 —— 你不需要记住所有东西，有问题就问。
                            </p>
                        </div>
                    </div>

                    {/* 迭代优化 */}
                    <div className="tutorial-section">
                        <h2>5. 持续迭代</h2>
                        <p style={{ marginBottom: 'var(--space-lg)' }}>
                            网站不会一次就完美，你可以不断地：
                        </p>

                        <ul className="tutorial-list">
                            <li><strong>调整样式</strong> — 改颜色、字体、间距</li>
                            <li><strong>添加内容</strong> — 加入你的作品、文章</li>
                            <li><strong>增加功能</strong> — 表单、动画、交互效果</li>
                            <li><strong>优化体验</strong> — 响应式设计、加载速度</li>
                        </ul>

                        <p style={{ marginTop: 'var(--space-lg)' }}>
                            每次想要修改，只需向 AI 描述你的需求，它就会帮你实现。
                            这个过程就像和一个经验丰富的程序员结对编程。
                        </p>
                    </div>

                    {/* 导航 */}
                    <div className="step-nav">
                        <Link to="/step-1" className="step-nav-item">
                            <span className="step-nav-label">上一步</span>
                            <span className="step-nav-title">← 环境准备</span>
                        </Link>
                        <Link to="/step-3" className="step-nav-item" style={{ textAlign: 'right' }}>
                            <span className="step-nav-label">下一步</span>
                            <span className="step-nav-title">部署上线 →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step2Page
