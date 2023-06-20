import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '../../components/button/button'

export default function Home() {
  return (
    <div className={styles["page"]}>

      <section className={` ${styles["header"]}`}>
        <div className={styles["text-container"]}>

          <h1> Taste <span className='text-accent'>East Asia</span> through our <span className='text-accent'>soups</span> </h1>
          <div className={styles["sub-container"]}>
            
            <p className='lead text-hint'> Start your journey with some appertizers, choose from our 5 soup options or get some stir fry, and finish up with our delicious desserts</p>
            <div className={styles["button-container"]}>
              <Button text="Order now" type="filled" />
              <Button text="View menu" type="outlined" />
            </div>

          </div>

        </div>
        <img src='./images/hero-img.png' style={{ width: "50%" }} />
      </section>
    </div>
  )
}
