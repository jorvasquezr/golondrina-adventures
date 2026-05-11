import { useState } from 'react'
import SEO from '../components/SEO'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate(fields) {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Please enter your name.'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Please enter a valid email address.'
    if (!fields.message.trim()) errs.message = 'Please enter a message.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const fields = {
      name: form.name.value,
      email: form.email.value,
      tour: form.tour.value,
      message: form.message.value,
    }
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <main className={styles.main} id="main-content">
        <div className={`container ${styles.content}`}>
          <div className={styles.success} role="alert">
            <h1 className={styles.successTitle}>Message sent!</h1>
            <p>Thank you for reaching out. We'll reply within 24 hours.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main} id="main-content">
      <SEO
        title="Contact"
        description="Get in touch with Golondrina Adventures to book a Costa Rica tour, ask about custom itineraries, or plan your group trip."
        url="/contact"
      />
      <div className={`container ${styles.content}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Questions about a tour, custom itineraries, or group bookings — we're here to help.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Full name <span aria-hidden="true" className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <p id="name-error" className={styles.errorMsg} role="alert">{errors.name}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email address <span aria-hidden="true" className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p id="email-error" className={styles.errorMsg} role="alert">{errors.email}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="tour" className={styles.label}>Tour of interest</label>
            <select id="tour" name="tour" className={styles.input}>
              <option value="">— Select a tour (optional) —</option>
              <option value="arenal-volcano-hike">Arenal Volcano Hike</option>
              <option value="manuel-antonio-wildlife-walk">Manuel Antonio Wildlife Walk</option>
              <option value="monteverde-cloud-forest">Monteverde Cloud Forest</option>
              <option value="caribbean-coast-snorkel">Caribbean Coast Snorkel</option>
              <option value="coffee-farm-tour">Coffee Farm Tour</option>
              <option value="tortuguero-turtle-night-tour">Tortuguero Turtle Night Tour</option>
              <option value="pacuare-river-rafting">Pacuare River Rafting</option>
              <option value="other">Other / Custom itinerary</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message <span aria-hidden="true" className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`${styles.input} ${errors.message ? styles.inputError : ''}`}
              aria-required="true"
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell us your travel dates, group size, and any questions…"
            />
            {errors.message && (
              <p id="message-error" className={styles.errorMsg} role="alert">{errors.message}</p>
            )}
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submit}`}>
            Send message
          </button>
        </form>
      </div>
    </main>
  )
}
