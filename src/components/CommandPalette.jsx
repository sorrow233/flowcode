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
    const { t } = useTranslation()
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
        { icon: <Home size={18} />, label: t('cmd.home'), path: '/' },
        { icon: <Download size={18} />, label: t('cmd.download'), path: '/download' },
        { icon: <Map size={18} />, label: t('cmd.vision'), path: '/vision' },
        { icon: <Zap size={18} />, label: t('cmd.generation'), path: '/generation' },
        { icon: <Cloud size={18} />, label: t('cmd.deploy'), path: '/cloudflare' },
        { icon: <Database size={18} />, label: t('cmd.storage'), path: '/firebase' },
        { icon: <Globe size={18} />, label: t('cmd.domain'), path: '/domain' },
        { icon: <CheckCircle size={18} />, label: t('cmd.success'), path: '/success' },
    ]

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
        >
            <div className="cmdk-overlay" />
            <Command.Input placeholder={t('cmd.placeholder')} />
            <Command.List>
                <Command.Empty>{t('cmd.empty')}</Command.Empty>

                <Command.Group heading={t('cmd.nav')}>
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

                <Command.Group heading={t('cmd.theme')}>
                    {Object.entries(themes).map(([key, theme]) => (
                        <Command.Item
                            key={key}
                            onSelect={() => runCommand(() => applyTheme(key))}
                        >
                            <Palette size={18} />
                            {t('cmd.switch_theme')} {theme.name}
                        </Command.Item>
                    ))}
                </Command.Group>

                <Command.Group heading={t('cmd.lang')}>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('zh'))}>
                        <Globe size={18} />
                        {t('cmd.lang_zh')}
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('en'))}>
                        <Globe size={18} />
                        {t('cmd.lang_en')}
                    </Command.Item>
                    <Command.Item onSelect={() => runCommand(() => i18n.changeLanguage('ja'))}>
                        <Globe size={18} />
                        {t('cmd.lang_ja')}
                    </Command.Item>
                </Command.Group>

                <Command.Group heading={t('cmd.system')}>
                    <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/sorrow233/flowcode', '_blank'))}>
                        <Monitor size={18} />
                        {t('cmd.github')}
                    </Command.Item>
                </Command.Group>

            </Command.List>
        </Command.Dialog>
    )
}
