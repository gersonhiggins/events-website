import './App.css';
import './animations/animate-on-view.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

const NavBar = lazy(() => import('./components/navbar/NavBar'))
const Footer = lazy(() => import('./components/footer/Footer'))
const Icons = lazy(() => import('./components/icons/Icons'))
const PresupuestoPage = lazy(() => import('./pages/PresupuestoPage'))
const Gallery = lazy(() => import('./components/gallery/Gallery'))
const Body = lazy(() => import('./components/body/Body'))

function App() {
  const [showDeferredUI, setShowDeferredUI] = useState(false)

  useEffect(() => {
    const loadDeferred = () => setShowDeferredUI(true)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadDeferred, { timeout: 1000 })
    } else {
      const timeoutId = window.setTimeout(loadDeferred, 1000)
      return () => window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/presupuesto" element={<PresupuestoPage />} />
            <Route path="/galeria" element={<Gallery />} />
          </Routes>
        </Suspense>

        {showDeferredUI ? (
          <Suspense fallback={null}>
            <Icons />
            <Footer />
          </Suspense>
        ) : null}
      </div>
    </BrowserRouter>
  );
}

export default App;