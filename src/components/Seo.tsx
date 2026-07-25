import { Helmet } from 'react-helmet-async'
import { BUSINESS } from '@/lib/constants'

type SeoProps = {
  title: string
  description: string
  path: string
  jsonLd?: object | object[]
}

export function Seo({ title, description, path, jsonLd }: SeoProps) {
  const canonical = `${BUSINESS.siteUrl}${path}`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${BUSINESS.siteUrl}/logo.png`} />
      <meta property="og:site_name" content={BUSINESS.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
