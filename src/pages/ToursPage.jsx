import { useTranslation } from 'react-i18next'
import TourCard from '../components/TourCard'
import tours from '../data/tours'
import styles from './ToursPage.module.css'

export default function ToursPage() {
  const { t } = useTranslation('tours')

  return (
    <main className={styles.main} id="main-content">
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        {tours.length === 0 ? (
          <p>{t('noToursFound')}</p>
        ) : (
          <ul className={styles.grid} role="list">
            {tours.map(tour => (
              <li key={tour.id}>
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
