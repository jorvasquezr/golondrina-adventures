import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { assetUrl } from '../utils/assetUrl'
import posts from '../data/posts'
import styles from './PostPage.module.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function PostPage() {
  const { slug } = useParams()
  const { t } = useTranslation('blog')
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://jorvasquezr.github.io/golondrina-adventures${post.image.src}`,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Golondrina Adventures',
      url: 'https://jorvasquezr.github.io/golondrina-adventures',
    },
  }

  return (
    <main className={styles.main} id="main-content">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image.src}
        url={`/blog/${post.slug}`}
        type="article"
        structuredData={structuredData}
      />
      <article>
        <div className={styles.hero}>
          <img
            src={assetUrl(post.image.src)}
            alt={post.image.alt}
            className={styles.heroImage}
            width="1200"
            height="600"
          />
        </div>

        <div className={`container ${styles.content}`}>
          <p className={styles.category}>{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span>{t('by', { author: post.author })}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{t('readTime', { min: post.readTime })}</span>
          </div>

          <div className={styles.body}>
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>

          <Link to="/blog" className={styles.back}>{t('backToBlog')}</Link>
        </div>
      </article>
    </main>
  )
}
