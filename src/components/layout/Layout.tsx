import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { services } from '@/data/services'
import { buildLocalBusinessSchema } from '@/lib/seo-schema'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(buildLocalBusinessSchema(services))}
        </script>
      </Helmet>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppFloat />
    </div>
  )
}
