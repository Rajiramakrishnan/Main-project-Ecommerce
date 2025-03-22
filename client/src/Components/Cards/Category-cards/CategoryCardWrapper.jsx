import React from 'react'
import styles from "../../../Assets/style/CategoryCardWrapper.module.css"
import fashion from '../../../Assets/Images/images/women-category.png'
import electronics from "../../../Assets/Images/images/categoryelectronics.jpg"
import appliances from "../../../Assets/Images/images/categoryAppliances.jpg"
import kitchen from "../../../Assets/Images/images/categoryKitchenHome.avif"
import toysbooks from "../../../Assets/Images/images/categoryBooksToys.png"
import CategoryCard from './CategoryCard'
function CategoryCardWrapper() {
    const categoryDetails=[
        {
            id:1,
            categoryImage:fashion,
            categoryTitle:"Fashion"
        },
        {
            id:2,
            categoryImage:appliances,
            categoryTitle:"Appliances"
        },
        {
            id:3,
            categoryImage:toysbooks,
            categoryTitle:"Books & Toys"
        },
        
        {
            id:4,
            categoryImage:kitchen,
            categoryTitle:"Home & Kitchen"
        },
        {
            id:5,
            categoryImage:electronics,
            categoryTitle:"Electronics"
        }

    ]
  return (
    <div className={styles.categorySection} >
            {
                categoryDetails.map((card,index)=>
                 <CategoryCard key={index} categories={card}/>
                )
            }
              
        </div>
  )
}

export default CategoryCardWrapper