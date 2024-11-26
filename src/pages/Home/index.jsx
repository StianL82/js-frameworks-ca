import React from "react";
import * as S from "./index.styles";
import useFetchAPI from "../../hooks/FetchAPI";
import ProductGrid from "../../components/ProductGrid";

function Home() {
  const { data, isLoading, isError } = useFetchAPI(
    "https://v2.api.noroff.dev/online-shop/"
  );

  if (isLoading) {
    return <S.Paragraph>Loading products...</S.Paragraph>;
  }

  if (isError) {
    return <S.Paragraph>Error fetching products!</S.Paragraph>;
  }

  const products = data?.data || [];

  return (
    <div className="container">
      <S.Heading>Welcome to My Homepage</S.Heading>
      <S.Paragraph>
        This is a test to see if all styles and components are working correctly.
      </S.Paragraph>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <S.Paragraph>No products available</S.Paragraph>
      )}
    </div>
  );
}

export default Home;