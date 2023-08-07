import { Row, Col, Input, Select, Slider, Card, Button, Image } from 'antd';
import './products.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TopNavbar from './nav2'
const { Option } = Select;

const Products = () => {
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [cartCount, setCartCount] = useState(0); 

  const products = [
    { name: 'Top', reviews: 5, image: '/Women1.webp', color: 'red', price: 150 },
    { name: 'Shoes', reviews: 4, image: '/kid.webp', color: 'blue', price: 80 },
    { name: 'Shirt', reviews: 3, image: '/product3.jpg', color: 'green', price: 30 },
    { name: 'Pent', reviews: 4, image: '/product4.jpg', color: 'red', price: 50 },
    // Add more product items as needed
  ];

  const handleColorChange = (value) => {
    setSelectedColors(value);
  };

  const handlePriceRangeChange = (value) => {
    setSelectedPriceRange(value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
    (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
    product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
  );

  const handleProductCardClick = (index) => {
    // You can use the 'index' variable to navigate to the product's details page
    navigate(`/product`);
  };
  const handlecart=()=>{
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.push(products);
    localStorage.setItem('cart', JSON.stringify(cartData));
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <TopNavbar cartCount={cartCount} />
      <section className='heading'>
        <div className="container">
          <h1>Shop all products</h1>
        </div>
      </section>
      <section className='products-con'>
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={6} xl={4} className='product-col'>
              <div className="product-filter">
                <h2>Filter Products</h2>
                <Input
                  placeholder="Product Search"
                  value={searchKeyword}
                  onChange={e => setSearchKeyword(e.target.value)}
                />
                <Select
                  mode="multiple"
                  style={{ width: '100%', marginTop: '16px' }}
                  placeholder="Select colors"
                  onChange={handleColorChange}
                  value={selectedColors}
                >
                  <Option value="red">Red</Option>
                  <Option value="blue">Blue</Option>
                  <Option value="green">Green</Option>
                </Select>
                <Slider
                  range
                  step={10}
                  min={0}
                  max={1000}
                  defaultValue={[0, 1000]}
                  style={{ marginTop: '16px' }}
                  value={selectedPriceRange}
                  onChange={handlePriceRangeChange}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={18} xl={20} className='product-col'>
              <Row gutter={[16, 16]}>
                {filteredProducts.map((product, index) => (
                  <Col key={index} xs={24} sm={24} md={12} lg={6}>
                    <Card className="product-card" >
                      <Image
                        onClick={() => handleProductCardClick(index)}
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                        preview={false}
                      />
                      <div className="product-info">
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-reviews">Reviews: {product.reviews}</p>
                      </div>
                      <Button className="add-to-cart-button" type="primary" block onClick={()=>handlecart()}>
                        Add to Cart
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          
        </div>
      </section>
      
    </>
  );
};

export default Products;
