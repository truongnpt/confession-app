import React, { useState } from 'react';
import { P, Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import {Container, Row, Col, Card, Form } from 'react-bootstrap';
import { H2, H3, H4 } from 'components/Heading';
import {
  StyledMainScreen,
  StyledHeroTitle,
} from 'styles/StyledHomePage/StyledMainScreen';
import { Button } from 'components/Button';
import { Div } from 'components/Div';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { ROUTES } from 'constants/routes';
import { IconWrapper } from 'components/IconWrapper';
import ArrowIcon from 'public/icons/left-arrow.svg';

export const MainScreen = (props) => {
  const { setComponent } = props;

  const handleClick = () => {
    setComponent('message');
  }

  return (
    <StyledMainScreen>
      <Container className="hero-section d-flex flex-column justify-content-xl-center">
      <Row className="align-items-center justify-content-between">
        <Col className="col-6">
          <Card className="bg-none border-0 py-2">
            <IconWrapper className="left-arrow" onClick={() => setComponent('login')} icon={ArrowIcon} />
          </Card>
        </Col>
        <Col className="col-6">
          <Card className="bg-none border-0 py-2">
            <Div className="top-image">
              <ImageWraper
              className='rotating'
                src={`${ROUTES.HEROIMAGE}tien.jpg`}
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
            <AnimationWrapper hiddenAnimationVariants={{ y: 60 }}>
              <StyledHeroTitle color="white">
                <H2>KIM TIỀN</H2>
              </StyledHeroTitle>
            </AnimationWrapper>
            <AnimationWrapper hiddenAnimationVariants={{ y: 60 }}>
              <Card className="loading hero-content border-0 px-4 py-4">
                  <H3>Anh có điều muốn nói :))</H3>
              </Card>
            </AnimationWrapper>
            <AnimationWrapper
                hiddenAnimationVariants={{ y: 60 }}
                className="hero-content--learn-more"
              >
                <Button
                  variant="secondary"
                  className="btn d-flex m-auto mt-5"
                  onClick={() => handleClick()}
                >
                  <Span>OPEN</Span>
                </Button>
              </AnimationWrapper>
          </Col>
        </Row>
      </Container>
    </StyledMainScreen>
  );
};
