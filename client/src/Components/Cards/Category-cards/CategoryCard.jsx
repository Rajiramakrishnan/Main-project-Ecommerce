import React from 'react'
import styles from "../../../Assets/style/CategoryCard.module.css"
import { useNavigate } from "react-router-dom";

function CategoryCard({categories}) {
    const {categoryImage, categoryTitle}=categories;
    const backgroundImageStyles = {
        backgroundImage: `url(${categoryImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: "100%",
        minHeight: "300px",
      };
  return (
   <div className={styles.categoryWrapper}>
      <div style={backgroundImageStyles} className={styles.categoryImg}>
        <button
          className={styles.categoryBtn}
        //   onClick={() => navigate("/buyer/viewproducts")}
        >
          {categoryTitle}
        </button>
      </div>
    </div>
  )
}

export default CategoryCard