import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartReducer";
import { v4 as uuidv4 } from 'uuid';

const Book = (book) => {
  const dispatch = useDispatch();
  const cartProduct = {
     cartId:uuidv4(),
    image:book.cover_img,
    title:book.title,
    price:book.edition_count
    
     
    
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
    alert("Item added")
   };
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Price: </span>
          <span>{book.edition_count}$</span>
        </div>
      </div>
      <button type='button' onClick={addToCart}  ><FaCartPlus style={{width:'30px' ,height:"30px"}} /></button>{/**function for generating action */}
    </div>
  )
}

export default Book