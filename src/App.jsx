import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DownloadPage from './pages/DownloadPage'
import VisionPage from './pages/VisionPage'
import GenerationPage from './pages/GenerationPage'
import CloudflarePage from './pages/CloudflarePage'
import FirebasePage from './pages/FirebasePage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="download" element={<DownloadPage />} />
                    <Route path="vision" element={<VisionPage />} />
                    <Route path="generation" element={<GenerationPage />} />
                    <Route path="cloudflare" element={<CloudflarePage />} />
                    <Route path="firebase" element={<FirebasePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
