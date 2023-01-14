import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LinkWrapper } from 'components/Navigation';
import PropTypes from 'prop-types';
import {
  StyledCaseCard,
  StyledCaseCardContent,
  StyledCaseCardSubText,
  StyledCaseCardTitle,
} from 'styles/StyledGlobal/StyledCaseCard';
import { ROUTES } from 'constants/routes';
import ImageWrapper from 'components/ImageWraper';
import { apiImgPath } from 'utils/imgUtils';
import ReadMore from 'components/ReadMore';
export const CaseCard = (props) => {
  const { caseItem } = props;
  if (!caseItem) return <div />;
  return (
    <StyledCaseCard>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <ImageWrapper
              src={apiImgPath(caseItem.thumbnail.url)}
              alt={caseItem.name}
              width={552}
              height={440}
            />
          </Col>
          <Col xs={12} lg={6}>
            <StyledCaseCardContent>
              <LinkWrapper href={`${ROUTES.CASE}${caseItem.slug}`}>
                <StyledCaseCardTitle>{caseItem.name}</StyledCaseCardTitle>
              </LinkWrapper>
              <StyledCaseCardSubText>
                {caseItem.description}
              </StyledCaseCardSubText>
              <ReadMore href={`${ROUTES.CASE}${caseItem.slug}`} />
            </StyledCaseCardContent>
          </Col>
        </Row>
      </Container>
    </StyledCaseCard>
  );
};

CaseCard.propTypes = {
  caseItem: PropTypes.object,
};
