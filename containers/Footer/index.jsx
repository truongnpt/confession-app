import { P } from 'components/Paragraph';
import { ROUTES } from 'constants/routes';
import ImageWraper from 'components/ImageWraper';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { companyInfo } from 'static/data/companyInfo';
import { footerMenu1 } from 'static/data/menu';
import {
  StyledFooter,
  StyledSocialIconWraper,
  StyledSocialIcon,
  StyledContactCol,
  StyledAddressTitle,
  StyledAddressWraper,
  StyledAddressIcon,
  StyledCompanyCol,
  StyledCompanyTitle,
  StyledSubText,
  StyledCopyright,
  StyledListCompany,
  StyledLogo,
  StyledMenuItem,
} from 'styles/StyledFooter';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="footer d-flex flex-column justify-content-center">
        <Row className="pt-4 pt-lg-0">
          <Col className="col-12 col-lg-4 col-xl-5">
            <Card className="border-0 bg-none">
              <StyledLogo src={'/logo-white.svg'} width={200} height={51} />
              <StyledSubText color="white" fontWeight="small">
                {companyInfo.footerContent}
              </StyledSubText>

              <StyledSocialIconWraper className="d-none d-md-flex">
                {companyInfo.social.map((item) => {
                  return (
                    <StyledSocialIcon
                      target="_blank"
                      rel="noreferrer"
                      key={item.id}
                      href={item.link}
                    >
                      <ImageWraper
                        src={`${ROUTES.ICON}${item.image}`}
                        alt={item.name}
                        width={33}
                        height={32}
                      />
                    </StyledSocialIcon>
                  );
                })}
              </StyledSocialIconWraper>
            </Card>
          </Col>

          <StyledContactCol className="col-12 col-lg-4">
            <Card className="border-0 bg-none">
              <StyledAddressTitle color="white" fontWeight="medium">
                CONTACT US
              </StyledAddressTitle>
              {companyInfo.contact.map((item) => {
                return (
                  <StyledAddressWraper key={item.id}>
                    <StyledAddressIcon>
                      <ImageWraper
                        src={item.icon}
                        alt={item.office}
                        height={24}
                        width={24}
                      />
                    </StyledAddressIcon>
                    <P color="white" fontWeight="small">
                      {item.address}
                    </P>
                  </StyledAddressWraper>
                );
              })}
            </Card>
          </StyledContactCol>

          <StyledCompanyCol className="col-12 col-lg-4 col-xl-3">
            <Card className="border-0 bg-none">
              <StyledCompanyTitle color="white" fontWeight="medium">
                COMPANY
              </StyledCompanyTitle>
              <StyledListCompany>
                {footerMenu1.map((item) => {
                  return (
                    <StyledMenuItem
                      key={item.id}
                      menu={item}
                      className="bg-none p-0 mb-3"
                    />
                  );
                })}
                <StyledSocialIconWraper className="d-md-none">
                  {companyInfo.social.map((item) => {
                    return (
                      <StyledSocialIcon
                        target="_blank"
                        rel="noreferrer"
                        key={item.id}
                        href={item.link}
                      >
                        <ImageWraper
                          src={ROUTES.ICON + item.image}
                          alt={item.name}
                          width={33}
                          height={32}
                        />
                      </StyledSocialIcon>
                    );
                  })}
                </StyledSocialIconWraper>
              </StyledListCompany>
            </Card>
          </StyledCompanyCol>
        </Row>
      </Container>
      <StyledCopyright>
        <Row>
          <Col>
            <P color="white" fontWeight="small">
              {companyInfo.copyright}
            </P>
          </Col>
        </Row>
      </StyledCopyright>
    </StyledFooter>
  );
};
