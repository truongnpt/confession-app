import React, { useState } from 'react';
import { StyledHeader } from 'styles/StyledHeader';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Div } from 'components/Div';
import { Nav } from 'components/Nav';
import { Span } from 'components/Paragraph';
import { menu } from 'static/data/menu';
// import { MenuItem } from 'components/MenuItem';
import { Logo } from 'components/Logo';
import { scrollToTop } from 'utils/common';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export const Header = () => {
  //set active route
  const router = useRouter();
  const isActiveMenu = (slug) => {
    if (router.pathname.startsWith(slug)) {
      return true;
    }
    return false;
  };

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const toggleActionMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  //We cannot use toggle menu for mobile for some reasons
  const closeMenu = () => {
    setActiveMobileMenu(false);
  };

  const handleItemClick = () => {
    scrollToTop();
    setActiveMobileMenu(false);
  };

  return (
    <StyledHeader>
      <Container
        fluid="lg"
        className="d-flex flex-column justify-content-center"
      >
        <Row className="align-items-center">
          <Col>
            <Card className="border-0">
              <Logo
                width={200}
                height={51}
                className="d-none d-md-flex align-items-center"
              />
            </Card>
          </Col>
          <Col className="col-4 col-lg-9">
            <Card className="border-0 pt-1 pb-1 card">

            </Card>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};
