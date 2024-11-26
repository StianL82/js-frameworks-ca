import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import ProductGrid from "../../components/ProductGrid";
import SearchBar from "../../components/SearchBar";
import useFetchAPI from "../../hooks/FetchAPI";

function Home() {
  const { data: products, isLoading, isError } = useFetchAPI("https://v2.api.noroff.dev/online-shop/");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products.data || []);
    }
  }, [products]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredProducts(products.data);
    } else {
      const filtered = products.data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (isLoading) {
    return <S.Paragraph>Loading products...</S.Paragraph>;
  }

  if (isError) {
    return <S.Paragraph>Error fetching products!</S.Paragraph>;
  }

  return (
    <div className="container">
      <S.Heading>Welcome to My Homepage</S.Heading>
      <S.Paragraph>
        This is a test to see if all styles and components are working correctly.
      </S.Paragraph>
      <SearchBar onSearch={handleSearch} />
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <S.Paragraph>No products available</S.Paragraph>
      )}
    </div>
  );
}

export default Home;
