import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'
import styles from './HeroSection.module.css'

export default function HeroSection({ title, subtitle, ctaLabel, ctaTo, imageSrc, imageAlt }) {
  return (
    <section
      className={styles.hero}
      style={imageSrc ? { backgroundImage: `url(${assetUrl(imageSrc)})` } : undefined}
      role="img"
      aria-label={imageAlt || title}
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaLabel && ctaTo && (
          <Link to={ctaTo} className={`btn btn-primary ${styles.cta}`}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
