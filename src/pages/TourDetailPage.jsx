import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import tours from '../data/tours'
import styles from './TourDetailPage.module.css'

export default function TourDetailPage() {
  const { slug } = useParams()
  const { t } = useTranslation('tours')
  const tour = tours.find(t => t.slug === slug)

  if (!tour) return <Navigate to="/tours" replace />

  return (
    <main className={styles.main} id="main-content">
      {/* Hero */}
      <div className={styles.hero}>
        <img
          src={tour.image.src}
          alt={tour.image.alt}
          className={styles.heroImage}
          width="1200"
          height="600"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.category}>{tour.category}</p>
          <h1 className={styles.title}>{tour.title}</h1>
          <p className={styles.location}>📍 {tour.location}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Main content */}
          <div className={styles.content}>
            <p className={styles.description}>{tour.fullDescription}</p>

            <section aria-labelledby="highlights-heading" className={styles.section}>
              <h2 id="highlights-heading" className={styles.sectionTitle}>{t('highlights')}</h2>
              <ul className={styles.bulletList}>
                {tour.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="itinerary-heading" className={styles.section}>
              <h2 id="itinerary-heading" className={styles.sectionTitle}>{t('itinerary')}</h2>
              <ol className={styles.itinerary}>
                {tour.itinerary.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>

            <div className={styles.includesGrid}>
              <section aria-labelledby="included-heading">
                <h2 id="included-heading" className={styles.sectionTitle}>{t('included')}</h2>
                <ul className={styles.checkList}>
                  {tour.included.map((item, i) => (
                    <li key={i}><span aria-hidden="true">✓</span> {item}</li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="not-included-heading">
                <h2 id="not-included-heading" className={styles.sectionTitle}>{t('notIncluded')}</h2>
                <ul className={styles.crossList}>
                  {tour.notIncluded.map((item, i) => (
                    <li key={i}><span aria-hidden="true">✕</span> {item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <p className={styles.credit}>Photo: {tour.image.credit}</p>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar} aria-label="Tour details">
            <div className={styles.card}>
              <p className={styles.price}>{t('price', { price: tour.pricePerPerson })}</p>
              {tour.priceNote && <p className={styles.priceNote}>{tour.priceNote}</p>}

              <dl className={styles.details}>
                <div>
                  <dt>{t('duration')}</dt>
                  <dd>{tour.duration}</dd>
                </div>
                <div>
                  <dt>{t('difficulty')}</dt>
                  <dd>{tour.difficulty}</dd>
                </div>
                {tour.departures && (
                  <div>
                    <dt>{t('departures')}</dt>
                    <dd>{tour.departures.join(' / ')}</dd>
                  </div>
                )}
                {tour.maxGroupSize && (
                  <div>
                    <dt>{t('groupSize')}</dt>
                    <dd>{tour.maxGroupSize} people</dd>
                  </div>
                )}
                {tour.minimumAge && (
                  <div>
                    <dt>{t('minAge')}</dt>
                    <dd>{tour.minimumAge}+</dd>
                  </div>
                )}
                {tour.seasonality && (
                  <div>
                    <dt>{t('season')}</dt>
                    <dd>{tour.seasonality}</dd>
                  </div>
                )}
                <div>
                  <dt>{t('meetingPoint')}</dt>
                  <dd>{tour.meetingPoint}</dd>
                </div>
              </dl>

              <Link to="/contact" className={`btn btn-primary ${styles.bookBtn}`}>
                {t('bookingCta')}
              </Link>
            </div>

            <Link to="/tours" className={styles.back}>{t('backToTours')}</Link>
          </aside>
        </div>
      </div>
    </main>
  )
}
