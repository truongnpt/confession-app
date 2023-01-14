import React, { useState } from 'react';
import { Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import {Container, Row, Col, Card, Form } from 'react-bootstrap';
import { H2 } from 'components/Heading';
import {
  StyledGiftScreen,
  StyledHeroTitle,
} from 'styles/StyledHomePage/StyledGiftScreen';
import { Button } from 'components/Button';
import { Div } from 'components/Div';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { ROUTES } from 'constants/routes';
import { IconWrapper } from 'components/IconWrapper';
import ArrowIcon from 'public/icons/left-arrow.svg';

export const GiftScreen = (props) => {
  const [check, setCheck] = useState(false);
  const cardValue = '123456';
  const { setComponent } = props;
  return (
    <StyledGiftScreen>
      <Container className="hero-section d-flex flex-column justify-content-xl-center">
      <Row className="align-items-center justify-content-between">
        <Col className="col-6">
          <Card className="bg-none border-0 py-2">
            <IconWrapper className="left-arrow" onClick={() => setComponent('message')} icon={ArrowIcon} />
          </Card>
        </Col>
        <Col className="col-6">
          <Card className="bg-none border-0 py-2">
            <Div className="top-image">
              <ImageWraper
                src={`${ROUTES.HEROIMAGE}truongnpt.jpg`}
                width={40}
                height={40}
                objectFit={'contain'}
                alt="hero image"
                unoptimized={true}
              />
            </Div>
          </Card>
        </Col>
      </Row>
        <Row>
          <Col className="col-12 col-lg-6">
            <Card className="hero-content bg-none border-0 px-2">
              <AnimationWrapper hiddenAnimationVariants={{ y: 60 }}>
                <StyledHeroTitle color="white">
                  <H2>Viettel Gift Card</H2>
                </StyledHeroTitle>
              </AnimationWrapper>
              <AnimationWrapper>
                <Div className="hero-image mb-5">
                  <ImageWraper
                    src={`${ROUTES.HEROIMAGE}Gift_Card.png`}
                    width={634}
                    height={367}
                    objectFit={'cover'}
                    alt="hero image"
                    unoptimized={true}
                  />
                  <Form.Control
                    type={check ? 'text' : 'password'}
                    name="phone_number"
                    placeholder="Số điện thoại của bạn"
                    value={cardValue}
                  />
                </Div>
              </AnimationWrapper>
              <AnimationWrapper
                hiddenAnimationVariants={{ y: 60 }}
                className="hero-content--learn-more"
              >
                <Button
                  variant="primary"
                  className="d-flex m-auto"
                  onClick={() => setCheck(true)}
                >
                  <Span>MỞ QUÀ NÀO</Span>
                </Button>
              </AnimationWrapper>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledGiftScreen>
  );
};
