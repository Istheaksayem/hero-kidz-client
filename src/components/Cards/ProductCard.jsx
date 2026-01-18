// components/ProductCard.jsx
"use client"
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <figure className="relative h-48">
        <Image
          src={image}
          alt="product image"
          width={200}
          height={180}
          className="object-cover rounded-t-lg"
        />

        {discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            {discount}% OFF
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-warning" />
          <span>{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500">{sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400 text-sm">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <div className="card-actions mt-3">
          <button
            onClick={() => onAddToCart(product)}
            className="btn btn-primary btn-sm w-full flex items-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
