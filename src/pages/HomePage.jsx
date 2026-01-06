import HeroSection from './home/sections/HeroSection'
import FeaturesSection from './home/sections/FeaturesSection'
import SpiritSection from './home/sections/SpiritSection'

function HomePage() {
    return (
        <div className="home-container">
            <HeroSection />
            <FeaturesSection />
            <SpiritSection />
        </div>
    )
}

export default HomePage
