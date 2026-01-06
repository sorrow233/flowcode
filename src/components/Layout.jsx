import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CommandPalette } from './CommandPalette'
import AnimatedOutlet from './AnimatedOutlet'
import { loadSavedTheme } from '../utils/theme'

import { useTranslation } from 'react-i18next'

// Sakura Particle Component
const SakuraParticles = () => {
    const [particles] = useState(() =>
        Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 10 + Math.random() * 15,
            size: 6 + Math.random() * 8
        }))
    )

    return (
        <>
            {particles.map(p => (
                <div
                    key={p.id}
                    className="sakura-particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`
                    }}
                />
            ))}
        </>
    )
}

function Layout() {
    const { t } = useTranslation(['nav', 'common'])
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    // Load saved theme on mount
    useEffect(() => {
        loadSavedTheme()
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    // Header scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: t('nav:home'), icon: '◈' },
        { path: '/download', label: t('nav:download') },
        { path: '/vision', label: t('nav:vision') },
        { path: '/generation', label: t('nav:generation') },
        { path: '/cloudflare', label: t('nav:deploy') },
        { path: '/firebase', label: t('nav:storage') },
        { path: '/domain', label: t('nav:domain') },
        { path: '/success', label: t('nav:success') }
    ]

    return (
        <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>
            <CommandPalette />

            {/* 背景層 */}
            <div className="bg-ink-wash" />
            <div className="bg-grain" />
            <SakuraParticles />

            {/* 極簡導航 */}
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled ? '0.8rem 0' : '1.2rem 0',
                background: scrolled ? 'rgba(10, 10, 12, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1100px'
                }}>
                    {/* Logo */}
                    <NavLink to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none'
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            background: 'var(--grad-sunset)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-mincho)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'white'
                        }}>
                            流
                        </div>
                        <span style={{
                            fontFamily: 'var(--font-gothic)',
                            fontSize: '1.15rem',
                            fontWeight: 500,
                            color: 'var(--text-yuki)',
                            letterSpacing: '0.05em'
                        }}>
                            FlowCode
                        </span>
                    </NavLink>

                    {/* 導航連結 */}
                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                    }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                style={({ isActive }) => ({
                                    padding: '0.5rem 0.9rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.85rem',
                                    fontWeight: isActive ? 500 : 400,
                                    color: isActive ? 'var(--text-yuki)' : 'var(--text-ishi)',
                                    background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '0.02em'
                                })}
                            >
                                {link.icon || link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            {/* 主內容 */}
            <main style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                paddingTop: '100px'
            }}>
                <AnimatedOutlet />
            </main>

            {/* 禪意頁腳 */}
            <footer style={{
                marginTop: '6rem',
                padding: '3rem 0',
                borderTop: '1px solid var(--border-kasumi)',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: 0.5,
                    fontSize: '0.85rem',
                    color: 'var(--text-ishi)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            fontSize: '1rem'
                        }}>流</span>
                        <span>FlowCode</span>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a
                            href="https://antigravity.google/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            Antigravity
                        </a>
                        <a
                            href="https://github.com/sorrow233/flowcode"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            GitHub
                        </a>
                    </div>

                    <span style={{ fontFamily: 'var(--font-mincho)' }}>
                        二〇二六
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Layout
