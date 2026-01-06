import { useState, useEffect } from 'react'

/**
 * Custom hook to manage and persist step progress in localStorage
 * @param {string} pageKey - Unique key for the page (e.g., 'download', 'vision')
 * @param {number} defaultIndex - Default active index if no saved state
 * @returns {Array} [activeIndex, setActiveIndex]
 */
export function useStepProgress(pageKey, defaultIndex = 0) {
    const storageKey = `flowcode_progress_${pageKey}`

    const [activeIndex, setActiveIndex] = useState(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            return saved !== null ? parseInt(saved, 10) : defaultIndex
        } catch (e) {
            console.error('Error reading progress from localStorage:', e)
            return defaultIndex
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(storageKey, activeIndex.toString())
            // Also update a global progress for "sync" perception
            localStorage.setItem('flowcode_last_active_page', pageKey)
        } catch (e) {
            console.error('Error saving progress to localStorage:', e)
        }
    }, [activeIndex, pageKey, storageKey])

    return [activeIndex, setActiveIndex]
}

export default useStepProgress
