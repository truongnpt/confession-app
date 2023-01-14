import React, { useState } from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { StyledWorkWithUs } from 'styles/StyledWorkWithUs';
import { Button } from 'components/Button';
import { Span } from 'components/Paragraph';
import { validationSchema } from '../../validateSchemas/contactFormValidation';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { ContactService } from 'services/contact.service';
import { useRouter } from 'next/router';
import { handleError } from 'utils/error';

export const WorkWithUs = () => {
  const initialValues = {
    full_name: '',
    phone: '',
    email: '',
    company_name: '',
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
    <StyledWorkWithUs>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ handleChange, setFieldValue, values, errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="form-grid">
              <Form.Group
                as={Col}
                controlId="formGridFullName"
                className="col-12 col-md-6 requiredInput"
              >
                <FloatingLabel label="Full Name">
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
                controlId="formGridCompany"
                className="col-12 col-md-6 requiredInput"
              >
                <FloatingLabel label="Company">
                  <Form.Control
                    type="text"
                    name="company_name"
                    onChange={handleChange}
                    value={values.company_name}
                    placeholder="Company"
                    isInvalid={!!errors.company_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.company_name}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="form-grid">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="col-12 col-md-6 requiredInput"
              >
                <FloatingLabel label="Your Email">
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Your Email"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridPhone"
                className="col-12 col-md-6 requiredInput"
              >
                <FloatingLabel label="Phone Number">
                  <Form.Control
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="Phone Number"
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-2 mb-lg-0">
              <Form.Group
                as={Col}
                controlId="formGridWessage"
                className="mb-3 mb-md-4 pl-1 pr-1 requiredInput"
              >
                <FloatingLabel label="About Project">
                  <Form.Control
                    name="messages"
                    onChange={handleChange}
                    value={values.messages}
                    placeholder="About Project"
                    isInvalid={!!errors.messages}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.messages}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              <Span>Send Message</Span>
            </Button>
          </Form>
        )}
      </Formik>
    </StyledWorkWithUs>
  );
};

WorkWithUs.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  field: PropTypes.object,
  form: PropTypes.object,
};
