import React from 'react'

import styles from "../../Assets/style/SellerProductEdit.module.css"
import { useEffect, useState } from "react";
import { axiosInstance } from "../../Api/axiosInstance";
import toast from "react-hot-toast";

import { BASE_URL } from "../../Api/api";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
function SellerProductEdit({changeActivePage,currentProduct}) {
    const {id}=useParams();
    console.log(id);
    
    const [productDetails, setProductDetails] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [imgFile, setImgFile] = useState("");
  useEffect(() => {
    const sellerId = localStorage.getItem("ecommerce-seller-id");
   
    if (sellerId) {
      fetchProductAdded(currentProduct);
        setImgFile(productDetails.productImage);
      console.log(currentProduct);
      
    }
  }, []);
  const fetchProductAdded = async () => {
    try {
      const res = await axiosInstance.get(`/product/getproductbyid/${id}`);
      console.log("res:",res);
      

      if (res.status === 200) {
        setProductDetails(res?.data?.data);
        setImgFile(res?.data?.data?.productImage);
      }
    } catch (error) {
      const statusCode = error?.response?.status;
      if (statusCode === 400 || statusCode === 404) {
        toast.error("Something went wrong");
      } else {
        toast.error("Please try again after sometime");
      }
      console.log("Error on fetching the product", error);
    }
  };

  console.log("productDetails:",productDetails);
  const {
    title,
    subTitle,
    category,
    actualPrice,
    currentPrice,
    discountPercent,
    description,
    specification,
    care,
    productImage,
    sellerId,
  } = productDetails;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("subTitle", subTitle);
  formData.append("category", category);
  formData.append("actualPrice", actualPrice);
  formData.append("discountPercent", discountPercent);
  formData.append("description", description);
  formData.append("specification", specification);
  formData.append("care", care);
  formData.append("sellerId", sellerId);
  formData.append("productImage", imgFile);
  const handleEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (validationProductFields()) {
      updateProductDataToServer(formData, currentProduct);
    }
  };
  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });

    const image = e.target.files[0];

    if (image) {
      setImgFile(image);
    } else {
      setImgFile(productImage);
    }
}

const validationProductFields = () => {
    const {
      title,
      subTitle,
      category,
      actualPrice,
      discountPercent,
      description,
      specification,
      care,
    } = productDetails;

    if (
      !title ||
      !subTitle ||
      !category ||
      !actualPrice ||
      !discountPercent ||
      !description ||
      !specification ||
      !care
    ) {
      alert("Please fill the required fields");
      return false;
    }
    return true;
  };
  const updateProductDataToServer = async (formData, productId) => {
    try {
      const res = await axiosInstance.patch(
        `/product/updateproduct/${productId}`,
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        setProductDetails(res?.data?.data);
        toast.success("Product Details updated successfully");
        // changeActivePage("My Products");
      }
    } catch (error) {
      const statusCode = error?.response?.status;
      if (statusCode === 400 || statusCode === 404) {
        toast.error("Something went wrong");
      } else {
        toast.error("Please try again after sometime");
      }
      console.log("Error on updating product", error);
    }
  };

  return (
    <div className={styles.productDetailEditWrapper}>
    {productDetails && !isEdit ? (
      <div className={styles.productDetails}>
        <img src={`${BASE_URL}/${productImage}`} />
        <h4>Product Title:{title}</h4>
        <p>Sub Title:{subTitle}</p>
        <p>Category:{category}</p>
        <p>Actual Price:{actualPrice}</p>
        <p>Current Price:{currentPrice}</p>
        <p>Discount Percent:{discountPercent}</p>
        <p>Description:{description}</p>
        <p>Specification:{specification}</p>
        <p>Care Insructions:{care}</p>
        <Button variant="primary" onClick={handleEdit}>
          Edit
        </Button>
      </div>
    ) : (
      <div className={styles.editFormWrapper}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={styles.addProductForm}
        >
          <h1>Update Product Details</h1>
          <Form.Group controlId="validationCustom01" className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a title for the product
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom01" className="mb-3">
            <Form.Label>Product Subtitle</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Product sub title"
              value={subTitle}
              name="subTitle"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a subtitle for the product
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              name="category"
              value={category}
              onChange={handleChange}
            >
              <option value="">Open this select menu</option>
              <option value="fashion">Fashion</option>
              <option value="appliances">Home Appliances</option>
              <option value="electronics">Electronics</option>
              <option value="homeandkitchen">Home and Kitchen</option>
              <option value="booksandtoys">Books and Toys</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a category
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom03" className="mb-3">
            <Form.Label>Actual Price</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                placeholder="Price"
                required
                name="actualPrice"
                value={actualPrice}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter price
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationCustom04" className="mb-3">
            <Form.Label>Discount Percentage</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                placeholder="Discount"
                required
                name="discountPercent"
                value={discountPercent}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a value
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationCustom05" className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Details"
              required
              name="description"
              value={description}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom06" className="mb-3">
            <Form.Label>Product Specification</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Product Specification"
              required
              name="specification"
              value={specification}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product specification
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom07" className="mb-3">
            <Form.Label>Care Instructions</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Product Details"
              required
              name="care"
              value={care}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter care instructions
            </Form.Control.Feedback>
          </Form.Group>
          <p>{productImage && `Current Product Image:${productImage}`}
           
          </p>
          <Form.Group controlId="validationCustom06" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Product Image"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} className="mb-2">
            Update
          </Button>
          <Button
            variant="secondary"
            // onClick={() => changeActivePage("My Products")}
            className="mx-3 mb-2"
          >
            Back
          </Button>
        </Form>
      </div>
    )}
  </div>
  )
}

export default SellerProductEdit