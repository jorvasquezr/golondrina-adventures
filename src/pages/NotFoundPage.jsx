import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <main className={styles.main} id="main-content">
      <div className={`container ${styles.content}`}>
        <p className={styles.code} aria-hidden="true">404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Go back home</Link>
      </div>
    </main>
  )
}
