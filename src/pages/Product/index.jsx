import React from 'react';
import * as S from './index.styles';
import { useParams } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import useFetchAPI from '../../hooks/FetchAPI';
import AddToCartButton from '../../components/AddToCartButton';

function Product() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchAPI(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  const product = data?.data;

  if (isLoading) {
    return <S.Paragraph>Loading product details...</S.Paragraph>;
  }

  if (isError || !product) {
    return <S.Paragraph>Error fetching product details!</S.Paragraph>;
  }

  const discountDifference =
    product.discountedPrice && product.price
      ? (product.price - product.discountedPrice).toFixed(2)
      : null;

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
        <S.ProductDetailsContainer>
          <div>
            <S.ProductImage src={product.image.url} alt={product.title} />
            {product.tags && product.tags.length > 0 && (
              <div className="mt-3">
                <strong>Tags:</strong> {product.tags.join(', ')}
              </div>
            )}
          </div>
          <S.ProductInfo>
            <h1 className="display-5 mb-4">{product.title}</h1>
            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <>
                <p className="h4">
                  Price: kr {product.discountedPrice}{' '}
                  <span className="text-danger h5">
                    (<strike>kr {product.price}</strike>)
                  </span>
                </p>
                {discountDifference && (
                  <S.SaveText>Save: kr {discountDifference}</S.SaveText>
                )}
              </>
            ) : (
              <p className="h4">Price: kr {product.price}</p>
            )}
            <p className="my-3">{product.description}</p>
            <AddToCartButton product={product} />
          </S.ProductInfo>
        </S.ProductDetailsContainer>
        <S.GradientContainer className="mt-5">
          <div className="container">
            <h2 className="mb-4">Customer Reviews</h2>
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
