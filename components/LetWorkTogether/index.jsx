import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { validationSchemaStartGrowing } from '../../validateSchemas/contactFormValidation';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { ContactService } from 'services/contact.service';
import { useRouter } from 'next/router';
import { handleError } from 'utils/error';
import { AnimationWrapper } from 'components/AnimationWrapper';
import {
  StyledContactContent,
  StyledContactTittle,
  StyledLetWorkTogether,
  StyledSpan,
  StyledButton,
} from 'styles/StyledLetWorkTogether';
import SendIcon from 'public/icons/icon-tool-send.svg';

export const LetWorkTogether = () => {
  const initialValues = {
    full_name: '',
    email: '',
    messages: '',
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleOnSubmit = async (values) => {
    setIsSubmitting(true);
    const infoSendContact = {
      ...values,
      messages: values.messages.trim(),
    };
    try {
      const response = await ContactService.sendInfoContact(infoSendContact);
      if (response.data) {
        router.push('/thank-you');
      }
    } catch (error) {
      handleError(error.message);
    }
    setIsSubmitting(false);
  };

  return (
    <StyledLetWorkTogether className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col className="col-12">
            <StyledContactContent>
              <AnimationWrapper>
                <StyledContactTittle color="primary">
                  Let OpsSpark<br />
                  Fuel Your Business
                </StyledContactTittle>
              </AnimationWrapper>
              <AnimationWrapper>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleOnSubmit}
                  validationSchema={validationSchemaStartGrowing}
                  validateOnChange={false}
                >
                  {({ handleChange, values, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="work-with-us-form">
                      <Row className="form-grid">
                        <Form.Group
                          as={Col}
                          controlId="formGridFullName"
                          className="col-12 col-md-6"
                        >
                          <FloatingLabel
                            label="Full Name"
                            className="requiredInput"
                          >
                            <Form.Control
                              type="text"
                              name="full_name"
                              placeholder="Full Name"
                              onChange={handleChange}
                              value={values.full_name}
                              isInvalid={!!errors.full_name}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.full_name}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          controlId="formGridEmail"
                          className="col-12 col-md-6"
                        >
                          <FloatingLabel
                            label="Email"
                            className="requiredInput"
                          >
                            <Form.Control
                              type="text"
                              name="email"
                              placeholder="Email"
                              onChange={handleChange}
                              value={values.email}
                              isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group>
                      </Row>
                      <Row className="mb-2 mb-lg-0">
                        <Form.Group
                          as={Col}
                          controlId="formGridWessage"
                          className="mb-3 mb-md-4"
                        >
                          <FloatingLabel
                            label="About your project"
                            className="requiredInput"
                          >
                            <Form.Control
                              name="messages"
                              placeholder="About project"
                              id="about"
                              className="messages"
                              onChange={handleChange}
                              value={values.messages}
                              isInvalid={!!errors.messages}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.messages}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Form.Group>
                      </Row>

                      <StyledButton variant="primary" isLoading={isSubmitting}>
                        <React.Fragment>
                          <SendIcon />
                          <StyledSpan>MESSAGE US</StyledSpan>
                        </React.Fragment>
                      </StyledButton>
                    </Form>
                  )}
                </Formik>
              </AnimationWrapper>
            </StyledContactContent>
          </Col>
        </Row>
      </Container>
    </StyledLetWorkTogether>
  );
};

LetWorkTogether.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  field: PropTypes.object,
  form: PropTypes.object,
};
