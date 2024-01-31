import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/shop.css";

// import products from "./../assets/data/products";
import { useState } from "react";
import ProductList from "./../components/UI/ProductList";
import UseGetData from "../custom-hooks/UseGetData";

const Shop = () => {
  const { data: products } = UseGetData("products");

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const Sorting = (e) => {
    const sortBy = e.target.value;

    if (sortBy === "ascending") {
      setProductsData((prevProducts) =>
        [...prevProducts].sort((a, b) => parseInt(a.price) - parseInt(b.price))
      );
    }

    if (sortBy === "descending") {
      setProductsData((prevProducts) =>
        [...prevProducts].sort((a, b) => parseInt(b.price) - parseInt(a.price))
      );
    }
  };

  const handleFilter = (e) => {
    const filteredValue = e.target.value;

    if (filteredValue === "sofa") {
      const filteredSofaProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredSofaProducts);
    }

    if (filteredValue === "mobile") {
      const filteredSofaProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredSofaProducts);
    }

    if (filteredValue === "chair") {
      const filteredSofaProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredSofaProducts);
    }

    if (filteredValue === "watch") {
      const filteredSofaProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredSofaProducts);
    }

    if (filteredValue === "wireless") {
      const filteredSofaProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredSofaProducts);
    }

    // Reset the sorting when a filter is applied
    setProductsData((prevProducts) => prevProducts.slice());
  };

  const handleSearch = (e) => {
    const filteredSearch = e.target.value;
    const filteredProdcuts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(filteredSearch.toLocaleLowerCase())
    );
    setProductsData(filteredProdcuts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Cataegory</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={Sorting}>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">no Products are found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
