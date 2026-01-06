import React from 'react'
import ReassuranceGrid from './features/ReassuranceGrid'
import VisionManifesto from './features/VisionManifesto'

const FeaturesSection = () => {
    return (
        <section style={{
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* === Part 1: Reassurance Grid === */}
            <ReassuranceGrid />

            {/* === Part 2: The Vision Manifesto === */}
            <VisionManifesto />

        </section>
    )
}

export default FeaturesSection

