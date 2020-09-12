import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce
      receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que vai
      caçá sua turmis! Si u mundo tá muito paradis? Toma um mé que o mundo vai
      girarzis! Casamentiss faiz malandris se pirulitá. Nec orci ornare
      consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
      Atirei o pau no gatis, per gatis num morreus. In elementis mé pra quem é
      amistosis quis leo. Mé faiz elementum girarzis, nisi eros vermeio.
      <br />
      <br />
      ITens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce
      receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que vai
      caçá sua turmis! Si u mundo tá muito paradis? Toma um mé que o mundo vai
      girarzis! Casamentiss faiz malandris se pirulitá. Nec orci ornare
      consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
      Atirei o pau no gatis, per gatis num morreus. In elementis mé pra quem é
      amistosis quis leo. Mé faiz elementum girarzis, nisi eros vermeio.
    </p>
  </Description>
);

export default Product;
