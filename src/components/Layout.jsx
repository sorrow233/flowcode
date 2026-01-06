import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

function Layout() {
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    // --- Custom Cursor Logic ---
    const cursorDotRef = useRef(null)
    const cursorOutlineRef = useRef(null)

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e

            // Direct update for performance (avoiding React render cycle for mouse move)
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${clientX}px`
                cursorDotRef.current.style.top = `${clientY}px`
            }

            if (cursorOutlineRef.current) {
                // Add a tiny bit of lag/smoothing to the outline
                cursorOutlineRef.current.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 500, fill: 'forwards' })
            }
        }

        const handleHoverStart = () => document.body.classList.add('hovering')
        const handleHoverEnd = () => document.body.classList.remove('hovering')

        window.addEventListener('mousemove', moveCursor)

        // Attach hover listeners to all interactive elements
        const interactables = document.querySelectorAll('a, button, input, textarea, .card')
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart)
            el.addEventListener('mouseleave', handleHoverEnd)
        })

        // Observer to attach listeners to dynamic elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newInteractables = document.querySelectorAll('a, button, input, .card');
                    newInteractables.forEach(el => {
                        el.removeEventListener('mouseenter', handleHoverStart); // prevent dupes
                        el.removeEventListener('mouseleave', handleHoverEnd);
                        el.addEventListener('mouseenter', handleHoverStart);
                        el.addEventListener('mouseleave', handleHoverEnd);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart)
                el.removeEventListener('mouseleave', handleHoverEnd)
            })
            observer.disconnect();
            document.body.classList.remove('hovering')
        }
    }, [location.pathname]) // Re-run on route change to catch new links

    return (
        <div className="app">
            {/* Persistent Backgrounds */}
            <div className="bg-noise" />
            <div className="bg-mesh" />
            <div className="bg-grid" />

            {/* Custom Cursor Elements */}
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorOutlineRef} className="cursor-outline" />

            <header className="header" style={{
                background: 'transparent',
                border: 'none',
                paddingTop: '1.5rem',
                pointerEvents: 'none' // Allow clicks to pass through to background if needed, but header-inner needs pointer-events: auto
            }}>
                <div className="container header-inner" style={{
                    pointerEvents: 'auto',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    background: 'var(--bg-glass-strong)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.75rem 1.5rem',
                    height: 'auto',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                    <NavLink to="/" className="logo" style={{ marginRight: '2rem' }}>
                        <div className="logo-icon" style={{
                            width: '32px',
                            height: '32px',
                            background: 'var(--grad-primary)',
                            borderRadius: '8px',
                            fontSize: '1.2rem'
                        }}>F</div>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.02em' }}>FlowCode</span>
                    </NavLink>

                    <nav className="nav" style={{ gap: '0.5rem' }}>
                        {[
                            { path: '/', label: '首页' },
                            { path: '/download', label: '1. 下载' },
                            { path: '/vision', label: '2. 愿景' },
                            { path: '/generation', label: '3. 生成' },
                            { path: '/cloudflare', label: '4. 部署' },
                            { path: '/firebase', label: '5. 存储' },
                            { path: '/domain', label: '6. 域名' },
                            { path: '/success', label: '7. 完成' }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                                style={({ isActive }) => ({
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-full)',
                                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                                    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                    fontSize: '0.9rem',
                                    fontWeight: isActive ? 600 : 500,
                                    transition: 'all 0.2s ease',
                                    textDecoration: 'none'
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: '120px' }}>
                <Outlet />
            </main>

            <footer className="footer" style={{
                background: 'transparent',
                borderTop: '1px solid var(--border-dim)',
                marginTop: '4rem',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container footer-content" style={{ opacity: 0.6 }}>
                    <div className="logo" style={{ opacity: 0.8 }}>
                        <span className="logo-icon" style={{
                            width: '24px',
                            height: '24px',
                            fontSize: '0.9rem',
                            opacity: 0.8,
                            filter: 'grayscale(1)'
                        }}>F</span>
                        <span style={{ fontSize: '1rem' }}>FlowCode</span>
                    </div>
                    <div className="footer-links">
                        <a href="https://antigravity.google/" target="_blank" rel="noopener noreferrer">Antigravity</a>
                        <a href="https://github.com/sorrow233/flowcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <span style={{ color: 'var(--text-muted)' }}>
                            Designed by Antigravity in the Void
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
