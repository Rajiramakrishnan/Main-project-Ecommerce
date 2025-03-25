import React from 'react'
import styles from "../../../Assets/style/Paginationbutton.module.css"

function PaginationButton({totalProducts,
    productsPerPage,
    setCurrentPage,
    currentPage}) {
        let pages=[];
        
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }


  return (
    <div>
        {pages.map((pageNo, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(pageNo)}
          className={
            currentPage === pageNo
              ? ` ${styles.paginationBtn} ${styles.active}`
              : `${styles.paginationBtn}`
          }
        >
          {pageNo}
        </button>
      ))}
    </div>
  )
}

export default PaginationButton