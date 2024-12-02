import React from "react";
import * as S from "./index.styles";
import { useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import useFetchAPI from "../../hooks/FetchAPI";

function Product() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchAPI(`https://v2.api.noroff.dev/online-shop/${id}`);

  const product = data?.data;

  if (isLoading) {
    return <S.Paragraph>Loading product details...</S.Paragraph>;
  }

  if (isError || !product) {
    return <S.Paragraph>Error fetching product details!</S.Paragraph>;
  }

  return (
    <div>
      <S.HeaderSection>
        <div className="container">
          <S.BackLink to="/">
            <FaArrowCircleLeft /> Back to previous page
          </S.BackLink>
        </div>
      </S.HeaderSection>

      <div className="container">
        <div className="d-flex gap-4 my-4">
          <div className="flex-shrink-0">
            <S.ProductImage src={product.image.url} alt={product.title} />
            {product.tags && product.tags.length > 0 && (
              <div className="mt-3">
                <strong>Tags:</strong> {product.tags.join(", ")}
              </div>
            )}
          </div>
          <div className="flex-grow-1">
            <h2 className="display-5 mb-4">{product.title}</h2>
            {product.discountedPrice && product.discountedPrice < product.price ? (
              <p className="h4">
                Price: kr {product.discountedPrice}{" "}
                <span className="text-danger h5">
                  (<strike>kr {product.price}</strike>)
                </span>
              </p>
            ) : (
              <p className="h4">Price: kr {product.price}</p>
            )}
            <p className="my-3">{product.description}</p>
            <button className="btn btn-warning mt-4 px-4 py-2 fw-bold">Add to Cart</button>
          </div>
        </div>
        <S.GradientContainer className="mt-5">
          <div className="container">
            <h3 className="mb-4">Customer Reviews</h3>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <S.ReviewContainer key={index}>
                  <p className="fw-bold">{review.username}</p>
                  <p>{review.description}</p>
                  <p className="text-primary">Rating: {review.rating} / 5</p>
                </S.ReviewContainer>
              ))
            ) : (
              <p>No reviews of this product yet.</p>
            )}
          </div>
        </S.GradientContainer>
      </div>
    </div>
  );
}

export default Product;
