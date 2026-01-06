import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
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
        { icon: <Home size={18} />, label: '首頁 (Home)', path: '/' },
        { icon: <Download size={18} />, label: '下載 (Download)', path: '/download' },
        { icon: <Map size={18} />, label: '願景 (Vision)', path: '/vision' },
        { icon: <Zap size={18} />, label: '生成 (Generation)', path: '/generation' },
        { icon: <Cloud size={18} />, label: '部署 (Cloudflare)', path: '/cloudflare' },
        { icon: <Database size={18} />, label: '存儲 (Firebase)', path: '/firebase' },
        { icon: <Globe size={18} />, label: '域名 (Domain)', path: '/domain' },
        { icon: <CheckCircle size={18} />, label: '完成 (Success)', path: '/success' },
    ]

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
        >
            <div className="cmdk-overlay" />
            <Command.Input placeholder="輸入指令或是搜尋頁面..." />
            <Command.List>
                <Command.Empty>找不到結果</Command.Empty>

                <Command.Group heading="導航 (Navigation)">
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

                <Command.Group heading="主題 (Theme)">
                    {Object.entries(themes).map(([key, theme]) => (
                        <Command.Item
                            key={key}
                            onSelect={() => runCommand(() => applyTheme(key))}
                        >
                            <Palette size={18} />
                            切換至 {theme.name}
                        </Command.Item>
                    ))}
                </Command.Group>

                <Command.Group heading="系統 (System)">
                    <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/sorrow233/flowcode', '_blank'))}>
                        <Monitor size={18} />
                        查看 GitHub 源碼
                    </Command.Item>
                </Command.Group>

            </Command.List>
        </Command.Dialog>
    )
}
