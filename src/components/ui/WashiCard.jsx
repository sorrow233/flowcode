import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const WashiCard = ({ children, to, className = '', style = {} }) => {
    const ref = useRef(null)

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -3
        const rotateY = ((x - centerX) / centerX) * 3

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    const Component = to ? Link : 'div'

    return (
        <Component
            to={to}
            ref={ref}
            className={`washi-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'block',
                transition: 'transform 0.15s ease-out, box-shadow 0.4s ease',
                textDecoration: 'none',
                ...style
            }}
        >
            {children}
        </Component>
    )
}
