import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })))
const ServicesIndex = lazy(() =>
  import('@/pages/ServicesIndex').then((m) => ({ default: m.ServicesIndex })),
)
const ServiceDetail = lazy(() =>
  import('@/pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })),
)
const Gallery = lazy(() => import('@/pages/Gallery').then((m) => ({ default: m.Gallery })))
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })))
const ServiceAreas = lazy(() =>
  import('@/pages/ServiceAreas').then((m) => ({ default: m.ServiceAreas })),
)
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))
const ImageReview = lazy(() => import('@/pages/ImageReview').then((m) => ({ default: m.ImageReview })))

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div
        className="size-8 animate-spin rounded-full border-2 border-steel/30 border-t-navy"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/image-review" element={<ImageReview />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
