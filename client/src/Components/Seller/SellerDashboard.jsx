import React from 'react'
import styles from "../../Assets/style/SellerDashboard.module.css"

function SellerDashboard() {
  return (
    <div className={styles.dashboardWrapper}>
    <h1>Dashboard</h1>
    <div className={styles.cards}>
      <div className={styles.countCards}>
        <p className={styles.metrics}>12</p>
        <p className={styles.metricName}>Total Buyers</p>
      </div>
      <div className={styles.countCards}>
        <p className={styles.metrics}>5</p>
        <p className={styles.metricName}>Total Orders</p>
      </div>
      <div className={styles.countCards}>
        <p className={styles.metrics}>8</p>
        <p className={styles.metricName}>Total Products</p>
      </div>
    </div>
  </div>)
}

export default SellerDashboard