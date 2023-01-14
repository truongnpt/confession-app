import * as Yup from 'yup';

const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const validationSchema = Yup.object().shape({
  full_name: Yup.string()
    .max(40)
    .strict(true)
    .required('Please enter your full name.'),
  phone: Yup.string()
    .strict(true)
    .matches(PHONE_REGEX, 'Phone number is invalid.')
    .min(7)
    .max(20)
    .required('We need this information to contact you.'),
  email: Yup.string()
    .email('Please enter your email address in format: yourname@example.com.')
    .required('We need this information to contact you.'),
  company_name: Yup.string()
    .strict(true)
    .required('Please enter company name.'),
  messages: Yup.string()
    .trim('Please provide us with valid project information')
    .required('Please provide us with your project information.'),
});

export const validationSchemaStartGrowing = Yup.object().shape({
  full_name: Yup.string()
    .max(40)
    .strict(true)
    .required('Please enter your full name.'),
  email: Yup.string()
    .email('Please enter your email address in format: yourname@example.com.')
    .required('We need this information to contact you.'),
  messages: Yup.string()
    .trim('Please provide us with valid project information')
    .required('Please provide us with your project information.'),
});
