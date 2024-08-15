import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "../components/BannerFile/Banner";
import { addToCart } from "../redux/actions";
import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [noProductsFound, setNoProductsFound] = useState(false);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products?_page=${page}&_limit=10`
      );

      if (page === 1) {
        setProducts(response.data);
      } else {
        setProducts((prevProducts) => {
          const newProducts = response.data.filter(
            (newProduct) =>
              !prevProducts.some((product) => product.id === newProduct.id)
          );
          return [...prevProducts, ...newProducts];
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter((product) => {
        if (priceRange === "low") return product.price < 100;
        if (priceRange === "medium")
          return product.price >= 100 && product.price < 500;
        if (priceRange === "high") return product.price >= 500;
        return true;
      });
    }

    setNoProductsFound(filtered.length === 0);

    return filtered;
  }, [category, priceRange, products]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Ürünü sepete ekle
  };

  return (
    <>
      <Banner />
      <div className="container">
        <div className="filter_outler">
          <div className="header_all_product">All Products</div>

          <div className="filters">
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">All Category</option>
              <option value="Elektronik">Electronic</option>
              <option value="Moda">Fashion</option>
            </select>

            <select
              onChange={(e) => setPriceRange(e.target.value)}
              value={priceRange}
            >
              <option value="">All Price</option>
              <option value="low">100 TL in min</option>
              <option value="medium">100 TL - 500 TL between</option>
              <option value="high">500 TL ve above</option>
            </select>
          </div>
        </div>
        <div className="row">
          {noProductsFound ? (
            <p className="notProduct">Product Not Found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                data-aos="flip-down"
                key={product.id}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
              >
                <div className="card_product">
                  <div className="product_image_outher">
                    <img
                      className="images_product"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="productCardDetail">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.price}.00 ₺</p>
                    </div>
                    <Link
                      to="/cart"
                      onClick={() => handleAddToCart(product)}
                      className="buttonCard"
                    >
                      Add Basket
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {loading && <p>Yükleniyor...</p>}
      </div>
    </>
  );
};

export default HomePage;
