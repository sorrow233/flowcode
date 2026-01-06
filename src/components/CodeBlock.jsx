function CodeBlock({ title, code }) {
    return (
        <div className="code-block">
            <div className="code-header">
                <div className="code-dots">
                    <span className="code-dot red"></span>
                    <span className="code-dot yellow"></span>
                    <span className="code-dot green"></span>
                </div>
                <span className="code-title">{title}</span>
            </div>
            <pre className="code-content">
                {code.split('\n').map((line, i) => {
                    // Simple syntax highlighting
                    let highlighted = line

                    // Comments
                    if (line.trim().startsWith('#')) {
                        return <div key={i} className="comment">{line}</div>
                    }

                    // Keywords
                    highlighted = highlighted.replace(
                        /\b(npm|git|node|brew|curl|bash|mkdir|cd|cursor|wrangler)\b/g,
                        '<span class="keyword">$1</span>'
                    )

                    // Commands
                    highlighted = highlighted.replace(
                        /\b(install|init|add|commit|push|pull|clone|config|run|build|deploy|login|remote)\b/g,
                        '<span class="function">$1</span>'
                    )

                    // Strings in quotes
                    highlighted = highlighted.replace(
                        /"([^"]*)"/g,
                        '<span class="string">"$1"</span>'
                    )

                    // Flags
                    highlighted = highlighted.replace(
                        /(--?\w+)/g,
                        '<span class="number">$1</span>'
                    )

                    return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />
                })}
            </pre>
        </div>
    )
}

export default CodeBlock
