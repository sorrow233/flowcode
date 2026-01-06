import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProgressSidebar from '../components/ProgressSidebar'

function DownloadPage() {
    const { t } = useTranslation(['pages'])
    const sidebarItems = t('download.sidebar.items', { returnObjects: true })

    return (
        <>
            {/* 頁面標題 */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="scroll-title animate-enter">
                        <span style={{
                            fontFamily: 'var(--font-mincho)',
                            color: 'var(--asagi)'
                        }}>{t('download.step_num_kanji')}</span>
                        <span style={{ color: 'var(--text-nezumi)' }}>{t('download.step_num_text')}</span>
                    </div>
                    <h1 className="animate-enter delay-100 text-gradient-asagi" style={{
                        fontSize: '2.8rem',
                        marginBottom: '1rem'
                    }}>
                        {t('download.title')}
                    </h1>
                    <p className="animate-enter delay-200" style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-nezumi)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {t('download.subtitle')}
                    </p>
                </div>
            </section>

            {/* 主要內容Layout */}
            <section className="page-content" style={{ marginTop: '-2rem' }}>
                <div className="container" style={{
                    maxWidth: '1100px',
                    display: 'flex',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* 左側邊欄 */}
                    <ProgressSidebar
                        title={t('download.sidebar.title')}
                        items={sidebarItems}
                        activeIndex={0}
                        whyTitle={t('download.sidebar.why_title')}
                        whyDesc={t('download.sidebar.why_desc')}
                    />

                    {/* 右側主內容 */}
                    <div style={{ flex: 1, maxWidth: '750px' }}>
                        <div className="washi-card-dark animate-enter delay-300" style={{
                            padding: '3rem',
                            marginBottom: '2rem'
                        }}>

                            {/* 下載區域 */}
                            <div style={{
                                textAlign: 'center',
                                padding: '2.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--border-kasumi)',
                                borderRadius: 'var(--radius-lg)',
                                marginBottom: '2.5rem'
                            }}>
                                <div style={{
                                    fontFamily: 'var(--font-mincho)',
                                    fontSize: '1.6rem',
                                    color: 'var(--text-yuki)',
                                    marginBottom: '0.75rem'
                                }}>
                                    {t('download.card.title')}
                                </div>
                                <p style={{
                                    color: 'var(--text-ishi)',
                                    marginBottom: '2rem',
                                    fontSize: '1rem',
                                    lineHeight: 1.6
                                }}>
                                    {t('download.card.desc')}
                                </p>
                                <a
                                    href="https://antigravity.google/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: '1rem 3rem', fontSize: '1rem' }}
                                >
                                    {t('download.card.button')}
                                </a>
                            </div>

                            {/* 提示區域 */}
                            <div className="info-box" style={{
                                borderLeftColor: 'var(--kincha)',
                                background: 'rgba(245, 166, 35, 0.05)',
                                padding: '1.5rem 2rem'
                            }}>
                                <div className="info-box-title" style={{
                                    color: 'var(--kincha)',
                                    marginBottom: '0.75rem',
                                    fontSize: '1.1rem'
                                }}>
                                    {t('download.warning.title')}
                                </div>
                                <p style={{
                                    marginBottom: '0.75rem',
                                    color: 'var(--text-nezumi)',
                                    lineHeight: 1.6
                                }}>
                                    {t('download.warning.text_1')} <strong style={{ color: 'var(--text-yuki)' }}>{t('download.warning.highlight')}</strong>。
                                </p>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-ishi)',
                                    marginBottom: 0,
                                    lineHeight: 1.6
                                }}>
                                    {t('download.warning.text_2')}
                                </p>
                            </div>

                            {/* 導航按鈕 */}
                            <div style={{
                                marginTop: '4rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '2.5rem',
                                borderTop: '1px solid var(--border-kasumi)'
                            }}>
                                <Link to="/" className="btn btn-secondary">
                                    {t('download.nav.home')}
                                </Link>
                                <Link to="/vision" className="btn btn-primary">
                                    {t('download.nav.vision')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadPage
