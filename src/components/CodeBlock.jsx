import { toast } from 'sonner'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

function CodeBlock({ title, code }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            toast.success('已復制到剪貼簿')
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            toast.error('復制失敗')
        }
    }

    return (
        <div className="code-block">
            <div className="code-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid var(--border-kasumi)',
                background: 'rgba(255, 255, 255, 0.02)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="code-dots" style={{ display: 'flex', gap: '6px' }}>
                        <span className="code-dot red" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
                        <span className="code-dot yellow" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                        <span className="code-dot green" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
                    </div>
                    <span className="code-title" style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-ishi)',
                        fontFamily: 'var(--font-mono)'
                    }}>{title}</span>
                </div>

                <button
                    onClick={handleCopy}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-ishi)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        transition: 'all 0.2s ease',
                        hover: {
                            color: 'var(--text-yuki)',
                            background: 'rgba(255,255,255,0.05)'
                        }
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-yuki)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-ishi)'
                        e.currentTarget.style.background = 'transparent'
                    }}
                >
                    {copied ? <Check size={14} className="text-asagi" /> : <Copy size={14} />}
                    {copied ? '已復制' : '復制'}
                </button>
            </div>
            <pre className="code-content" style={{
                padding: '1.2rem',
                margin: 0,
                fontSize: '0.9rem',
                lineHeight: '1.6',
                overflowX: 'auto'
            }}>
                {code.split('\n').map((line, i) => {
                    // Simple syntax highlighting
                    let highlighted = line

                    // Comments
                    if (line.trim().startsWith('#')) {
                        return <div key={i} className="comment" style={{ color: 'var(--text-ishi)', fontStyle: 'italic' }}>{line}</div>
                    }

                    // Keywords
                    highlighted = highlighted.replace(
                        /\b(npm|git|node|brew|curl|bash|mkdir|cd|cursor|wrangler)\b/g,
                        '<span class="keyword" style="color: var(--fuji)">$1</span>'
                    )

                    // Commands
                    highlighted = highlighted.replace(
                        /\b(install|init|add|commit|push|pull|clone|config|run|build|deploy|login|remote)\b/g,
                        '<span class="function" style="color: var(--asagi)">$1</span>'
                    )

                    // Strings in quotes
                    highlighted = highlighted.replace(
                        /"([^"]*)"/g,
                        '<span class="string" style="color: var(--sakura)">"$1"</span>'
                    )

                    // Flags
                    highlighted = highlighted.replace(
                        /(--?\w+)/g,
                        '<span class="number" style="color: var(--kincha)">$1</span>'
                    )

                    return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />
                })}
            </pre>
        </div>
    )
}

export default CodeBlock

