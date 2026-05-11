import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HeroSection from '../components/HeroSection'
import PostCard from '../components/PostCard'
import TourCard from '../components/TourCard'
import posts from '../data/posts'
import tours from '../data/tours'
import styles from './HomePage.module.css'

export default function HomePage() {
  const { t } = useTranslation('common')
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3)
  const featuredTours = tours.slice(0, 3)

  return (
    <>
      <HeroSection
        title="Discover Costa Rica's Wild Heart"
        subtitle="Authentic travel stories and handcrafted eco-tours across one of the world's most biodiverse countries."
        ctaLabel="Explore our tours"
        ctaTo="/tours"
        imageSrc="/images/tours/arenal-volcano-hike.jpg"
        imageAlt="Arenal Volcano rising above the Costa Rican rainforest at sunrise"
      />

      {/* Featured Posts */}
      <section className={styles.section} aria-labelledby="posts-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="posts-heading" className={styles.sectionTitle}>Featured Stories</h2>
            <Link to="/blog" className={styles.seeAll}>{t('cta.readMore')} →</Link>
          </div>
          <ul className={styles.grid} role="list">
            {featuredPosts.map(post => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Tours */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="tours-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="tours-heading" className={styles.sectionTitle}>Popular Tours</h2>
            <Link to="/tours" className={styles.seeAll}>All tours →</Link>
          </div>
          <ul className={styles.grid} role="list">
            {featuredTours.map(tour => (
              <li key={tour.id}>
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner} aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading" className={styles.ctaTitle}>Ready to experience Costa Rica?</h2>
          <p className={styles.ctaText}>
            Every tour is led by bilingual naturalist guides with deep knowledge of Costa Rica's ecosystems.
            Small groups, big experiences.
          </p>
          <Link to="/contact" className="btn btn-primary">{t('cta.contactUs')}</Link>
        </div>
      </section>
    </>
  )
}
