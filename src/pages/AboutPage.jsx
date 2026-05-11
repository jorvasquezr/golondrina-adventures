import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main} id="main-content">
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>About Golondrina Adventures</h1>

        <div className={styles.hero}>
          <img
            src="/images/tours/monteverde-cloud-forest.jpg"
            alt="Misty cloud forest in Monteverde, Costa Rica — the kind of landscape that inspired Golondrina Adventures"
            className={styles.heroImage}
            width="1200"
            height="500"
          />
        </div>

        <div className={styles.body}>
          <p>
            Golondrina Adventures was born from a simple conviction: the best way to understand Costa Rica
            is to walk through it slowly, with someone who knows its name in every language — scientific,
            common, indigenous, and the one the locals use when they think no one is listening.
          </p>
          <p>
            The golondrina — the swallow — is a bird that crosses hemispheres without hesitation, that
            navigates by memory and magnetic sense, that returns every year to the same nest. We think
            of our guides and our travelers the same way: people drawn back to places that changed them,
            following an instinct they can't entirely explain.
          </p>
          <p>
            Our tours are led by bilingual naturalist guides with formal training in ecology, ornithology,
            and herpetology, and with something harder to credential: a genuine passion for sharing what
            they know. Small groups — never more than 15 people — because wildlife encounters require
            patience, and patience requires quiet.
          </p>

          <h2>What we believe</h2>
          <ul className={styles.values}>
            <li>
              <strong>Slow travel.</strong> You see more by rushing less. Our itineraries leave room
              for the unexpected encounter, the extended pause, the question that takes twenty minutes to answer.
            </li>
            <li>
              <strong>Honest ecology.</strong> Costa Rica's biodiversity is extraordinary and its challenges
              are real. We don't hide either. Our guides talk about deforestation, climate pressures, and
              the conservation successes worth celebrating.
            </li>
            <li>
              <strong>Local first.</strong> We partner with locally owned lodges, family-run farms, and
              community-based operators. Your tour fee stays in the communities that maintain the landscapes
              you came to see.
            </li>
            <li>
              <strong>Leave no trace.</strong> We follow park service guidelines strictly. No feeding animals,
              no trail deviation, no single-use plastics on our tours. Refillable water bottles are provided.
            </li>
          </ul>

          <h2>The people behind the tours</h2>
          <p>
            Our core team includes naturalist guides who have worked in Arenal, Monteverde, Tortuguero,
            and the Osa Peninsula for a combined forty years. Several are published birdwatchers; one has
            contributed to citizen science turtle monitoring data for COTERC. All speak English and Spanish fluently,
            and several speak additional languages.
          </p>
          <p>
            We are based in San José and operate tours year-round, with seasonal specializations: turtle
            season in Tortuguero (July–October), quetzal season in Monteverde (March–April), and coffee
            harvest tours in the Central Valley (October–February).
          </p>
        </div>
      </div>
    </main>
  )
}
