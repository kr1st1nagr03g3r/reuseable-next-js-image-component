import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import images from '../public/images/index'

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <div className={styles.container}>
        <Hero
          className={styles.heroImage}
          src={images.bluejay}
          alt="a bluejay"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.canary}
          alt="a canary"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.cardinal}
          alt="a cardinal"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.falcon}
          alt="a falcon"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.flamingo}
          alt="a flamingo"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.guardianFinches}
          alt="Guardian Finches"
          height={100}
          width={100}
        />
        <Hero
          className={styles.heroImage}
          src={images.parrot}
          alt="a parrot"
          height={100}
          width={100}
        />
      </div>
    </>
  )
}
