export const themes = {
    vermilion: {
        name: '朱赤 (Shu)',
        colors: {
            '--grad-sunset': 'linear-gradient(135deg, #E85C4A 0%, #9D7CD8 100%)',
            '--shu-glow': 'rgba(232, 92, 74, 0.15)',
            '--btn-primary-bg': 'var(--grad-sunset)'
        }
    },
    wisteria: {
        name: '藤紫 (Fuji)',
        colors: {
            '--grad-sunset': 'linear-gradient(135deg, #9D7CD8 0%, #5EEAD4 100%)',
            '--shu-glow': 'rgba(157, 124, 216, 0.15)', // Tweaking glow to match purple
            '--btn-primary-bg': 'var(--grad-sunset)'
        }
    },
    azure: {
        name: '浅葱 (Asagi)',
        colors: {
            '--grad-sunset': 'linear-gradient(135deg, #5EEAD4 0%, #2563EB 100%)',
            '--shu-glow': 'rgba(94, 234, 212, 0.15)',
            '--btn-primary-bg': 'var(--grad-sunset)'
        }
    },
    ink: {
        name: '墨染 (Sumi)',
        colors: {
            '--grad-sunset': 'linear-gradient(135deg, #CFD9DF 0%, #E2EBF0 100%)', // Silvery
            '--shu-glow': 'rgba(255, 255, 255, 0.1)',
            '--btn-primary-bg': '#333' // Minimalist
        }
    }
}

export const applyTheme = (themeKey) => {
    const theme = themes[themeKey] || themes.vermilion
    const root = document.documentElement

    Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(key, value)
    })

    localStorage.setItem('app-theme', themeKey)
}

export const loadSavedTheme = () => {
    const saved = localStorage.getItem('app-theme')
    if (saved) applyTheme(saved)
}
