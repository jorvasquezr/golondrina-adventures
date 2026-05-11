import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './TourCard.module.css'

function difficultyClass(difficulty) {
  const d = difficulty.toLowerCase()
  if (d.includes('challenging')) return 'badge-challenging'
  if (d.includes('moderate')) return 'badge-moderate'
  return 'badge-easy'
}

export default function TourCard({ tour }) {
  const { t } = useTranslation('tours')

  return (
    <article className={styles.card}>
      <Link
        to={`/tours/${tour.slug}`}
        className={styles.imageLink}
        aria-label={t('ariaViewTour', { title: tour.title })}
        tabIndex={-1}
      >
        <img
          src={tour.image.src}
          alt={tour.image.alt}
          className={styles.image}
          loading="lazy"
          width="600"
          height="400"
        />
      </Link>

      <div className={styles.body}>
        <div className={styles.top}>
          <p className={styles.category}>{tour.category}</p>
          <span className={`badge ${difficultyClass(tour.difficulty)}`}>
            {tour.difficulty}
          </span>
        </div>

        <h2 className={styles.title}>
          <Link to={`/tours/${tour.slug}`} className={styles.titleLink}>
            {tour.title}
          </Link>
        </h2>

        <p className={styles.excerpt}>{tour.shortDescription}</p>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span aria-hidden="true">⏱</span> {tour.duration}
          </span>
          <span className={styles.metaItem}>
            <span aria-hidden="true">📍</span> {tour.region}
          </span>
        </div>

        <div className={styles.footer}>
          <p className={styles.price}>
            {t('price', { price: tour.pricePerPerson })}
          </p>
          <Link to={`/tours/${tour.slug}`} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}
