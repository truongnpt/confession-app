import React, { useState } from 'react';
import { Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import {Container, Row, Col, Card, Form } from 'react-bootstrap';
import { H2 } from 'components/Heading';
import {
  StyledLoginScreen,
  StyledHeroTitle,
} from 'styles/StyledHomePage/StyledLoginScreen';
import { Button } from 'components/Button';
import { Div } from 'components/Div';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { ROUTES } from 'constants/routes';

export const LoginScreen = (props) => {
  const { setComponent } = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState();
  const PHONE_MATCH = '0399812700';
  const ERROR_VALUE = 'Số điện thoại không đúng. Gợi ý *******700';
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleClick = () => {
    setComponent('main');
  }

  return (
    <StyledLoginScreen>
      <Container className="loading hero-section d-flex flex-column justify-content-xl-center">
        <Row>
          <Col className="col-12 col-lg-6">
            <Card className="hero-content bg-none border-0 px-2">
              <AnimationWrapper hiddenAnimationVariants={{ y: 60 }}>
                <StyledHeroTitle color="white">
                  Hi Hi!
                  <br />
                  <H2>KIM TIỀN</H2>
                </StyledHeroTitle>
              </AnimationWrapper>
              <AnimationWrapper>
              <Div className="hero-image pulse mt-5 m-auto">
                <ImageWraper
                  src={`${ROUTES.HEROIMAGE}tien.jpg`}
                  width={200}
                  height={200}
                  objectFit={'contain'}
                  alt="hero image"
                  unoptimized={true}
                />
              </Div>
            </AnimationWrapper>
              <AnimationWrapper
                hiddenAnimationVariants={{ y: 60 }}
                className="hero-content--learn-more mt-5"
              >
                <Button
                  variant="secondary"
                  className="btn d-flex m-auto mt-5"
                  onClick={() => handleClick()}
                >
                  <Span>CLICK ME</Span>
                </Button>
              </AnimationWrapper>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledLoginScreen>
  );
};
