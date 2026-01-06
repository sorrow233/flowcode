import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import {
    Home,
    Download,
    Map,
    Zap,
    Cloud,
    Database,
    Globe,
    CheckCircle,
    Palette,
    Monitor
} from 'lucide-react'
import { themes, applyTheme } from '../utils/theme'

export const CommandPalette = () => {
    const { t } = useTranslation(['common', 'nav'])
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = (command) => {
        setOpen(false)
        command()
    }

    const navItems = [
        { icon: <Home size={18} />, label: t('nav:home'), path: '/' },
        { icon: <Download size={18} />, label: t('nav:download'), path: '/download' },
        { icon: <Map size={18} />, label: t('nav:vision'), path: '/vision' },
        { icon: <Zap size={18} />, label: t('nav:generation'), path: '/generation' },
        { icon: <Cloud size={18} />, label: t('nav:deploy'), path: '/cloudflare' },
        { icon: <Database size={18} />, label: t('nav:storage'), path: '/firebase' },
        { icon: <Globe size={18} />, label: t('nav:domain'), path: '/domain' },
        { icon: <CheckCircle size={18} />, label: t('nav:success'), path: '/success' },
    ]

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
        >
            <div className="cmdk-overlay" />
            <Command.Input placeholder={t('common:cmd.placeholder')} />
            <Command.List>
                <Command.Empty>{t('common:cmd.empty')}</Command.Empty>

                <Command.Group heading={t('nav:nav')}>
                    {navItems.map((item) => (
                        <Command.Item
                            key={item.path}
                            onSelect={() => runCommand(() => navigate(item.path))}
                        >
                            {item.icon}
                            {item.label}
                        </Command.Item>
                    ))}
                </Command.Group>

                <Command.Group heading={t('nav:theme')}>
                    {Object.entries(themes).map(([key, theme]) => (
                        <Command.Item
                            key={key}
                            onSelect={() => runCommand(() => applyTheme(key))}
                        >
                            <Palette size={18} />
                            {t('common:cmd.switch_theme')} {theme.name}
                        </Command.Item>
                    ))}
                </Command.Group>

                <Command.Group heading={t('nav:lang')}>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('zh-CN'))}>
                        <Globe size={18} />
                        {t('nav:lang_zh')}
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('en'))}>
                        <Globe size={18} />
                        {t('nav:lang_en')}
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('ja'))}>
                        <Globe size={18} />
                        {t('nav:lang_ja')}
                    </Command.Item>
                </Command.Group>

                <Command.Group heading={t('nav:system')}>
                    <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/sorrow233/flowcode', '_blank'))}>
                        <Monitor size={18} />
                        {t('common:cmd.github')}
                    </Command.Item>
                </Command.Group>

            </Command.List>
        </Command.Dialog>
    )
}
