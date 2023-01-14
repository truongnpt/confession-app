import React from 'react';
import ImageWrapper from 'components/ImageWraper';
import { AnimationWrapper } from 'components/AnimationWrapper';
import {
  StyledCaseCardDetail,
  StyledCaseCardDetailContent,
  StyledCaseCardDetailImage,
  StyledCaseCardDetailText,
  StyledCaseCardDetailTitle,
  StyledCaseCardTechnologies,
  StyledCaseCardTechnologyItem,
  StyledCaseCardTechnologyItemImage,
  StyledCaseCardTechnologyItemName,
} from 'styles/StyledCasesPage/StyledCaseCardDetail';
import { Col, Row } from 'react-bootstrap';
import { apiImgPath } from 'utils/imgUtils';
import CasePropTypes from 'utils/casePropTypes';

export const CaseCardDetail = (props) => {
  const { caseDetail } = props;

  return (
    <StyledCaseCardDetail>
      <AnimationWrapper>
        <StyledCaseCardDetailImage>
          <ImageWrapper
            src={apiImgPath(caseDetail?.header_image_desktop?.url)}
            alt={caseDetail?.name}
            width={caseDetail?.header_image_desktop?.width}
            height={caseDetail?.header_image_desktop?.height}
            unoptimized={true}
          />
        </StyledCaseCardDetailImage>
      </AnimationWrapper>
      {caseDetail?.overview && (
        <AnimationWrapper>
          <StyledCaseCardDetailContent>
            <StyledCaseCardDetailTitle>Overview</StyledCaseCardDetailTitle>
            <StyledCaseCardDetailText
              dangerouslySetInnerHTML={{ __html: caseDetail?.overview }}
            ></StyledCaseCardDetailText>
          </StyledCaseCardDetailContent>
        </AnimationWrapper>
      )}

      {caseDetail?.challenges && (
        <AnimationWrapper>
          <StyledCaseCardDetailContent>
            <StyledCaseCardDetailTitle>Challenges</StyledCaseCardDetailTitle>
            <StyledCaseCardDetailText
              dangerouslySetInnerHTML={{ __html: caseDetail?.challenges }}
            ></StyledCaseCardDetailText>
          </StyledCaseCardDetailContent>
        </AnimationWrapper>
      )}

      {caseDetail?.solution && (
        <AnimationWrapper>
          <StyledCaseCardDetailContent>
            <StyledCaseCardDetailTitle>Solution</StyledCaseCardDetailTitle>
            <StyledCaseCardDetailText
              dangerouslySetInnerHTML={{ __html: caseDetail?.solution }}
            ></StyledCaseCardDetailText>
          </StyledCaseCardDetailContent>
        </AnimationWrapper>
      )}

      {caseDetail?.achievement && (
        <AnimationWrapper>
          <StyledCaseCardDetailContent>
            <StyledCaseCardDetailTitle>Achievement</StyledCaseCardDetailTitle>
            <StyledCaseCardDetailText
              dangerouslySetInnerHTML={{ __html: caseDetail?.achievement }}
            ></StyledCaseCardDetailText>
          </StyledCaseCardDetailContent>
        </AnimationWrapper>
      )}

      {caseDetail?.technologies?.length > 0 && (
        <AnimationWrapper>
          <StyledCaseCardDetailContent>
            <StyledCaseCardDetailTitle>
              Technology Used
            </StyledCaseCardDetailTitle>
            <StyledCaseCardTechnologies>
              <Row>
                {caseDetail?.technologies.map((item, index) => {
                  return (
                    <Col sm={4} md={4} lg={4} xl={3} key={index}>
                      <StyledCaseCardTechnologyItem>
                        <StyledCaseCardTechnologyItemImage>
                          <ImageWrapper
                            src={apiImgPath(item?.logo?.url)}
                            width={40}
                            height={40}
                            alt={item?.name}
                            objectFit={'contain'}
                          />
                        </StyledCaseCardTechnologyItemImage>
                        <StyledCaseCardTechnologyItemName>
                          {item?.name}
                        </StyledCaseCardTechnologyItemName>
                      </StyledCaseCardTechnologyItem>
                    </Col>
                  );
                })}
              </Row>
            </StyledCaseCardTechnologies>
          </StyledCaseCardDetailContent>
        </AnimationWrapper>
      )}
    </StyledCaseCardDetail>
  );
};

CaseCardDetail.propTypes = {
  caseDetail: CasePropTypes,
};
