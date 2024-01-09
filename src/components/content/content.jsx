import { Overview } from "../overview/overview"
import { Transaction } from "../transaction/transaction"
import styles from './content.module.css'

export const Content = () => {
  return (
    <>
    <div className={styles.content}>
    <Overview/>
        <Transaction/>
    </div>
        
    </>
  )
}

