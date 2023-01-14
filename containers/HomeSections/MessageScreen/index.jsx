import React, { useState } from 'react';
import { Span } from 'components/Paragraph';
import ImageWraper from 'components/ImageWraper';
import {Container, Row, Col, Card, Form } from 'react-bootstrap';
import { H2, H3, H4} from 'components/Heading';
import {
  StyledMessageScreen,
  StyledHeroTitle,
} from 'styles/StyledHomePage/StyledMessageScreen';
import { Button } from 'components/Button';
import { Div } from 'components/Div';
import { AnimationWrapper } from 'components/AnimationWrapper';
import { ROUTES } from 'constants/routes';
import { IconWrapper } from 'components/IconWrapper';
import ArrowIcon from 'public/icons/left-arrow.svg';

export const MessageScreen = (props) => {
  const { setComponent } = props;
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    // setCheck(!check);
  }

  return (
    <StyledMessageScreen>
      <Container className="hero-section d-flex flex-column justify-content-xl-center">
      <Row className="align-items-center justify-content-between">
        <Col className="col-6">
          <Card className="bg-none border-0 py-2">
            <IconWrapper className="left-arrow" onClick={() => setComponent('main')} icon={ArrowIcon} />
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
                <H4> Anh thích em ák ❤️</H4> 
                  <H3>Làm bạn gái anh nha.</H3>
              </Card>
            </AnimationWrapper>
            <AnimationWrapper
                hiddenAnimationVariants={{ y: 60 }}
                className="hero-content--learn-more mt-5"
              >
                <Button
                  variant="secondary"
                  className="btn pulse heart-btn d-flex m-auto mt-5"
                  onClick={() => handleClick()}
                >
                  <Span fontSize="">❤️</Span>
                </Button>
              </AnimationWrapper>
          </Col>
        </Row>
      </Container>
    </StyledMessageScreen>
  );
};
