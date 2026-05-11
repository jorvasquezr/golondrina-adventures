import { useTranslation } from 'react-i18next'
import PostCard from '../components/PostCard'
import posts from '../data/posts'
import styles from './BlogPage.module.css'

export default function BlogPage() {
  const { t } = useTranslation('blog')

  return (
    <main className={styles.main} id="main-content">
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        {posts.length === 0 ? (
          <p>{t('noPostsFound')}</p>
        ) : (
          <ul className={styles.grid} role="list">
            {posts.map(post => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
