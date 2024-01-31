import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md4="6">
            <div className="logo">
              <div className="multimart">
                <h1 className="text-white">MultiShop</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Have questions or need assistance? Our friendly customer support
              team is here to help. Get in touch via phone, email, or live chat.
              We're dedicated to providing excellent service and ensuring your
              shopping experience is seamless.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Category</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 df-flex align-item-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>istanbul, Turkey ,123,Center</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 df-flex align-item-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+90 545123456</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 df-flex align-item-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>abdulkerimy94@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>

        <Col lg="12">
          <p className="footer__copyright">
            Copyright {year} developed by Abdulkerim Yalçın. All rights
            reserved.{" "}
          </p>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
