import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Step1Page from './pages/Step1Page'
import Step2Page from './pages/Step2Page'
import Step3Page from './pages/Step3Page'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="step-1" element={<Step1Page />} />
                    <Route path="step-2" element={<Step2Page />} />
                    <Route path="step-3" element={<Step3Page />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
