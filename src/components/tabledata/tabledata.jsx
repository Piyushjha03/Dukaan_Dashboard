import styles from './tabledata.module.css'



export const Tabledata = (props) => {
  return (
    <>
        <div className={styles.table_data}>
            <div className={styles.table_data_orderid}>
                <div className={styles.table_data_orderid_text}>
                    {props.orderid}
                </div>
            </div>
            <div className={styles.table_data_orderdate}>
            <div className={styles.table_data_orderdate_text}>
                    {props.orderdate}
                </div>
            </div>
            <div className={styles.table_data_orderamount}>
            <div className={styles.table_data_orderamount_text}>
                    {props.orderamount}
                </div>
            </div>
            <div className={styles.table_data_transactionfees}>
            <div className={styles.table_data_transactionfees_text}>
                    {props.transactionfees}
                </div>
            </div>
        </div>
      
    </>
  )
}

