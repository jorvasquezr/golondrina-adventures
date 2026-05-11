import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://jorvasquezr.github.io/golondrina-adventures'
const DEFAULT_IMAGE = `${BASE_URL}/images/tours/arenal-volcano-hike.jpg`

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  structuredData,
}) {
  const fullTitle = title ? `${title} | Golondrina Adventures` : 'Golondrina Adventures — Discover Costa Rica'
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${BASE_URL}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Golondrina Adventures" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${BASE_URL}${image}`} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
