import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./cardsViews.css";

export const CardsViews = () => {
  return (
    <>
      <div className="container mt-3">
        <h3>favorite cards of the protagonists</h3>
        <div className="cards-views">
          <Container fluid>
            <Row>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/46986415.jpg"
                    alt="Dark Magician"
                  />
                  <div className="footer-cards">
                    <p>Dark Magician</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/89943723.jpg"
                    alt="Elemental Hero Neos"
                  />
                  <div className="footer-cards">
                    <p>E.Hero Neos</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/44508094.jpg"
                    alt="Stardust Dragon"
                  />
                  <div className="footer-cards">
                    <p>Stardust Dragon</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/84013237.jpg"
                    alt="Number 39: Utopia"
                  />
                  <div className="footer-cards">
                    <p>Number 39: Utopia</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/16178681.jpg"
                    alt="Odd-eyes Pendulum Dragon"
                  />
                  <div className="footer-cards">
                    <p>Odd-eyes Pendulum Dragon</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://images.ygoprodeck.com/images/cards_small/5043010.jpg"
                    alt="Firewall Dragon"
                  />
                  <div className="footer-cards">
                    <p>Firewall Dragon</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
