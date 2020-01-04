import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
import PageProducts from "../components/Products/PageProducts";
export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return <PageProducts />;
}
