import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useTranslation, Trans } from 'react-i18next'
import ProgressSidebar from '../components/ProgressSidebar'
import VisionFeatures from './vision/VisionFeatures'
import VisionGenerator from './vision/VisionGenerator'
import VisionExample from './vision/VisionExample'
import VisionAiCommand from './vision/VisionAiCommand'

function VisionPage() {
    const { t } = useTranslation(['pages'])
    const [appType, setAppType] = useState(() => localStorage.getItem('flowcode_vision_appType') || '')
    const [goal, setGoal] = useState(() => localStorage.getItem('flowcode_vision_goal') || '')
    const [generatedPrompt, setGeneratedPrompt] = useState(() => localStorage.getItem('flowcode_vision_prompt') || '')

    useEffect(() => {
        localStorage.setItem('flowcode_vision_appType', appType)
    }, [appType])

    useEffect(() => {
        localStorage.setItem('flowcode_vision_goal', goal)
    }, [goal])

    useEffect(() => {
        localStorage.setItem('flowcode_vision_prompt', generatedPrompt)
    }, [generatedPrompt])

    const handleGenerate = () => {
        if (!appType.trim() || !goal.trim()) {
            toast.error(t('vision.generator.error_toast'))
            return
        }
        const prompt = t('vision.generator.prompt_template', { appType, goal })
        setGeneratedPrompt(prompt)
        toast.success(t('vision.generator.success_toast'))
    }

    const handleCopy = () => {
        if (!generatedPrompt) return
        navigator.clipboard.writeText(generatedPrompt)
        toast.success(t('vision.generator.copy_toast'))
    }

    // Sidebar items
    const sidebarItems = t('vision.sidebar.items', { returnObjects: true }) || []
    // Calculate activeIndex based on completion
    const activeIndex = generatedPrompt.length > 0 ? 2 : goal.trim().length > 0 ? 1 : 0

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--fuji)'
                        }}>{t('vision.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('vision.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('vision.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('vision.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容 */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

                        {/* 左側進度條 */}
                        <div className="animate-enter delay-300">
                            <ProgressSidebar
                                title={t('vision.sidebar.title')}
                                items={sidebarItems}
                                activeIndex={activeIndex}
                                whyTitle={t('vision.sidebar.why_title')}
                                whyDesc={t('vision.sidebar.why_desc')}
                            />
                        </div>

                        {/* 右側主要內容 */}
                        <div className="washi-card-dark animate-enter delay-300" style={{ padding: '3rem', flex: 1 }}>

                            <h2 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                fontWeight: 500
                            }}>{t('vision.desc_title')}</h2>
                            <p style={{
                                marginBottom: '2.5rem',
                                color: 'var(--text-nezumi)',
                                lineHeight: 1.8
                            }}>
                                <Trans i18nKey="vision.desc_text" ns="pages" />
                            </p>

                            {/* 三要素 */}
                            <VisionFeatures />

                            {/* 提示生成器 (Interactive Prompt Generator) */}
                            <VisionGenerator
                                appType={appType}
                                setAppType={setAppType}
                                goal={goal}
                                setGoal={setGoal}
                                generatedPrompt={generatedPrompt}
                                onGenerate={handleGenerate}
                                onCopy={handleCopy}
                            />

                            {/* 对话示例 */}
                            <VisionExample />

                            {/* AI 指令 */}
                            <VisionAiCommand />

                            {/* 導航按鈕 */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '2rem',
                                borderTop: '1px solid var(--border-kasumi)'
                            }}>
                                <Link to="/download" className="btn btn-secondary">
                                    {t('vision.nav.download')}
                                </Link>
                                <Link to="/generation" className="btn btn-primary">
                                    {t('vision.nav.generation')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionPage
