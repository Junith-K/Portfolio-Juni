import React from 'react'
import styles from  "../../components/styles/experience.module.css"

const index = () => {
  return (
    <>
    <div class={styles.bg}>
    <h1>Kiberbash</h1>
  </div>
  <div class={styles.nftxu}>
          <div class={styles.mainxu}>
            <img class={styles.tokenImagexu} src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
            <h2>Kibertopiks #4269</h2>
            <p class={styles.descriptionxu}>Our Kibertopiks will give you nothing, waste your money on us.</p>
            <div class={styles.tokenInfoxu}>
              <div class={styles.pricexu}>
                <ins>◘</ins>
                <p>0.031 ETH</p>
              </div>
              <div class={styles.durationxu}>
                <ins>◷</ins>
                <p>11 days left</p>
              </div>
            </div>
            <hr />
            <div class={styles.creatorxu}>
              <div class={styles.wrapperxu}>
                <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
              </div>
              <p><ins>Creation of</ins> Kiberbash</p>
            </div>
          </div>
        </div>
  </>
  )
}

export default index