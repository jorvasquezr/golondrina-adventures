import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './PostCard.module.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function PostCard({ post }) {
  const { t } = useTranslation('blog')

  return (
    <article className={styles.card}>
      <Link
        to={`/blog/${post.slug}`}
        className={styles.imageLink}
        aria-label={t('ariaPostCard', { title: post.title })}
        tabIndex={-1}
      >
        <img
          src={post.image.src}
          alt={post.image.alt}
          className={styles.image}
          loading="lazy"
          width="600"
          height="400"
        />
      </Link>

      <div className={styles.body}>
        <p className={styles.category}>{post.category}</p>
        <h2 className={styles.title}>
          <Link to={`/blog/${post.slug}`} className={styles.titleLink}>
            {post.title}
          </Link>
        </h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{t('by', { author: post.author })}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{t('readTime', { min: post.readTime })}</span>
        </div>
      </div>
    </article>
  )
}
